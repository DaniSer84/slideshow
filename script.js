import { SLIDES } from "./modules/slides.js";
import { createSlideShow, showSlides, currentSlide, plusSlides, slideIndex } from "./modules/functions.js";

// VARIABLES
let slideshowContainer = document.querySelector('.slideshow-container')
let dotsContainer = document.getElementById('dots-container')
let prev = document.querySelector('.prev') 
let next = document.querySelector('.next')
let timeout

//EVENTS AND FUNCTIONS
createSlideShow(slideshowContainer, dotsContainer, SLIDES)

repeatedPlusSlides()


function repeatedPlusSlides() {
  plusSlides(1)
  timeout = setTimeout(repeatedPlusSlides, 2000)
}

let slidesAndDotsContainer = document.querySelector('.slides-and-dots-container')

slidesAndDotsContainer.onmouseenter = () => clearTimeout(timeout)
slidesAndDotsContainer.onmouseleave = () => repeatedPlusSlides()

prev.addEventListener('click', () => {
  plusSlides(-1)
})
next.addEventListener('click', () => {
  console.log(slideIndex)
  plusSlides(1)
})

showSlides();

let dots = document.getElementsByClassName('dot')
let dotsList = Array.from(dots)
dotsList.forEach(dot => {
  dot.addEventListener('click', () => {
    currentSlide(dotsList.indexOf(dot) + 1)
  })
})



