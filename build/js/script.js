

(function () {
  const body = document.body;
  const overlay = document.querySelector('.overlay')
  const btnHeaderBurger = document.querySelector('.header__btn-burger');
  const headerMenuWrap = document.querySelector('.header__menu-wrapper');
  const btnHeaderMenuClose = document.querySelector('.btn--header-menu-close');

  const onDocumentMenuClose = function() {
    if (footerMenuWrap.classList.contains('footer__menu-overlay--opened')) {
      onBtnFooterMenuClosed();
    }

    if (headerMenuWrap.classList.contains('header__menu-wrapper--opened')) {
      onBtnHeaderMenuClosed();
    }
  }


  const onBtnHeaderMenuClosed = function () {
    body.classList.remove('body--menu-opened');
    headerMenuWrap.classList.remove('header__menu-wrapper--opened');
    overlay.classList.remove('overlay--opened');

    btnHeaderMenuClose.removeEventListener('click', onDocumentMenuClose);
    document.removeEventListener('keydown', onEscMenuClosed);
  }

  const onEscMenuClosed = function (evt) {
    if (evt.keyCode === 27 && footerMenuWrap.classList.contains('footer__menu-overlay--opened')) {
      onBtnFooterMenuClosed();
    }

    if (evt.keyCode === 27 && headerMenuWrap.classList.contains('header__menu-wrapper--opened')) {
      onBtnHeaderMenuClosed();
    }
  }


  const headerMenuOpened = function () {
    body.classList.add('body--menu-opened');
    headerMenuWrap.classList.add('header__menu-wrapper--opened');
    overlay.classList.add('overlay--opened');

    btnHeaderMenuClose.addEventListener('click', onBtnHeaderMenuClosed);
    document.addEventListener('keydown', onEscMenuClosed);
  };

  btnHeaderBurger.addEventListener('click', headerMenuOpened);
  overlay.addEventListener('click', onDocumentMenuClose);

// Footer-menu

  const btnFooterBurger = document.querySelector('.btn--footer-burger');
  const footerMenuWrap = document.querySelector('.footer__menu-overlay');
  const btnFooterMenuClose = document.querySelector('.btn--footer-close');

  //close menu
  const onBtnFooterMenuClosed = function () {
    body.classList.remove('body--menu-opened');
    footerMenuWrap.classList.remove('footer__menu-overlay--opened');
    overlay.classList.remove('overlay--opened');

    btnFooterMenuClose.removeEventListener('click', onBtnFooterMenuClosed);
    document.removeEventListener('keydown', onEscMenuClosed);
  }

  //open menu
  const footerMenuOpened = function () {
    body.classList.add('body--menu-opened');
    footerMenuWrap.classList.add('footer__menu-overlay--opened');
    overlay.classList.add('overlay--opened');

    btnFooterMenuClose.addEventListener('click', onBtnFooterMenuClosed);
    document.addEventListener('keydown', onEscMenuClosed);
  };

  btnFooterBurger.addEventListener('click', footerMenuOpened);

})();

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
