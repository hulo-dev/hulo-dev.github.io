
//main-banner-slider
  import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js'

const swipers = Swiper(".main-banner-slider", {
    fadeEffect: { crossFade: true },
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    slidersPerView: 1,
    effect: "fade"
});
