export function menu() {
    const buttonBars = document.querySelector('#menu-mobile > button')

    buttonBars.addEventListener('click', (e) => {
        e.stopPropagation()
        const navMobile = document.querySelector('#nav-list-mobile')
        navMobile.classList.toggle('hide')
        navMobile.classList.toggle('show')
        buttonBars.querySelector('i').classList.toggle('fa-x')
    })
}