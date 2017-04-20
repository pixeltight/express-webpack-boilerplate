import '../../../node_modules/bootstrap/scss/bootstrap.scss'
import '../css/style.scss'

let hamburger = document.querySelector('#burgerToggle')
let flyoutMenu = document.querySelector('#flyoutMenu')

function showMenu(e) {
	flyoutMenu.classList.add('show')
	document.body.style.overflow = 'hidden'
}

function hideMenu(e) {
	hamburger.classList.remove('is-active')
	flyoutMenu.classList.remove('show')
	e.stopPropagation()
	document.body.style.overflow = 'auto'
}

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active')
  showMenu()
 }, false)

flyoutMenu.addEventListener('click', hideMenu, false)
