// Refresh AOS on scroll
window.onscroll = () => {
    AOS.refresh();
}

// ----------------------------------------------------------------------------------------------------------------

// Functionality For Our Clients Slider
var swiper = new Swiper(".ourClientsSlider", {
  slidesPerView: 4, // show exactly 7 slides
  centeredSlides: true, // keep active in center
  loop: true,
  grabCursor: true,
  spaceBetween: 0,
  speed: 600,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 300, // small depth (not tunnel)
    modifier: 1, // lower = less tunnel
    slideShadows: false,
  },

  pagination: {
    el: ".our-clients-slider .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".our-clients-slider .swiper-button-next",
    prevEl: ".our-clients-slider .swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 3, // mobile
    },
    768: {
      slidesPerView: 4, // tablets & up
    },
  },

});

// ----------------------------------------------------------------------------------------------------------------

// Functionality For Client Reviews Slider
var swiper = new Swiper(".clientReviewsSlider", {
  slidesPerView: 1,
  loop: true,
  grabCursor: true,
  spaceBetween: 0,
  speed: 800,
  autoplay: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".client-reviews .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".client-reviews .swiper-button-next",
    prevEl: ".client-reviews .swiper-button-prev",
  },
});

// ----------------------------------------------------------------------------------------------------------------