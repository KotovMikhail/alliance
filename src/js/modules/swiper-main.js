(function () {

  const mql = window.matchMedia('(max-width: 767px)');

  let swiper
  if (swiper) {
    swiper.destroy(true, true);
  }

  swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    spaceBetween: 0,
    speed: 1000,
    observer: true,
    observeParents: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      999: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      767: {
        autoplay: false,
        loop: true,
      }
    }
  });

  const widthInit = function (width) {
    if (width.matches) {
      swiper.autoplay.stop();
    }
  }

  widthInit(mql);
  mql.addListener(widthInit);


})();
