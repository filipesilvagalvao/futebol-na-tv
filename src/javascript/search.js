export function searchChannel() {
    const URL = '/allContents.json'

    const btnSearch = document.querySelector('.btn-icon-content')
    const inputSearch = document.querySelector('.search-box input');

    async function search(c) {
        const result = document.querySelector('#results')
        const contentResults = document.querySelector('#content-results')
        let canais = []
        const results = []


        contentResults.innerHTML = '<button><i class="fa-solid fa-x"></i></button>'

        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)

        data.forEach((e) => {
            canais.push(...e.category.channels)
        });

        console.log(canais)



        canais.forEach((e) => {

            if (e.name.toLowerCase().includes(c.toLowerCase().trim())) {
                results.push(e)
            }
        })

        console.log(results)



        if (results == 0 || c == '') {
            const img = document.createElement('img')
            img.src = 'https://media.tenor.com/IHdlTRsmcS4AAAAM/404.gif'
            img.style.height = '100%'
            img.style.width = 'auto'

            contentResults.appendChild(img)
        } else {
            results.forEach((e) => {
                const a = document.createElement('a')
                a.href = e.url

                const div = document.createElement('div')
                const img = document.createElement('img')
                img.src = e.logo

                const p = document.createElement('p')
                p.innerText = e.name

                div.append(img, p)
                a.appendChild(div)

                contentResults.appendChild(a)
            })
        }

        result.style.display = 'flex'
    }

    btnSearch.addEventListener('click', () => { search(document.querySelector('.search-box input').value) })

    inputSearch.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            search(document.querySelector('.search-box input').value)
        }
    })
}