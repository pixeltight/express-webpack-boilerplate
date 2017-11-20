import '../scss/style.scss'

window.onpageshow = (e) => {
  if (e.persisted) {
      window.location.reload() 
  }
}

;(function () {
  let indexdots = document.getElementById('indexdots')
  if (indexdots) {
    let indexLinks = document.querySelectorAll('a.indexdots__link')
    let indexLink = (document.getElementById('index').value) - 1
    let activeLink = indexLinks[indexLink]
    activeLink.classList.add('active')
  }
})()

;(function () {
  const showMenu = () => {
    document.getElementById('flyoutMenu').classList.add('show')
    document.body.style.overflow = 'hidden'
  }

  const hideMenu = () => {
    document.getElementById('flyoutMenu').classList.remove('show')
    document.body.style.overflow = 'auto'
  }

  let portfolio = document.getElementById('portfolio')
  let portfolioLink = document.getElementById('portfolioLink')
  let hamburger = document.getElementById('burgerToggle')

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

  if (portfolio) {
    portfolioLink.addEventListener('click', () => {
      hamburger.classList.remove('is-active')
      hideMenu()
    }, false)
  }
})()

// send mail if validated
;(function ($) {
  'use strict'
  if ($('contact-form')) {
    $('#contact-form').on('submit', function (e) {
      e.preventDefault()
      const dataString = $(this).serialize()
      $('.form-fields__button').text('submitting...').attr('disabled', true)
      $.ajax({
        type: 'POST',
        url: '/contact',
        data: dataString, 
        success: function (data) {
          $('.form-fields__button').attr('disabled', false).text('send email')
          $('.error-block').empty().removeClass('visible')
          if(data.errorMsg) {
            $('.error-block').addClass('visible')
            $.each(data.errorMsg, function (key, val) {
              $('<li class=\'error-block__item\'><i class=\'fa fa-warning\' aria-hidden=\'true\'></i>' 
                + val.msg + '</li>').appendTo('.error-block')
            })
          } else {

            $('.form-fields__button').text('success')
            $('#contact-section').fadeOut('fast')
            $('.footer').addClass('sticky-footer')
            $('.success-message').addClass('visible')
          }
        }
      })
      return false
    })
  }
}(jQuery))
