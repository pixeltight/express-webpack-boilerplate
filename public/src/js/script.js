import '../css/style.scss'
import './jquery.hoverdir.js'

// flyout menu
let hamburger = document.querySelector('#burgerToggle')
let flyoutMenu = document.querySelector('#flyoutMenu')

function showMenu () {
  flyoutMenu.classList.add('show')
  document.body.style.overflow = 'hidden'
}

function hideMenu () {
  flyoutMenu.classList.remove('show')
  document.body.style.overflow = 'auto'
}

hamburger.addEventListener('click', () => {
  if (!hamburger.classList.contains('is-active')) {
    hamburger.classList.add('is-active')
    showMenu()
  } else {
    hamburger.classList.remove('is-active')
    hideMenu()
  }
}, false)

// thumbnail animated hover
$(function() {   
  $('.thumbnails__link').each( function() { 
    $(this).hoverdir(); 
  });
});
