// CREATE SLIDES FUNCTION:
function createSlideShow(slidesContainer, dotsContainer, list) {
    list.forEach(element => {
        let slide = document.createElement('div')
        let number = document.createElement('div')
        let img = document.createElement('img')
        let title = document.createElement('h1')
        let description = document.createElement('p')
        let textContainer = document.createElement('div')
        let dot = document.createElement('span')

        slide.className = 'mySlides fade'
        number.innerHTML = `${element.id} / ${list.length}`
        number.className = 'numbertext'
        img.src = element.imageSrc
        img.className = 'slide-img'
        title.textContent = element.title
        description.textContent = element.description
        textContainer.className = 'slide-text-container'
        dot.className = 'dot'

        textContainer.append(title, description)
        slide.append(number, img, textContainer)
        slidesContainer.append(slide)
        dotsContainer.append(dot)
    });
}

export {createSlideShow}