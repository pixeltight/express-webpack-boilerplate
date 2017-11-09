import '../scss/style.scss'

// flyout menu
let hamburger = document.getElementById('burgerToggle')
let flyoutMenu = document.getElementById('flyoutMenu')
let indexdots = document.getElementById('indexdots')
let portfolio = document.getElementById('portfolio')
let portfolioLink = document.getElementById('portfolioLink')

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

// if hitting hashed link from homepage
// close mobile nav

if (portfolio) {
  portfolioLink.addEventListener('click', () => {
    hamburger.classList.remove('is-active')
    hideMenu()
  }, false)
}

if (indexdots) {
  let indexLinks = document.querySelectorAll('a.indexdots__link')
  let indexLink = (document.getElementById('index').value) - 1
  let activeLink = indexLinks[indexLink]
  activeLink.classList.add('active')
}

// send mail if validated
(function ($) {
  'use strict'
  if ($('contact-form')) {
    $('#contact-form').on('submit', function (e) {
      e.preventDefault()
      const dataString = $(this).serialize()
      $('.form-fields__button').text('submitting...')
      $.ajax({
        type: 'POST',
        url: '/contact',
        data: dataString, 
        success: function (data) {
          $('.form-fields__button').text('send email')
          $('.error-block').empty().removeClass('visible');
          if(data.errorMsg) {
            $('.error-block').addClass('visible');
            $.each(data.errorMsg, function (key, val) {
              $('<li class=\'error-block__item\'><i class=\'fa fa-warning\' aria-hidden=\'true\'></i>' 
                + val.msg + '</li>').appendTo('.error-block')
            })
          } else {
            $('.form-fields__button').text('success')
            $('#contact-form').fadeOut('slow')
          }
        }
      })
      return false
    })
  }
}(jQuery))
