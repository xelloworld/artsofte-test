@include('../../../node_modules/swiper/swiper-bundle.min.js')

const slider = new Swiper('.slider__container', {
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 300,
  navigation: {
    nextEl: ".slider__button_next",
    prevEl: ".slider__button_prev",
  },
  breakpoints: {
    424.98: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    729.98: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1023.98: {
      slidesPerView: 4
    }
  },
});
