const swiper = new Swiper('.bubupod-special-swiper', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    autoplay: {
      delay: 3000, 
      disableOnInteraction: false,
    },
    breakpoints: {
        0: { slidesPerView: 5 },
        640: { slidesPerView: 2 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
    },
  });

const swiper1 = new Swiper('.bubupod-twin-swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });

  $(document).ready(function () {
    const header = $("header");
    const fixedOffset = 50;

    $(window).on("scroll", function () {
      if ($(this).scrollTop() > fixedOffset) {
        header.addClass("bubupod-fixed");
      } else {
        header.removeClass("bubupod-fixed");
      }
    });
  });

  const thumbSwiper = new Swiper('.swiper-thumb', {
    slidesPerView: 4,
    spaceBetween: 10,
    watchSlidesProgress: true,
  });

  // Initialize Main Slider
  const mainSwiper = new Swiper('.main-slider', {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: thumbSwiper, // Link to the thumbnail Swiper
    },
  });

  const reviewSwiper = new Swiper('.bubupod-review-swiper', {
    loop: true,
    slidesPerView: 'auto',
  });
  const productSwiper = new Swiper('.bubupod-product-swiper', {
    loop: false,
    slidesPerView: 5,
    spaceBetween: 10,
  });

$(document).ready(function(){
  $('.menu-toggle').click(function(){
    $('.bubupod-header').toggleClass('nav-open');
  })
})