const smoothScrollElems = document.querySelectorAll(
  'a[href^="#"]:not(a[href="#"])'
)

smoothScrollElems.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault()

    const id = link.getAttribute('href').substring(1)


    let el = document.getElementById(id)



    document.getElementById(id).scrollIntoView({
      block: 'end',
      behavior: 'smooth'
    })
  })
})
