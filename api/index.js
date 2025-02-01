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
                        logo: 'https://www.futebolnatv.com.br' + teams[0]?.getAttribute('src') || 'https://www.futebolnatv.com.br' + teams[0]?.getAttribute('data-src') || 'Sem imagem'
                    },
                    team2: {
                        name: teams[1]?.alt || 'Desconhecido',
                        logo: 'https://www.futebolnatv.com.br' + teams[1]?.getAttribute('src') || 'https://www.futebolnatv.com.br' + teams[1]?.getAttribute('data-src') || 'Sem imagem'
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
        const dir = './jogos-de-hoje';
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }

        // Itera sobre cada jogo e cria uma página HTML
        jogos.forEach((jogo, index) => {

            if (jogo.championship !== 'Campeonato não encontrado') {
                // Cria uma versão amigável do nome da partida para o nome da pasta
                const nomeDaPartida = `${jogo.team1.name.replace(/\s+/g, '-').toLowerCase()}-vs-${jogo.team2.name.replace(/\s+/g, '-').toLowerCase()}`;

                // Caminho completo para a pasta da partida
                const partidaDir = path.join(dir, nomeDaPartida);

                // Cria a pasta para a partida, caso não exista
                if (!fs.existsSync(partidaDir)) {
                    fs.mkdirSync(partidaDir);
                }
                let liS = jogo.channels.map((e, i) => {
                    return `<li>${e}</li>`
                }).join('')
                const htmlContent = `
                <!DOCTYPE html>
                <html lang="pt-br">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="/src/styles/style.css">

                    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                    <script type="module" src="/src/javascript/codes.js" defer></script>
                    <title>${jogo.team1.name} vs ${jogo.team2.name}</title>
                </head>
                <body>
                    <header>
                        <nav id="navbar">
                            <ul id="nav-list">
                                <li><a href="/index.html">Home</a></li>
                                <li><a href="#">Abertos</a></li>
                                <li><a href="#">Esportes</a></li>
                                <li><a href="#">Entretenimento</a></li>
                                <li><a href="#">Notícias</a></li>
                            </ul>

                            <div id="menu-mobile">
                                <button><i class="fa-solid fa-bars"></i></button>
                                <div>
                                    <ul id="nav-list-mobile" class="hide">
                                        <li><a href="/index.html">Home</a></li>
                                        <li><a href="#">Abertos</a></li>
                                        <li><a href="#">Esportes</a></li>
                                        <li><a href="#">Entretenimento</a></li>
                                        <li><a href="#">Notícias</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div id="logo">
                                <i class="fa-solid fa-play"> playtv</i>
                            </div>

                            <div class="search">
                                <div class="search-box">
                                    <div class="search-field">
                                        <input placeholder="Buscar..." class="input" type="text">
                                        <div class="search-box-icon">
                                            <button class="btn-icon-content">
                                                <i class="search-icon">
                                                    <svg xmlns="://www.w3.org/2000/svg" version="1.1" viewBox="0 0 512 512">
                                                        <path
                                                            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                                                            fill="#fff"></path>
                                                    </svg>
                                                </i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </header>
                    <main>
                        <article class="game-match">
                            <h1>Assistir ${jogo.team1.name} x ${jogo.team2.name} ao vivo</h1>
                            
                            <div id="screen-video">
                                <iframe src="https://embedmax.site/tvl/sbt.php" allowfullscreen allow="encrypted-media" frameborder="0"></iframe>
                                <div id="btn-sinals">
                                    <button>SINAL 1</button>
                                    <button>SINAL 2</button>
                                    <button>SINAL 3</button>
                                    <button>SINAL 4</button>
                                    <button>SINAL 5</button>
                                    <button>SINAL 6</button>
                                    <button>SINAL 8</button>
                                    <button>SINAL 9</button>
                                    <button>SINAL 10</button>
                                    <button>SINAL 11</button>
                                    <button>SINAL 12</button>
                                    <button>SINAL 13</button>
                                    <button>SINAL 14</button>
                                    <button>SINAL 15</button>
                                    <button>SINAL 16</button>
                                    <button>SINAL 17</button>
                                    <button>SINAL 18</button>
                                    <button>SINAL 19</button>
                                    <button>SINAL 20</button>
                                </div>
                            </div>
                            
                            <section id="text-content">
                                <h2>Onde assistir ${jogo.team1.name} x ${jogo.team2.name} hoje?</h2>
                                <p>Fique atento aos canais e horários abaixo:</p>
                                <ul>
                                    <li><strong>Horário:</strong> <time datetime="${jogo.time}">${jogo.time}h</time></li>
                                    <li><strong>Canais de transmissão:</strong></li>
                                    <ul>
                                        ${liS}
                                    </ul>
                                </ul>
                            </section>
                        </article>
                    </main>
                    <footer></footer>
                </body>
                </html>
            `;

                // Caminho para salvar o arquivo index.html dentro da pasta da partida
                const filePath = path.join(partidaDir, 'index.html');

                // Cria o arquivo index.html
                fs.writeFileSync(filePath, htmlContent, 'utf8');
                console.log(`Página criada: ${filePath}`);
            }
        });

    } catch (error) {
        console.error('Erro ao gerar as páginas HTML:', error);
    }

}

// Chama a função para gerar as páginas HTML
generateHTML();

/*const nodeSchedule = require('node-schedule');

nodeSchedule.scheduleJob('30 00 * * *', async()=>{ await scrap()});
nodeSchedule.scheduleJob('30 00 * * *', ()=>{setTimeout(() => {generateHTML()}, 10000)});*/


