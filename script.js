import { SLIDES } from "./modules/slides.js";
import { createSlideShow } from "./modules/functions.js";

// VARIABLES
let slideshowContainer = document.querySelector('.slideshow-container')
let dotsContainer = document.getElementById('dots-container')
let slideIndex = 0;
let prev = document.querySelector('.prev') 
let next = document.querySelector('.next')
let timeout

//EVENTS AND FUNCTIONS
createSlideShow(slideshowContainer, dotsContainer, SLIDES)

function repeatedPlusSlides() {
  plusSlides(1)
  timeout = setTimeout(repeatedPlusSlides, 2000)
}

repeatedPlusSlides()

let slidesAndDotsContainer = document.querySelector('.slides-and-dots-container')

slidesAndDotsContainer.onmouseenter = () => clearTimeout(timeout)
slidesAndDotsContainer.onmouseleave = () => repeatedPlusSlides()

prev.addEventListener('click', () => {
  console.log(slideIndex)
  plusSlides(-1)
})
next.addEventListener('click', () => {
  console.log(slideIndex)
  plusSlides(1)
})

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

let dots = document.getElementsByClassName('dot')
console.log(dots)
let dotsList = Array.from(dots)
dotsList.forEach(dot => {
  dot.addEventListener('click', () => {
    currentSlide(dotsList.indexOf(dot) + 1)
  })
})

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1
  }    
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}