const moreElems = document.querySelectorAll('.more')
const modalElem = document.querySelector('.modal')
const closeButton = document.querySelector('.modal__close')


const openModal = () => {
  modalElem.classList.remove('hidden')
}

const closeModal = e => {
  if (
    e.target.classList.contains('overlay') ||
    e.target.classList.contains('modal__close')
  )
    modalElem.classList.add('hidden')
}

moreElems.forEach(element => {
  element.addEventListener('click', openModal)
})

modalElem.addEventListener('click', closeModal)