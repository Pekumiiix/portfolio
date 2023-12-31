function reachOut() {
    const reachOutButtons = document.querySelectorAll('.email-button')

    reachOutButtons.forEach((reachOutButton) => {
        reachOutButton.addEventListener('click', () => {
            var emailReceiver = 'pelumiamao69@gmail.com'

            var mailToUrl = 'mailto:' + emailReceiver
    
            window.location.href = mailToUrl
        })
    })
}

reachOut()

function toogleMenu() {
    const menuButton = document.querySelector('.menu-btn')
    const menu = document.querySelector('.menu')

    menuButton.addEventListener('click', () => {
        menu.classList.toggle('show')
    })
}

toogleMenu()

function toggleMode() {
    const lightMdButton = document.querySelector('.light-md')
    const darkMdButton = document.querySelector('.dark-md')
    const page = document.querySelector('.document')

    lightMdButton.addEventListener('click', () => {
        page.classList.remove('dark')

        lightMdButton.style.display = 'none'
        darkMdButton.style.display = 'flex'
    })

    darkMdButton.addEventListener('click', () => {
        page.classList.add('dark')

        lightMdButton.style.display = 'flex'
        darkMdButton.style.display = ' none'
    })
}

toggleMode()