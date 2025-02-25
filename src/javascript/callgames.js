export function madeGames() {
      //canais disponíveis
      const channels = [{
            channel: 'GE.GLOBO MG',
            links: [
                  'https://embedmax.site/tvl/globoMG.php',
                  'https://reidoscanais.tv/embed/?id=globomg-globominas'
            ]
      },
      {
            channel: 'GE.GLOBO SP',
            links: [
                  'https://embedmax.site/tvl/globoSP.php',
                  'https://reidoscanais.tv/embed/?id=globosp-globosaopaulo',
                  '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=bobosp'
            ]
      },
      {
            channel: 'SBT',
            links: [
                  'https://embedmax.site/tvl/sbt.php'
            ]
      },
      {
            channel: 'GE.GLOBO RJ',
            links: [
                  'https://embedmax.site/tvl/globoRJ.php',
                  'https://reidoscanais.tv/embed/?id=globorj-globorio',
                  '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=boborj'
            ]
      },
      {
            channel: 'GLOBO',
            links: [
                  'https://embedmax.site/tvl/globoMG.php',
                  'https://reidoscanais.tv/embed/?id=globomg-globominas',
                  'https://embedmax.site/tvl/globoSP.php',
                  'https://reidoscanais.tv/embed/?id=globosp-globosaopaulo',
                  '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=bobosp',
                  'https://embedmax.site/tvl/globoRJ.php',
                  'https://reidoscanais.tv/embed/?id=globorj-globorio',
                  '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=boborj'
            ]
      },
      {
            channel: 'GLOBO MG',
            links: [
                  'https://embedmax.site/tvl/globoMG.php',
                  'https://reidoscanais.tv/embed/?id=globomg-globominas'
            ]
      },
      {
            channel: 'GLOBO SP',
            links: [
                  'https://embedmax.site/tvl/globoSP.php',
                  'https://reidoscanais.tv/embed/?id=globosp-globosaopaulo',
                  '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=bobosp'
            ]
      },
      {
            channel: 'GLOBO RJ',
            links: [
                  'https://embedmax.site/tvl/globoRJ.php',
                  'https://reidoscanais.tv/embed/?id=globorj-globorio',
                  '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=boborj'
            ]
      },
      {
            channel: 'DISNEY+ PREMIUM',
            links: [
                  'https://embedcanaistv.com/disneyplus/',
                  'https://embedmax.site/tvl/disneyplus.php'
            ]
      },
      {
            channel: 'DISNEY+',
            links: [
                  'https://embedcanaistv.com/disneyplus/',
                  'https://embedmax.site/tvl/disneyplus.php'
            ]
      },
      {
            channel: 'ESPN',
            links: [
                  'https://embedmax.site/tvl/espn1.php',
                  'https://reidoscanais.tv/embed/?id=espn',
                  'https://playertv.net/e/?v=espn'
            ]
      },
      {
            channel: 'ESPN 2',
            links: [
                  'https://embedmax.site/tvl/espn2.php',
                  'https://reidoscanais.tv/embed/?id=espn2',
                  'https://playertv.net/e/?v=espn2'
            ]
      },
      {
            channel: 'ESPN 3',
            links: [
                  'https://embedmax.site/tvl/espn3.php',
                  'https://reidoscanais.tv/embed/?id=espn3',
                  'https://playertv.net/e/?v=espn3'
            ]
      },
      {
            channel: 'ESPN 4',
            links: [
                  'https://embedmax.site/tvl/espn4.php',
                  'https://reidoscanais.tv/embed/?id=espn4',
                  'https://playertv.net/e/?v=espn4'
            ]
      },
      {
            channel: 'BANDSPORTS',
            links: [
                  'https://embedmax.site/tvl/bandsports.php',
                  'https://reidoscanais.tv/embed/?id=bandsports',
                  'https://playertv.net/e/?v=bandSports'
            ]
      },
      {
            channel: 'PREMIERE',
            links: [
                  'https://embedmax.site/tvl/premiere1.php',
                  'https://reidoscanais.tv/embed/?id=premiere',
                  'https://playertv.net/e/?v=premiere'
            ]
      },
      {
            channel: 'PREMIERE FC',
            links: [
                  'https://embedmax.site/tvl/premiere1.php',
                  'https://reidoscanais.tv/embed/?id=premiere',
                  'https://playertv.net/e/?v=premiere'
            ]
      },
      {
            channel: 'PREMIERE 2',
            links: [
                  'https://embedmax.site/tvl/premiere2.php',
                  'https://reidoscanais.tv/embed/?id=premiere2',
                  'https://playertv.net/e/?v=premiere2'
            ]
      },
      {
            channel: 'PREMIERE 3',
            links: [
                  'https://embedmax.site/tvl/premiere3.php',
                  'https://reidoscanais.tv/embed/?id=premiere3',
                  'https://playertv.net/e/?v=premiere3'
            ]
      },
      {
            channel: 'PREMIERE 4',
            links: [
                  'https://embedmax.site/tvl/premiere4.php',
                  'https://reidoscanais.tv/embed/?id=premiere4',
                  'https://playertv.net/e/?v=premiere4'
            ]
      },
      {
            channel: 'CAZÉ TV',
            links: [
                  'https://reidoscanais.tv/embed/?id=cazetv',
                  'https://reidoscanais.tv/embed/?id=cazetv2',
                  'https://reidoscanais.tv/embed/?id=cazetv3'
            ]
      },
      {
            channel: 'SPORTV',
            links: [
                  'https://embedmax.site/tvl/sportv1.php',
                  'https://reidoscanais.tv/embed/?id=sportv',
                  'https://playertv.net/e/?v=sportv'
            ]
      },
      {
            channel: 'SPORTV 2',
            links: [
                  'https://embedmax.site/tvl/sportv2.php',
                  'https://reidoscanais.tv/embed/?id=sportv2',
                  'https://playertv.net/e/?v=sportv2'
            ]
      },
      {
            channel: 'SPORTV 3',
            links: [
                  'https://embedmax.site/tvl/sportv3.php',
                  'https://reidoscanais.tv/embed/?id=sportv3',
                  'https://playertv.net/e/?v=sportv3'
            ]
      },
      {
            channel: 'CANAL GOAT',
            links: [
                  'https://embedmax.site/tvl/canalgoat1.php',
                  'https://embedmax.site/tvl/canalgoat2.php',
                  'https://embedmax.site/tvl/canalgoat2.php'
            ]
      },
      {
            channel: 'RECORD',
            links: [
                  'https://embedmax.site/tvl/recordSP.php',
                  'https://reidoscanais.tv/embed/?id=recordsp',
                  'https://playertv.net/e/?v=recordSP'
            ]
      }
      ]

      // Cria um novo objeto Date com a data atual
      const dataAtual = new Date();

      // Obtém o dia, mês e ano
      const dia = String(dataAtual.getDate()).padStart(2, '0'); // Adiciona um zero à esquerda se necessário
      const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Os meses começam do 0, então adicionamos 1
      const ano = dataAtual.getFullYear();

      // Formata a data no formato desejado
      const dataFormatada = `${dia}-${mes}-${ano}`;

      //json com dados puxados do futebolnatv.com
      const URL = '/jogos.json'

      async function callGames() {
            const resp = await fetch(URL)
            let obj = ''
            if (resp.status === 200) {
                  obj = await resp.json()
                  //console.log(obj)
            }

            let playFilter = []

            obj.forEach((e, i) => {
                  let linkPlayers = [];
                  let nameTeam = [e.team1, e.team2]; // Define o nome do time fora do if
                  let hour = ''
                  let campeonato = ''
                  e.channels.forEach((canal) => {

                        // Verifica se o canal existe na lista de channels
                        const foundChannel = channels.find(c => c.channel === canal);
                        if (foundChannel) {
                              linkPlayers.push(...foundChannel.links); // Adiciona os links ao linkPlayers
                              hour = e.time
                              campeonato = e.championship
                        }

                  });
                  // Se houver links, adiciona ao playFilter e ao nameTeam
                  if (linkPlayers.length > 0) {
                        playFilter.push({
                              links: linkPlayers,
                              teams: nameTeam, // Armazena os nomes dos times em um objeto
                              time: hour,
                              championship: campeonato
                        });
                  }
            });

            //console.log(playFilter)

            const gridPlaySoccer = document.querySelector('#grid-play-soccer')
            if (gridPlaySoccer != null) {
                  playFilter.forEach((element) => {

                        const a = document.createElement('a')
                        a.href = `/jogos-de-hoje/${element.teams[0].name.replace(/\s+/g, '-').toLowerCase()}-vs-${element.teams[1].name.replace(/\s+/g, '-').toLowerCase()}-${dataFormatada}/`
                        const h3 = document.createElement('h3')
                        h3.innerText = `${element.teams[0].name} -VS- ${element.teams[1].name}`

                        const divMatch = document.createElement('div')
                        divMatch.className = 'match'
                        const spanHourMatch = document.createElement('span')
                        spanHourMatch.className = 'hourMatch'
                        spanHourMatch.innerText = element.time + 'h'

                        const div = document.createElement('div')

                        const imgTeam1 = document.createElement('img')
                        imgTeam1.src = element.teams[0].logo

                        const iX = document.createElement('i')
                        iX.classList.add('fa-solid', 'fa-x')

                        const imgTeam2 = document.createElement('img')
                        imgTeam2.src = element.teams[1].logo

                        const spanChampeonship = document.createElement('span')
                        spanChampeonship.className = 'champeonship'
                        spanChampeonship.innerText = element.championship

                        div.append(imgTeam1, iX, imgTeam2)
                        divMatch.append(spanHourMatch, div, h3, spanChampeonship)
                        a.appendChild(divMatch)

                        gridPlaySoccer.appendChild(a)
                  });
            }
            window.playFilter = playFilter
            window.channels = channels
            //console.log(channels)
      }
      callGames()
}