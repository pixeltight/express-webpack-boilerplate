import '../scss/style.scss'
import './jquery.hoverdir.js'

// flyout menu
let hamburger = document.getElementById('burgerToggle')
let flyoutMenu = document.getElementById('flyoutMenu')
let indexdots = document.getElementById('indexdots')

function showMenu () {
  flyoutMenu.classList.add('show')
  document.body.style.overflow = 'hidden'
}

function hideMenu () {
  flyoutMenu.classList.remove('show')
  document.body.style.overflow = 'auto'
}

if (hamburger) {
  hamburger.addEventListener('click', () => {
    if (!hamburger.classList.contains('is-active')) {
      hamburger.classList.add('is-active')
      showMenu()
    } else {
      hamburger.classList.remove('is-active')
      hideMenu()
    }
  }, false)
}

// send mail if validated
(function ($) {
  'use strict'
  if ($('contact-form')) {
    $('#contact-form').on('submit', function (e) {
      e.preventDefault()
      const dataString = $(this).serialize()
      console.log(dataString)
      $.ajax({
        type: 'POST',
        url: '/contact',
        data: dataString,
        success: function (data) {
          $('.error-block').empty()
          if (data.messages) {
            $.each(data.messages, function (key, val) {
              $('<p>' + val.msg + '</p>').appendTo('.error-block')
            })
          }
        }
      })
      return false
    })
  }
}(jQuery))

if (indexdots) {
  let indexLinks = document.querySelectorAll('a.indexdots__link');
  let indexLink = (document.getElementById('index').value) - 1;
  let activeLink = indexLinks[indexLink];
  activeLink.classList.add('active');
}
