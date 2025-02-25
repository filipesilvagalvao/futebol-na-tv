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
                    h.innerHTML = '<img src="https://static.wixstatic.com/media/f99c1f_700bfa67216746188b9c822dbf44357c~mv2.gif" style="margin-top:25px;">'
                } else if (nowHour > (matchHour + 2)) {
                    h.innerText = 'ENCERRADO'
                }
            })
        }
    }, 500);
}