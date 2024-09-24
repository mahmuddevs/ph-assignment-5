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

document.getElementById('blog').addEventListener('click', function () {
    window.location.href = 'blog.html';
})

handleDonation('donate1-btn', 'donate1-total', 'donate1-input')
handleDonation('donate2-btn', 'donate2-total', 'donate2-input')
handleDonation('donate3-btn', 'donate3-total', 'donate3-input')

document.getElementById('donation-page').addEventListener('click', function (e) {
    e.target.classList.add('bg-primary', 'hover:bg-primary/90')
    document.getElementById('history-page').classList.remove('bg-primary', 'hover:bg-primary/90')
    document.getElementById('history-page').classList.add('hover:bg-gray-300')
    showPagesByID('donation')
})
document.getElementById('history-page').addEventListener('click', function (e) {
    e.target.classList.add('bg-primary', 'hover:bg-primary/90')
    document.getElementById('donation-page').classList.remove('bg-primary', 'hover:bg-primary/90')
    document.getElementById('donation-page').classList.add('hover:bg-gray-300')
    showPagesByID('history')
})
