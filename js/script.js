// Initialize Swipers for various containers
var swipers = [
    new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'slide',
        breakpoints: {
            220: {
                slidesPerView: 1.1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            1028: {
                slidesPerView: 3,
                spaceBetween: 16,
            }
        }
    }),
];
// Navbar scroll behavior
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 10) {
        navbar.classList.add('scroll');
    } else {
        navbar.classList.remove('scroll');
    }
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const registerBtn = document.querySelector('#btn');

hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    registerBtn.classList.toggle('show');
    hamburger.classList.toggle('active'); 
});

// FAQ toggle functionality
document.querySelectorAll('.faq').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');

        // Tutup FAQ lainnya
        document.querySelectorAll('.faq').forEach(faq => {
            if (faq !== item) {
                faq.classList.remove('active');
            }
        });
    });
});