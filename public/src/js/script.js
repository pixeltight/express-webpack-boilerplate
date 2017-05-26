import '../scss/style.scss'
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

// thumbnail animated hover
(function ($) {
  'use strict'
  $('.thumbnails__container').each(function () {
    $(this).hoverdir()
  })
}(jQuery));

// send mail if validated
(function ($) {
  'use strict'
  $('#contact-form').on('submit', function (e) {
    e.preventDefault()
    const dataString = $(this).serialize()
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
}(jQuery))
