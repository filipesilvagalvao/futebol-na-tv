export function menu() {
    const buttonBars = document.querySelector('#menu-mobile > button')

    buttonBars.addEventListener('click', (e) => {
        const navMobile = e.target.parentNode.parentNode.children[1].firstElementChild
        navMobile.classList.toggle('hide')
        navMobile.classList.toggle('show')
        buttonBars.querySelector('i').classList.toggle('fa-bars')
        buttonBars.querySelector('i').classList.toggle('fa-x')
    })
}