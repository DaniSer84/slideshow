import { SLIDES } from "./modules/slides.js";
import { createSlideShow, currentSlide, plusSlides, slideIndex, timeout, repeatedPlusSlides, selectModal } from "./modules/functions.js";

// VARIABLES
let slideshowContainer = document.querySelector('.slideshow-container')
let dotsContainer = document.getElementById('dots-container')
let prev = document.querySelector('.prev') 
let next = document.querySelector('.next')
let dots = document.getElementsByClassName('dot')
let slidesAndDotsContainer = document.querySelector('.slides-and-dots-container')
let timeout2 

//EVENTS AND FUNCTIONS
createSlideShow(slideshowContainer, dotsContainer, SLIDES)
repeatedPlusSlides()

// Stop the movement when on container
slidesAndDotsContainer.onmouseenter = () => {
  clearTimeout(timeout)
  clearTimeout(timeout2)
}
slidesAndDotsContainer.onmouseleave = () => {
  timeout2 = setTimeout(repeatedPlusSlides, 15000)
}

// prev and next buttons events
prev.addEventListener('click', () => {
  plusSlides(-1)
})
next.addEventListener('click', () => {
  console.log(slideIndex)
  plusSlides(1)
})

// dots event
let dotsList = Array.from(dots)
dotsList.forEach(dot => {
  dot.addEventListener('click', () => {
    currentSlide(dotsList.indexOf(dot) + 1)
  })
})

// button to stop auto-movement
let stopBtn = document.querySelector('#stop-btn')
stopBtn.addEventListener('click', () => {
  clearTimeout(timeout)
  clearTimeout(timeout2)
})


// MODAL
let slides = document.getElementsByClassName('mySlides')
let modalContainer = document.querySelector('.modal-container')

for (let slide of slides) {
  slide.addEventListener('click', () => {
    let slideToShow = SLIDES.find(slideToShow => slideToShow.id === slide.id )
    modalContainer.innerHTML = ''
    selectModal(slideToShow, modalContainer)
    modalContainer.classList.add('show-modal')
  })
}
