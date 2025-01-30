const path = require('path');
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

// Função para ler o arquivo JSON e gerar as páginas HTML
async function generateHTML() {
    try {
        // Lê o arquivo JSON
        const data = fs.readFileSync('jogos.json', 'utf8');
        const jogos = JSON.parse(data); // Converte para objeto

        // Cria um diretório para armazenar os arquivos HTML, caso não exista
        const dir = path.join(__dirname, 'posts');
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }

        // Itera sobre cada jogo e cria uma página HTML
        jogos.forEach((jogo, index) => {
            const htmlContent = `
                <!DOCTYPE html>
                <html lang="pt-br">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>${jogo.team1.name} vs ${jogo.team2.name}</title>
                    <style>
                        body { font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; }
                        .game { margin-bottom: 30px; padding: 15px; background: #fff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); }
                        .teams { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
                        .team { display: flex; align-items: center; }
                        .team img { width: 30px; height: 30px; margin-right: 10px; }
                        .time { font-size: 1.2em; font-weight: bold; margin: 10px 0; }
                        .channels { font-size: 0.9em; color: #555; }
                    </style>
                </head>
                <body>
                    <div class="game">
                        <div class="teams">
                            <div class="team">
                                <img src="${jogo.team1.logo}" alt="${jogo.team1.name}" />
                                <span>${jogo.team1.name}</span>
                            </div>
                            <div class="team">
                                <img src="${jogo.team2.logo}" alt="${jogo.team2.name}" />
                                <span>${jogo.team2.name}</span>
                            </div>
                        </div>
                        <div class="time">Horário: ${jogo.time}</div>
                        <div class="championship">Campeonato: ${jogo.championship}</div>
                        <div class="channels">Canais: ${jogo.channels.join(', ')}</div>
                    </div>
                </body>
                </html>
            `;

            // Cria o arquivo HTML para cada jogo
            const fileName = `${jogo.team1.name}-${jogo.team2.name}-${index + 1}.html`;
            const filePath = path.join(dir, fileName);

            fs.writeFileSync(filePath, htmlContent, 'utf8');
            console.log(`Página criada: ${filePath}`);
        });

    } catch (error) {
        console.error('Erro ao gerar as páginas HTML:', error);
    }
}

// Chama a função para gerar as páginas HTML
//generateHTML();
