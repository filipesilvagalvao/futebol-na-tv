export function inlive() {
    const data = new Date()

    console.log(Number(data.getHours() + '.' + data.getMinutes()))

    const waiting = setInterval(() => {
        let hours = Array.from(document.querySelectorAll('.hourMatch'))
        if (hours == []) {
            console.log('carregando...');
        } else {
            clearInterval(waiting);

            hours.forEach((h) => {
                const nowHour = Number(data.getHours() + '.' + data.getMinutes())
                const matchHour = Number(h.innerText.slice(0, -1).replace(":", "."))
                if (nowHour >= matchHour && nowHour < (matchHour + 2)) {
                    h.innerText = 'AO VIVO'
                } else if (nowHour > (matchHour + 2)) {
                    h.innerText = 'ENCERRADO'
                }
            })
        }
    }, 500);
}