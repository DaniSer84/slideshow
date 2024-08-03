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

export {createSlideShow}