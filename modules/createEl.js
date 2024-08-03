function createEl(el, id, className, innerHTML, src, container, containerSelector) {
    let newEl = document.createElement(el)
    newEl.className = className
    if(innerHTML !== '') {
        newEl.innerHTML = innerHTML
      }
    newEl.src = src
    newEl.id = id
    if (container !== '') {
      container.append(newEl)
    } else {
      document.querySelector(containerSelector).append(newEl)
    }
    return newEl
  }

  export {createEl}