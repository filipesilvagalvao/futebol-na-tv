import fs from 'fs';
import path from 'path';

// Arrays de canais
const abertos = ['globo', 'SBT', 'Record', 'band', 'tv brasil','TV Cultura', 'RedeTV!'];
const esportes = ['bandsports', 'cazéTV', 'combate', 'espn', 'espn 2', 'espn 3', 'espn 4', 'premiere clubes', 'premiere 2', 'premiere 3', 'premiere 4', 'sportv 1', 'sportv 2', 'sportv 3'];
const entretenimento = ['axn', 'cartoon network', 'discovery channel','disney channel', 'megapix', 'warnertv','FX', 'A&E', 'Cinemax', 'Cinecanal', 'Adult Swim', 'H&H Discovery', 'Discovery Kids', 'Discovery Theather', 'Discovery Science', 'Discovery World', 'Discovery ID', 'Discovery Turbo', 'Gloob', 'Gloobinho', 'GNT', 'HBO', 'HBO 2', 'HBO Family', 'HBO Plus', 'HBO Signature', 'HBO Xtreme', 'HGTV', 'History 2', 'History','Star Channel', 'Multishow', 'National Geographic', 'Nick Jr', 'Nickelodeon', 'Space', 'Telecine Action', 'Telecine Cult', 'Telecine Fun', 'Telecine Pipoca', 'Telecine Premium', 'Telecine Touch', 'TNT', 'TNT Novelas', 'UFC Fight Pass', 'Universal TV', 'TNT Séries','VIva'];
const noticias = ['band news', 'record news','CNN Brasil', 'Globo News', 'Jovem Pan News'];

const categories = [abertos, esportes, entretenimento, noticias];

class Channel {
    constructor(name, url, logo) {
        this.name = name;
        this.url = url;
        this.logo = logo;
    }
}

class PostChannel {
    constructor(category) {
        this.category = category;
        this.channels = [];
    }

    generator(arrChannels) {
        arrChannels.forEach((c) => {
            this.channels.push(new Channel(c, `/canais/${c.toLowerCase().replace(/\s+/g, "-").normalize('NFD').replace(/[\u0300-\u036f]/g, '')}/`, `/src/images/thumb-channel/${c.toLowerCase().replace(/\s+/g, "-").normalize('NFD').replace(/[\u0300-\u036f]/g, '')}.webp`));
        });
    }
}

const allContents = [
    { category: new PostChannel('Abertos') },
    { category: new PostChannel('Esportes') },
    { category: new PostChannel('Entretenimento') },
    { category: new PostChannel('Notícias') }
];

allContents.forEach((e, i) => {
    e.category.generator(categories[i]);
});

// Função para gerar o JSON
const generateJSON = () => {
    const jsonContent = JSON.stringify(allContents, null, 2);
    const jsonPath = path.join('allContents.json');

    fs.writeFile(jsonPath, jsonContent, 'utf8', (err) => {
        if (err) {
            console.error('Erro ao escrever o arquivo JSON:', err);
        } else {
            console.log(`Arquivo ${jsonPath} atualizado com sucesso!`);
        }
    });
};

console.log(allContents)
// Função para gerar o HTML de uma categoria
const generateCategoryHTML = (category) => {
    const channelsHTML = category.channels.map((channel) => `
        <a href="${channel.url}">
            <div class="channel">
                <div class="thumb-channel"><img src="${channel.logo}" alt="logo ${channel.name}"></div>
                <h3>${channel.name}</h3>
            </div>
        </a>
    `).join('');

    return `
        <section class="category" id="${category.category.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}">
            <h2>${category.category.toUpperCase()}</h2>
            <div class="grid-articles">
                ${channelsHTML}
            </div>
        </section>
    `;
};

// Função para gerar o HTML completo da página
const generatePageHTML = (allContents) => {
    const categoriesHTML = allContents.map((content) => generateCategoryHTML(content.category)).join('');

    return `
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="description" content="Aqui você encontra uma variedade gigantesca de canais de tv online, para você se divertir a beça!">
            <meta property="og:title" content="Todos os canais de tv num só lugar!" />
            <meta property="og:description" content="Aqui você encontra uma variedade gigantesca de canais de tv online, para você se divertir a beça!" />
            <meta property="og:type" content="website" />
            <link rel="canonical" href="/todos-os-canais/">
            <link rel="stylesheet" href="/src/styles/style.css">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
                integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g=="
                crossorigin="anonymous" referrerpolicy="no-referrer"></script>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
                integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
                crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link rel="shortcut icon" href="/src/images/playtv-logo.png" type="image/png">
            <script type="module" src="/src/javascript/codes.js" defer></script>
            <title>Todos os canais</title>
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
                                <li><a href="/index.html">Home</a></li>
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
                ${categoriesHTML}
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
        </body>
        </html>
    `;
};

// Caminho para o arquivo HTML
const outputPath = path.join('todos-os-canais', 'index.html');

// Gerar o conteúdo HTML
const htmlContent = generatePageHTML(allContents);

// Criar o diretório se não existir
if (!fs.existsSync(path.dirname(outputPath))) {
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
}

// Escrever o arquivo HTML
fs.writeFile(outputPath, htmlContent, 'utf8', (err) => {
    if (err) {
        console.error('Erro ao escrever o arquivo HTML:', err);
    } else {
        console.log(`Arquivo ${outputPath} gerado com sucesso!`);
    }
});

generateJSON();