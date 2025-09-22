var swiper = new Swiper(".ourClientsSlider", {
  slidesPerView: 4,        // show exactly 7 slides
  centeredSlides: true,    // keep active in center
  loop: true,              // loop them
  grabCursor: true,
  spaceBetween: 0,

  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,        // no rotation
    stretch: 0,       // no stretch
    depth: 300,       // small depth (not tunnel)
    modifier: 1,      // lower = less tunnel
    slideShadows: false
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
