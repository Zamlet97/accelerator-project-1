import Swiper from 'swiper';

const swiperPrimary = new Swiper('.swiper-primary', {
  slidesPerView: 1,
  loop: true,
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween:40,
      navigation: {
        nextEl: '.swiper-button-disabled',
        prevEl: '.swiper-button-disabled',
      },
      setWrapperSize:{
        width: 260,
        height: 300},
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
      navigation: {
        nextEl: '.jury__button-next .swiper-button-next ',
        prevEl: 'jury__button-prev .swiper-button-prev ',
      },

    }
  }
});

const swiperSecondary = new Swiper('.swiper-secondary', {
  loop: false,
  cssMode: true,
  slidesPerView : 1,
  navigation: {
    nextEl: '.reviews-button-next',
    prevEl: '.reviews-button-prev',
  },
  mousewheel: true,
  keyboard: true,
});

export {swiperPrimary, swiperSecondary};
