// CREATE SLIDES FUNCTION:
function createSlideShow(slidesContainer, dotsContainer, list) {
    list.forEach(element => {
        let slide = document.createElement('div')
        // let number = document.createElement('div')
        let img = document.createElement('img')
        let title = document.createElement('h1')
        let description = document.createElement('p')
        let textContainer = document.createElement('div')
        let dot = document.createElement('span')

        slide.className = 'mySlides fade'
        slide.id = element.id
        // number.innerHTML = `${element.id} / ${list.length}`
        // number.className = 'numbertext'
        img.src = element.imageSrc
        img.className = 'slide-img'
        title.textContent = element.title
        description.textContent = element.description
        textContainer.className = 'slide-text-container'
        dot.className = 'dot'

        textContainer.append(title, description)
        slide.append(img, textContainer)
        slidesContainer.append(slide)
        dotsContainer.append(dot)
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
    let modalImgContainer = document.createElement('div')
    let modalImg = document.createElement('img')
    let modalTextContainer = document.createElement('div')
    let modalTitle = document.createElement('h1')
    let modalDescription = document.createElement('p')
    let closeModalBtn = document.createElement('i')
  
    article.className = 'myModal'
    modalImgContainer.className = 'modal-img-container'
    modalTextContainer.className = 'modal-text-container'
    modalTitle.className = 'modal-title'
    modalDescription.className = 'modal-description'
    modalImg.src = modal.imageSrc
    modalTitle.textContent = modal.title
    modalDescription.textContent = modal.longDescription
    closeModalBtn.className = 'fa-solid fa-circle-xmark'
    
    closeModalBtn.addEventListener('click', () => container.classList.remove('show-modal'))
    
    modalTextContainer.append(modalTitle, modalDescription)
    modalImgContainer.append(modalImg)
    article.append(modalImgContainer, modalTextContainer, closeModalBtn)
    container.append(article)
  }

export {createSlideShow, currentSlide, plusSlides, slideIndex, timeout, repeatedPlusSlides, selectModal}

