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

export { currentSlide, plusSlides, slideIndex, timeout, repeatedPlusSlides}

