document.addEventListener('DOMContentLoaded', () => {
  const featureLinkElems = document.querySelectorAll('.feature__link')

  const featureSubElems = document.querySelectorAll('.feature-sub')

  //iterate over array var 1

  //   for (let i = 0; i < featureLinkElems.length; i++) {
  //     featureLinkElems[i].addEventListener('click', () => {
  //       featureSubElems[i].classList.toggle('hidden')
  //       featureLinkElems[i].classList.toggle('feature__link_active')
  //     })
  //   }

  //iterate over array var 2

  featureLinkElems.forEach((elem, index) => {
    elem.addEventListener('click', () => {
      if (
        !featureSubElems[index].classList.contains('hidden') &&
        elem.classList.contains('feature__link_active')
      ) {
        featureSubElems[index].classList.add('hidden')
        elem.classList.remove('feature__link_active')
      } else {
        featureSubElems.forEach(elem => {
          elem.classList.add('hidden') //hide all elements, but one
        })

        featureLinkElems.forEach(elem => {
          elem.classList.remove('feature__link_active') //show only one element
        })

        featureSubElems[index].classList.remove('hidden')
        elem.classList.add('feature__link_active')
      }
    })
  })
})
