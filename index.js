const path = require('path');
const puppeteer = require('puppeteer');
const fs = require('fs');  // Importa o módulo fs para escrever o arquivo JSON

let listCanais = [];

const channels = [
    { channel: 'GE.GLOBO MG', links: ['https://embedmax.site/tvl/globoMG.php', 'https://reidoscanais.tv/embed/?id=globomg-globominas'] },
    { channel: 'GE.GLOBO SP', links: ['https://embedmax.site/tvl/globoSP.php', 'https://reidoscanais.tv/embed/?id=globosp-globosaopaulo', '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=bobosp'] },
    { channel: 'GE.GLOBO RJ', links: ['https://embedmax.site/tvl/globoRJ.php', 'https://reidoscanais.tv/embed/?id=globorj-globorio', '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=boborj'] },
    { channel: 'GLOBO', links: ['https://embedmax.site/tvl/globoMG.php', 'https://reidoscanais.tv/embed/?id=globomg-globominas', 'https://embedmax.site/tvl/globoSP.php', 'https://reidoscanais.tv/embed/?id=globosp-globosaopaulo', '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=bobosp', 'https://embedmax.site/tvl/globoRJ.php', 'https://reidoscanais.tv/embed/?id=globorj-globorio', '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=boborj'] },
    { channel: 'GLOBO MG', links: ['https://embedmax.site/tvl/globoMG.php', 'https://reidoscanais.tv/embed/?id=globomg-globominas'] },
    { channel: 'GLOBO SP', links: ['https://embedmax.site/tvl/globoSP.php', 'https://reidoscanais.tv/embed/?id=globosp-globosaopaulo', '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=bobosp'] },
    { channel: 'GLOBO RJ', links: ['https://embedmax.site/tvl/globoRJ.php', 'https://reidoscanais.tv/embed/?id=globorj-globorio', '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=boborj'] },
    { channel: 'DISNEY+ PREMIUM', links: ['https://embedcanaistv.com/disneyplus/', 'https://embedmax.site/tvl/disneyplus.php'] },
    { channel: 'DISNEY+', links: ['https://embedcanaistv.com/disneyplus/', 'https://embedmax.site/tvl/disneyplus.php'] },
    { channel: 'ESPN', links: ['https://embedmax.site/tvl/espn1.php', 'https://reidoscanais.tv/embed/?id=espn', 'https://playertv.net/e/?v=espn'] },
    { channel: 'ESPN 2', links: ['https://embedmax.site/tvl/espn2.php', 'https://reidoscanais.tv/embed/?id=espn2', 'https://playertv.net/e/?v=espn2'] },
    { channel: 'ESPN 3', links: ['https://embedmax.site/tvl/espn3.php', 'https://reidoscanais.tv/embed/?id=espn3', 'https://playertv.net/e/?v=espn3'] },
    { channel: 'ESPN 4', links: ['https://embedmax.site/tvl/espn4.php', 'https://reidoscanais.tv/embed/?id=espn4', 'https://playertv.net/e/?v=espn4'] },
    { channel: 'BANDSPORTS', links: ['https://embedmax.site/tvl/bandsports.php', 'https://reidoscanais.tv/embed/?id=bandsports', 'https://playertv.net/e/?v=bandSports'] },
    { channel: 'PREMIERE', links: ['https://embedmax.site/tvl/premiere1.php', 'https://reidoscanais.tv/embed/?id=premiere', 'https://playertv.net/e/?v=premiere'] },
    { channel: 'PREMIERE FC', links: ['https://embedmax.site/tvl/premiere1.php', 'https://reidoscanais.tv/embed/?id=premiere', 'https://playertv.net/e/?v=premiere'] },
    { channel: 'PREMIERE 2', links: ['https://embedmax.site/tvl/premiere2.php', 'https://reidoscanais.tv/embed/?id=premiere2', 'https://playertv.net/e/?v=premiere2'] },
    { channel: 'PREMIERE 3', links: ['https://embedmax.site/tvl/premiere3.php', 'https://reidoscanais.tv/embed/?id=premiere3', 'https://playertv.net/e/?v=premiere3'] },
    { channel: 'PREMIERE 4', links: ['https://embedmax.site/tvl/premiere4.php', 'https://reidoscanais.tv/embed/?id=premiere4', 'https://playertv.net/e/?v=premiere4'] },
    { channel: 'CAZÉ TV', links: ['https://reidoscanais.tv/embed/?id=cazetv', 'https://reidoscanais.tv/embed/?id=cazetv2', 'https://reidoscanais.tv/embed/?id=cazetv3'] },
    { channel: 'SPORTV', links: ['https://embedmax.site/tvl/sportv1.php', 'https://reidoscanais.tv/embed/?id=sportv', 'https://playertv.net/e/?v=sportv'] },
    { channel: 'SPORTV 2', links: ['https://embedmax.site/tvl/sportv2.php', 'https://reidoscanais.tv/embed/?id=sportv2', 'https://playertv.net/e/?v=sportv2'] },
    { channel: 'SPORTV 3', links: ['https://embedmax.site/tvl/sportv3.php', 'https://reidoscanais.tv/embed/?id=sportv3', 'https://playertv.net/e/?v=sportv3'] },
    { channel: 'CANAL GOAT', links: ['https://embedmax.site/tvl/canalgoat1.php', 'https://embedmax.site/tvl/canalgoat2.php', 'https://embedmax.site/tvl/canalgoat2.php'] },
    { channel: 'RECORD', links: ['https://embedmax.site/tvl/recordSP.php', 'https://reidoscanais.tv/embed/?id=recordsp', 'https://playertv.net/e/?v=recordSP'] }
]



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


        let jogosFilter = []

        jogos.forEach((e) => {
            if (e.championship !== 'Campeonato não encontrado' && e.channels[0] !== 'Nenhum canal disponível') {
                jogosFilter.push(e)
            }
        })
        console.log(jogosFilter)

        jogosFilter.forEach(function (partida) {
            let linksDaPartida = [];
        
            partida.channels.forEach(canal => {
                const canalEncontrado = channels.find(c => c.channel === canal);
        
                if (canalEncontrado) {
                    linksDaPartida.push(...canalEncontrado.links);
                }
            });
        
            if (linksDaPartida.length > 0) {
                listCanais.push(linksDaPartida);
            }
        });
        // Itera sobre cada jogo e cria uma página HTML
        jogosFilter.forEach((jogo, index) => {
            if (typeof listCanais[index] != 'undefined') {
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
                                <iframe src="" allowfullscreen allow="encrypted-media" frameborder="0"></iframe>
                                <div id="btn-sinals">
                                    
                                </div>
                            </div>
                            <script defer>
                // SetInterval para aguardar a variável ficar pronta
                const intervalId = setInterval(() => {
                    // Se listCanais não estiver definida ou não estiver no formato esperado
                    if (typeof listCanais === 'undefined' || !Array.isArray(listCanais[0])) {
                        console.log("espere...");
                    } else {
                        const iframe = document.querySelector('iframe')
                        iframe.src = listCanais[${index}][0]
                        // Quando listCanais for definida e no formato esperado, parar o intervalo
                        clearInterval(intervalId);
                        console.log("listCanais agora está definida.", listCanais);

                        // Iterar sobre os canais
                        listCanais[${index}].forEach((e, i) => {
                            const btnSinals = document.querySelector('#btn-sinals');
                            const button = document.createElement('button');
                            button.innerText = 'Sinal ' + (i + 1);
                            btnSinals.appendChild(button);
                        });

                        const btns = document.querySelectorAll('#btn-sinals > button ')
                        btns.forEach((e,i)=>{
                            e.addEventListener('click', ()=>{
                                iframe.src = listCanais[${index}][i]
                            })
                        })
                    }
                }, 500);
            </script>
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

