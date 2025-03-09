var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2500,
  },
  spaceBetween: 0,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    376: {
      slidesPerView: 2,
      spaceBetween: 20,
    }
  }
});