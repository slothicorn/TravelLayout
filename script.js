//SWIPER
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 16,

  breakpoints: {
    400: {
      slidesPerView: 1.5,
      spaceBetween: 8
    },

    600: {
      slidesPerView: 2,
      spaceBetween: 10
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

//ON LOAD ANIMACE

gsap.to('.home-hero', {autoAlpha: 1, duration: 1.5})

gsap.to('.destination-image', {x: 0, duration: 1})

gsap.to('.destination-description', {x: 0, duration: 1})