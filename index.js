const puppeteer = require('puppeteer');
const fs = require('fs');  // Importa o módulo fs para escrever o arquivo JSON

async function autoScroll(page) {
    await page.evaluate(async () => {
        await new Promise((resolve) => {
            let totalHeight = 0;
            const distance = 300; // Distância a ser rolada por vez
            const timer = setInterval(() => {
                const scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if (totalHeight >= scrollHeight) {
                    clearInterval(timer);
                    resolve();
                }
            }, 300); // Tempo entre os scrolls
        });
    });
}

async function scrap() {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    try {
        await page.goto('https://www.futebolnatv.com.br/jogos-hoje/', { waitUntil: 'networkidle2' });

        // Rola a página para carregar todas as imagens
        await autoScroll(page);

        const result = await page.evaluate(() => {
            const infoGames = [];
            const games = document.querySelectorAll('.gamecard');

            games.forEach((game) => {
                const teams = game.querySelectorAll('.box_time_logo_title > img');
                const time = game.querySelector('.box_time')?.innerText.trim() || 'Horário não disponível';
                const championship = game.querySelector('.col-sm-8')?.innerText.trim() || 'Campeonato não encontrado'; // Nome do campeonato
                const channels = Array.from(game.querySelectorAll('.bcmact > span')).map(channel => channel.innerText.trim());

                infoGames.push({
                    team1: { 
                        name: teams[0]?.alt || 'Desconhecido', 
                        logo: 'https://www.futebolnatv.com.br'+teams[0]?.getAttribute('src') || 'https://www.futebolnatv.com.br'+teams[0]?.getAttribute('data-src') || 'Sem imagem'
                    },
                    team2: { 
                        name: teams[1]?.alt || 'Desconhecido', 
                        logo: 'https://www.futebolnatv.com.br'+teams[1]?.getAttribute('src') || 'https://www.futebolnatv.com.br'+teams[1]?.getAttribute('data-src') || 'Sem imagem'
                    },
                    time,
                    championship,
                    channels: channels.length > 0 ? channels : ['Nenhum canal disponível']
                });
            });

            return infoGames;
        });

        // Escreve o arquivo JSON no diretório atual
        fs.writeFileSync('jogos.json', JSON.stringify(result, null, 2));
        console.log(result);
    } catch (error) {
        console.error('Erro ao fazer scraping:', error);
    } finally {
        await browser.close();
    }
}

scrap();
