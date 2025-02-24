export function closeModal() {
    const results = document.querySelector('#results')
    const buttonX = document.querySelector('#content-results')

    function close() {
        results.style.display = 'none'
    }

    buttonX.addEventListener('click', (e) => {
        e.stopPropagation()
        close()
    })

    results.addEventListener('click', (e) => {
        e.stopPropagation()
        close()
    })
}