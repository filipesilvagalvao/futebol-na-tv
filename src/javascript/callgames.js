export function madeGames() {
    const URL = '/jogos.json'

    async function callGames() {
        const resp = await fetch(URL)
        let obj = ''
        if (resp.status === 200) {
            obj = await resp.json()
            console.log(obj)
        }
        const gridPlaySoccer = document.querySelector('#grid-play-soccer')

        obj.forEach((element) => {
            if (element.championship !== 'Campeonato não encontrado' && gridPlaySoccer != null) {
                

                const a = document.createElement('a')
                a.href = `/jogos-de-hoje/${element.team1.name.replace(/\s+/g, '-').toLowerCase()}-vs-${element.team2.name.replace(/\s+/g, '-').toLowerCase()}/`
                const h3 = document.createElement('h3')
                h3.innerText = `${element.team1.name} - ${element.team2.name}`

                const divMatch = document.createElement('div')
                divMatch.className = 'match'
                const spanHourMatch = document.createElement('span')
                spanHourMatch.className = 'hourMatch'
                spanHourMatch.innerText = element.time + 'h'

                const div = document.createElement('div')

                const imgTeam1 = document.createElement('img')
                imgTeam1.src = element.team1.logo

                const iX = document.createElement('i')
                iX.classList.add('fa-solid', 'fa-x')

                const imgTeam2 = document.createElement('img')
                imgTeam2.src = element.team2.logo

                const spanChampeonship = document.createElement('span')
                spanChampeonship.className = 'champeonship'
                spanChampeonship.innerText = element.championship

                div.append(imgTeam1, iX, imgTeam2)
                divMatch.append(spanHourMatch, div, h3, spanChampeonship)
                a.appendChild(divMatch)

                gridPlaySoccer.appendChild(a)
            }
        });

    }

    callGames()
}