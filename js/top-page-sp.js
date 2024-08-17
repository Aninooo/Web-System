const images = [
    "/assets/visual/slide01.jpg",
    "/assets/visual/slide02.jpg",
    "/assets/visual/slide03.jpg"
];

let currentIndex = 0;

const sliderTrack = document.getElementById('slider-track');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

function updateSlider() {
    const slidesHTML = `
        <div class="slide">
            <img src="${images[currentIndex]}" alt="Main Image">
        </div>
    `;
    sliderTrack.innerHTML = slidesHTML;
}

function startAutoSlide() {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider();
    }, 3000); 
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
});

updateSlider();
startAutoSlide();
