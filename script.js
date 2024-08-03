import { SLIDES } from "./modules/mock/slides.js";
import { currentSlide, plusSlides, timeout, repeatedPlusSlides, plusModalSlides, currentModalSlide } from "./modules/components/slideShow.js";
import { createSlideShow } from "./modules/components/createSlideShow.js";
import { selectModal } from "./modules/components/selectModal.js";

// create Slide Show
let slideshowContainer = document.querySelector('.slideshow-container')
let dotsContainer = document.getElementById('dots-container')
createSlideShow(slideshowContainer, dotsContainer, SLIDES)



//EVENTS AND FUNCTIONS
repeatedPlusSlides()

// Stop the movement when on container
let slidesAndDotsContainer = document.querySelector('.slides-and-dots-container')
let timeout2 
slidesAndDotsContainer.onmouseenter = () => {
  clearTimeout(timeout)
  clearTimeout(timeout2)
}
slidesAndDotsContainer.onmouseleave = () => {
  timeout2 = setTimeout(repeatedPlusSlides, 15000)
}

// prev and next buttons events
let prev = document.querySelector('.prev') 
let next = document.querySelector('.next')
prev.addEventListener('click', () => {
  plusSlides(-1)
})
next.addEventListener('click', () => {
  plusSlides(1)
})

// dots event
let dots = document.getElementsByClassName('dot')
let dotsList = Array.from(dots)
dotsList.forEach(dot => {
  dot.addEventListener('click', () => {
    currentSlide(dotsList.indexOf(dot) + 1)
  })
})

// // button to stop auto-movement
// let stopBtn = document.querySelector('#stop-btn')
// stopBtn.addEventListener('click', () => {
//   clearTimeout(timeout)
//   clearTimeout(timeout2)
// })


// MODAL
let slides = document.getElementsByClassName('mySlides')
let modalContainer = document.querySelector('.modal-container')
for (let slide of slides) {
  slide.addEventListener('click', () => {
    let slideToShow = SLIDES.find(slideToShow => slideToShow.id === slide.id )
    modalContainer.innerHTML = ''
    selectModal(slideToShow, modalContainer)
    modalContainer.classList.add('show-modal')
    
    let modalSlides = Array.from(document.getElementsByClassName('myModalSlide'))
    plusModalSlides(0, modalSlides)

    let modalPrev = document.getElementsByClassName('modal-prev')
    modalPrev[0].addEventListener('click', () => {
      plusModalSlides(-1, modalSlides)
    })

    let modalNext = document.getElementsByClassName('modal-next')
    modalNext[0].addEventListener('click', () => {
      plusModalSlides(1, modalSlides)
    })

    let closeModalBtn = document.getElementsByClassName('close-modal-btn')
    closeModalBtn[0].addEventListener('click', () => setTimeout(() => currentModalSlide(1, modalSlides), 500))
  })
}


