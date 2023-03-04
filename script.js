import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 16,

  breakpoints: {
    400: {
      slidesPerView: 1.5
    },

    600: {
      slidesPerView: 2
    },

    800: {
      slidesPerView: 2.4
    }
  },

  navigation: {
    nextEl: '.destination-description__button-next',
    prevEl: '.destination-description__button-prev',
    disabledClass: 'destination-description__button-disabled'
  },

});
