const nav = document.getElementById('navbar')
const navTop = document.getElementById('nav-top')

window.addEventListener("scroll", function () {
    let scrollValue = window.scrollY
    if (scrollValue > 0) {
        nav.classList.add('sticky', 'top-0', 'backdrop-blur-sm', 'drop-shadow-xl', 'bg-gray/70')
        navTop.classList.remove('bg-[#F9F7F3]')
    }
    else {
        nav.classList.remove('sticky', 'top-0', 'backdrop-blur-sm', 'drop-shadow-xl', 'bg-gray/70')
        navTop.classList.add('bg-[#F9F7F3]')
    }
})

handleDonation('donate1-btn', 'donate1-total', 'donate1-input')
handleDonation('donate2-btn', 'donate2-total', 'donate2-input')
handleDonation('donate3-btn', 'donate3-total', 'donate3-input')
