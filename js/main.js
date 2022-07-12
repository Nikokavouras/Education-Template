// HEADER
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
});



// FAQ
const faq = document.querySelectorAll('.faq');
faq.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // chnage the icon
        const icon = faq.querySelector('.faq-icon i');
        if (icon.className === 'uil uil-plus') {
            icon.className = 'uil uil-minus';
        } else {
            icon.className = 'uil uil-plus';
        }
    })
})



// SLIDER (SWIPER JS)
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // when window width is >= 600px
    breakpoints: {
        1000: {
            slidesPerView: 3
        },
        700: {
            slidesPerView: 2
        },
        0: {
            slidesPerView: 1
        }
    }
});

