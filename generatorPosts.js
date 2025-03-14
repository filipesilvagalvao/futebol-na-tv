import fetch from 'node-fetch';
import dotenv from 'dotenv';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

// Obter o diretório atual quando usando módulos ES
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const channelsToGenerate = ['CNN Brasil', 'Globo News', 'FX', 'A&E', 'Cinemax', 'Cinecanal', 'Adult Swim', 'H&H Discovery', 'Discovery Kids', 'Discovery Theather', 'Discovery Science', 'Discovery World', 'Discovery ID', 'Discovery Turbo', 'Gloob', 'Gloobinho', 'GNT', 'HBO', 'HBO 2', 'HBO Family', 'HBO Plus', 'HBO Signature', 'HBO Xtreme', 'HGTV', 'History 2', 'History', 'Jovem Pan News', 'Star Channel', 'Multishow', 'National Geographic', 'Nick Jr', 'Nickelodeon', 'Space', 'Telecine Action', 'Telecine Cult', 'Telecine Fun', 'Telecine Pipoca', 'Telecine Premium', 'Telecine Touch', 'TNT', 'TNT Novelas', 'UFC Fight Pass', 'Universal TV', 'TNT Séries','VIva', 'TV Cultura', 'RedeTV'];
const listOfTexts = [];

// Função para gerar as páginas HTML
async function generatePages() {
    for (const channel of channelsToGenerate) {
        const prompt = `Faça um texto de 1 parágrafo sobre o canal de TV ${channel}, com a palavra-chave: assistir ${channel} ao vivo`;

        // Obtendo a resposta da API
        const text = await getChatResponse(prompt);
        listOfTexts.push(text);

        // Criando o diretório para o canal
        const channelDir = path.join(__dirname, 'canais', channel.toLowerCase().replace(/\s+/g, "-").normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
        await fs.mkdir(channelDir, { recursive: true });

        // Conteúdo do arquivo HTML
        const htmlContent = `
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Assista o canal de tv ${channel} ao vivo e de forma totalmente gratuita!">
    <link rel="canonical" href="/canais/${channel.toLowerCase().replace(/\s+/g, "-").normalize('NFD').replace(/[\u0300-\u036f]/g, '')}">
    <meta property="og:title" content="${channel} ao vivo" />
    <meta property="og:description" content="Assista o canal de tv ${channel} ao vivo e de forma totalmente gratuita!" />
    <meta property="og:type" content="article" />
    <link rel="stylesheet" href="/src/styles/style.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="shortcut icon" href="/src/images/playtv-logo.png" type="image/png">
    <script type="module" src="/src/javascript/codes.js" defer></script>
    <title>${channel} ao vivo</title>
</head>
<body>
    <header>
        <nav id="navbar">
            <ul id="nav-list">
                <li><a href="/">Home</a></li>
                <li><a href="/todos-os-canais#abertos">Abertos</a></li>
                <li><a href="/todos-os-canais#esportes">Esportes</a></li>
                <li><a href="/todos-os-canais#entretenimento">Entretenimento</a></li>
                <li><a href="/todos-os-canais#noticias">Notícias</a></li>
            </ul>

            <div id="menu-mobile">
                <button><i class="fa-solid fa-bars"></i></button>
                <div>
                    <ul id="nav-list-mobile" class="hide">
                        <li><a href="/">Home</a></li>
                        <li><a href="/todos-os-canais#abertos">Abertos</a></li>
                        <li><a href="/todos-os-canais#esportes">Esportes</a></li>
                        <li><a href="/todos-os-canais#entretenimento">Entretenimento</a></li>
                        <li><a href="/todos-os-canais#noticias">Notícias</a></li>
                    </ul>
                </div>
            </div>

            <a href="/">
                <div id="logo">
                    <i class="fa-solid fa-play"></i>
                </div>
            </a>

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
        <article class="channel-post">
            <h1 data-channel="${channel}" id="title-channel">Assistir ${channel} ao vivo grátis</h1>
            <div id="screen-video">
                <div id="loading"><span>CARREGANDO PLAYER...</span></div>
                <iframe src="" allowfullscreen allow="encrypted-media" frameborder="0"></iframe>
                <div id="btn-sinals"></div>
            </div>
            <div id="text-post">
                <img src="/src/images/thumb-channel/${channel.toLowerCase().replace(/\s+/g, "-").normalize('NFD').replace(/[\u0300-\u036f]/g, '')}.webp" alt="logo ${channel.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}" class="logo-channel">
                <p>${text}</p>
            </div>
        </article>
    </main>
    <footer>
        <div>
            <p>&copy; Todos os direitos reservados - 2025 - PlayTV Online</p>
        </div>
    </footer>
    <div id="results" style="display: none;">
                <div id="content-results">
                    <button><i class="fa-solid fa-x"></i></button>
                </div>
            </div>
    <script>
        const btnSinals = document.querySelector('#btn-sinals');
        const iframe = document.querySelector('iframe');
        const loading = document.querySelector('#loading');

        const nameOfChannel = document.querySelector('#title-channel').dataset.channel.toUpperCase();

        console.log(nameOfChannel);
        const wait = setInterval(() => {
            if (typeof channels === 'undefined') {
                console.log('carregando...');
            } else {
                clearInterval(wait);
                channels.forEach((canal, index) => {
                    if (canal.channel.toUpperCase() === nameOfChannel) {
                        canal.links.forEach((e, i) => {
                            const button = document.createElement('button');
                            button.innerText = 'Sinal ' + (i + 1);
                            button.value = e;
                            btnSinals.appendChild(button);
                            button.addEventListener('click', () => {
                                iframe.src = button.value;
                            });
                        });
                    } else {
                        iframe.allow = 'autoplay';
                        iframe.src = '/videos/aviso.html';
                    }
                    loading.style.display = 'none';
                });
                iframe.src = btnSinals.querySelectorAll('button')[0].value;
            }
        }, 1000);
    </script>
</body>
</html>
        `;

        // Salvando o arquivo HTML
        const filePath = path.join(channelDir, 'index.html');
        await fs.writeFile(filePath, htmlContent, 'utf8');
        console.log(`Página do canal ${channel} criada em ${filePath}`);
    }
}

// Função para obter a resposta da API OpenAI
async function getChatResponse(prompt) {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
            model: "gpt-4",
            messages: [{ role: "user", content: prompt }],
            max_tokens: 200,
        }),
    });

    const data = await response.json();
    return data.choices[0].message.content;
}

// Rodando a função principal
generatePages().catch(error => console.error('Erro ao gerar páginas:', error));