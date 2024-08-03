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
    let article = document.createElement('article')
    let modalSlideShowContainer = document.createElement('div')
    let modalTextContainer = document.createElement('div')
    let modalTitle = document.createElement('h1')
    let modalDescription = document.createElement('p')
    let closeModalBtn = document.createElement('i')
    let prev = document.createElement('a')
    let next = document.createElement('a')

    prev.innerHTML = `<i class="fa-solid fa-chevron-left" style="color: #ffffff"></i>`
    next.innerHTML = `<i class="fa-solid fa-chevron-right" style="color: #ffffff"></i>`

    prev.className = 'modal-prev'
    next.className = 'modal-next'
    
    modal.slideImages.forEach(slide => {
      let modalImageContainer = document.createElement('div')
      let modalImageNumber = document.createElement('div')
      let modalImg = document.createElement('img')

      modalImageNumber.className = 'numbertext'
      modalImageNumber.innerHTML = `${modal.slideImages.indexOf(slide) + 1} / ${modal.slideImages.length}`
      
      modalImageContainer.className = 'myModalSlide fade'
      modalImg.src = slide
      modalImageContainer.append(modalImg, modalImageNumber)
      modalSlideShowContainer.append(modalImageContainer)
    })
    
    article.className = 'myModal'
    modalSlideShowContainer.className = 'modal-img-container slideshow-container'
    modalTextContainer.className = 'modal-text-container'
    modalTitle.className = 'modal-title'
    modalDescription.className = 'modal-description'
    modalTitle.textContent = modal.title
    modalDescription.textContent = modal.longDescription
    closeModalBtn.className = 'fa-solid fa-circle-xmark close-modal-btn'
    
    closeModalBtn.addEventListener('click', () => container.classList.remove('show-modal'))
    
    modalSlideShowContainer.append(prev, next)
    modalTextContainer.append(modalTitle, modalDescription)
    article.append(modalSlideShowContainer, modalTextContainer, closeModalBtn)
    container.append(article)
  }

export {createSlideShow, currentSlide, plusSlides, slideIndex, timeout, repeatedPlusSlides, selectModal}

