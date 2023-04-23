const $carouselSlide = document.querySelector('.carousel-slide');
const $carouselImages = document.querySelectorAll('.carousel-slide img');

const $prevBtn = document.querySelector('#prevBtn');
const $nextBtn = document.querySelector("#nextBtn");

let counter = 1;
const size = $carouselImages[0].clientWidth;

$carouselSlide.style.transition = 'transform 0.4s ease-in-out';

moveCarousel();

$nextBtn.addEventListener('click', () => handleChangeSlide('next'));
$prevBtn.addEventListener("click", () => handleChangeSlide('prev'));
$carouselSlide.addEventListener('transitionend', () => {

    $carouselSlide.style.transition = "none";

    if ($carouselImages[counter].id === "lastClone") {
        counter = $carouselImages.length - 2;
        moveCarousel();
    }

    if ($carouselImages[counter].id === "firstClone") {
        counter = $carouselImages.length - counter;
        moveCarousel();
    }
})

function moveCarousel() {
    $carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
}

function handleChangeSlide(buttonType) {
    if (buttonType === "next") {
        if (counter >= $carouselImages.length -1) return;
        counter++;
    }
    
    if (buttonType === "prev") {
        if (counter <= 0) return;
        counter--;
    }
    
    moveCarousel();
}

