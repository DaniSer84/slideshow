import { createEl } from "./createEl.js"

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

  export {selectModal}