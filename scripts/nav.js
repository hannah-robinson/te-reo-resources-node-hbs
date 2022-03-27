const primaryNav = document.querySelector('.primary-navigation')
const mobileNavToggle = document.querySelector('.mobile-nav-toggle')
const toggleIcon = document.querySelector('#toggle-icon')

// Toggle button for mobile menu
mobileNavToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible')

  if (visibility === 'false') {
    primaryNav.setAttribute('data-visible', true)
    mobileNavToggle.setAttribute('aria-expanded', true)
    toggleIcon.setAttribute('class', 'fa-solid fa-xmark')
  } else if (visibility === 'true') {
    primaryNav.setAttribute('data-visible', false)
    mobileNavToggle.setAttribute('aria-expanded', false)
    toggleIcon.setAttribute('class', 'fas fa-bars')
  }
})

// Make mobile menu close if a menu element is selected
primaryNav.addEventListener('click', () => {
  primaryNav.setAttribute('data-visible', false)
  mobileNavToggle.setAttribute('aria-expanded', false)
  toggleIcon.setAttribute('class', 'fas fa-bars')
})

// Stop animations firing when window resizes
// https://css-tricks.com/stop-animations-during-window-resizing/
let resizeTimer
window.addEventListener('resize', () => {
  document.body.classList.add('resize-animation-stopper')
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(() => {
    document.body.classList.remove('resize-animation-stopper')
  }, 400)
})
