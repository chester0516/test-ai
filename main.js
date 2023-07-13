var carousel = document.querySelector('.carousel');
var carouselContent = document.querySelector('.carousel-content');
var slides = document.querySelectorAll('.carousel-item');
var slideWidth = carousel.clientWidth;
var currentIndex = 0;

/**
 * Navigate to a specific slide in the carousel.
 *
 * @param {number} index - The index of the slide to navigate to.
 */
function goToSlide(index) {
  // Calculate the translation distance based on the slide width and index.
  const translateX = -slideWidth * index;
  
  // Apply the translation to the carousel content.
  carouselContent.style.transform = `translateX(${translateX}px)`;
  
  // Update the current index.
  currentIndex = index;
}

function goToPrevSlide() {
  if (currentIndex > 0) {
    goToSlide(currentIndex - 1);
  }
}

function goToNextSlide() {
  if (currentIndex < slides.length - 1) {
    goToSlide(currentIndex + 1);
  } else {
    goToSlide(0);
  }
}

setInterval(goToNextSlide, 1000);


document.querySelector('.prev').addEventListener('click', goToPrevSlide);
document.querySelector('.next').addEventListener('click', goToNextSlide);

