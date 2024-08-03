import { createEl } from "./createEl.js";

// CREATE SLIDES FUNCTION:
function createSlideShow(slidesContainer, dotsContainer, list) {
    list.forEach(element => {
      let slide = createEl('div', element.id, 'mySlides fade', '', '', slidesContainer, '')
      let img = createEl('img', '', 'slide-img', '', element.imageSrc, slide, '')
      let textContainer = createEl('div', '', 'slide-text-container', '', '', slide)
      let title = createEl('h1', '', '', element.title, '', textContainer)
      let description = createEl('p', '', '', element.description, '', textContainer)
      let dot = createEl('span', '', 'dot', '', '', dotsContainer)
    });
}


//******************/
// SLIDESHOW AND AUTOMATIC SWITCHING

let slideIndex = 0;
let timeout

// function for automatic movement of the slides
function repeatedPlusSlides() {
    plusSlides(1)
    timeout = setTimeout(repeatedPlusSlides, 2000)
  }

  // function for next and prev buttons
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// function for setting the slide when clicking the specific dot
function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  // function that shows the slides
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

  // FUNCTIONS FOR MODAL
  function selectModal(modal, container) {
    container.innerHtml = ''
    let article = createEl('srticle', '', 'myModal', '', '', container)
    let modalSlideShowContainer = createEl('div', '', 'modal-img-container slideshow-container', '', '', article)
    let modalTextContainer = createEl('div', '', 'modal-text-container', '', '', article)
    let modalTitle = createEl('h1', '', 'modal-title', modal.title, '', modalTextContainer)
    let modalDescription = createEl('p', '', 'modal-description', modal.longDescription, '', modalTextContainer)
    let closeModalBtn = createEl('i', '', 'fa-solid fa-circle-xmark close-modal-btn', '', '', article)
    let prev = createEl('a', '', 'modal-prev', '<i class="fa-solid fa-chevron-left" style="color: #ffffff"></i>', '', modalSlideShowContainer)
    let next = createEl('i', '', 'modal-next', '<i class="fa-solid fa-chevron-right" style="color: #ffffff"></i>', '', modalSlideShowContainer)

    modal.slideImages.forEach(slide => {
      let modalImageContainer = createEl('div', '', 'myModalSlide fade', '', '', modalSlideShowContainer)
      let modalImageNumber = createEl('div', '', 'numbertext', `${modal.slideImages.indexOf(slide) + 1} / ${modal.slideImages.length}`, '', modalImageContainer)
      let modalImg = createEl('img', '', '', '', slide, modalImageContainer)
    })
    
    closeModalBtn.addEventListener('click', () => container.classList.remove('show-modal'))
  }

export {createSlideShow, currentSlide, plusSlides, slideIndex, timeout, repeatedPlusSlides, selectModal}

