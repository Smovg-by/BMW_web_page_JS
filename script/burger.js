const menu = document.querySelector('.menu')
const hamburgerElem = document.querySelector('.humburger-menu')

const menuToggle = () => {
  menu.classList.toggle('menu-active') //toggle - если есть стиль, то удаляет, если не стиля, добавляет
  hamburgerElem.classList.toggle('humburger-menu-active')
}

hamburgerElem.addEventListener('click', menuToggle)

const closeMenu = e => {
  if (e.target.classList.contains('menu-list__link')) {
    menu.classList.toggle('menu-active')
    hamburgerElem.classList.toggle('humburger-menu-active')
  }
}

menu.addEventListener('click', closeMenu)
