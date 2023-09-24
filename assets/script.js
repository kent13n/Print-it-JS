let activeSlide = 0;
const tagLineEl = document.querySelector('#banner > p');
const slideEl = document.querySelector('.banner-img');
const bulletsEl = document.querySelector('.dots');
const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
]

function updateSlider() {
    bulletsEl.innerHTML = '';

    slideEl.src = `./assets/images/slideshow/${slides[activeSlide].image}`;
    tagLineEl.innerHTML = slides[activeSlide].tagLine;

    slides.forEach((item, key) => {
        let className = (key === activeSlide) ? 'dot dot_selected' : 'dot';
        bulletsEl.innerHTML += `<span class="${className}"></span>`
    });
}

document.querySelector('.arrow_left').addEventListener('click', function (evt) {
    evt.preventDefault();
    activeSlide = activeSlide - 1 >= 0 ? activeSlide - 1 : slides.length - 1;
    updateSlider();
});

document.querySelector('.arrow_right').addEventListener('click', function (evt) {
    evt.preventDefault();
    activeSlide = activeSlide + 1 <= slides.length - 1 ? activeSlide + 1 : 0;
    updateSlider();
});

updateSlider();