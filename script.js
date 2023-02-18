const hamburger = document.querySelector('.hamburger')
const closeSideBarBtn = document.querySelector('.close-side-bar')
const nav = document.querySelector('.nav')





hamburger.addEventListener('click', () => {
    nav.classList.add('nav-show')
})
closeSideBarBtn.addEventListener('click', () => {
    nav.classList.remove('nav-show')
})

