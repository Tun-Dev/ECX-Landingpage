const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('mainnav')[0]
const toggleButton2 = document.getElementsByClassName('toggle-button2')[0]
const navbarLinks2 = document.getElementsByClassName('mainnav2')[0]


toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

toggleButton2.addEventListener('click', () => {
    navbarLinks2.classList.toggle('active')
})