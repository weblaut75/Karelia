
document.addEventListener('DOMContentLoaded', () => {

  const hero = document.querySelector('.hero');
  const header = document.querySelector('.header');
  // const scrollItems = document.querySelectorAll('.company__schedule__item');
  const scrollAnimation = () => {
    let windowCenter = (window.innerHeight / 2) + window.scrollY;
    console.log(windowCenter)
    scrollItems.forEach(el => {
      let scrollOffset = el.offsetTop + (el.offsetHeight / 2);
      console.log(scrollOffset)
      if (windowCenter >= 1100) {
        el.classList.add('animation-class');
      } else {
        el.classList.remove('animation-class');
      }
    });
  };

  const headerFixed = () => {
    let scrollTop = window.scrollY;
    let heroCenter = hero.offsetHeight / 2;

    if (scrollTop >= 160) {
      header.classList.add('fixed')
      hero.style.marginTop = `${header.offsetHeight}px`;
    } else {
      header.classList.remove('fixed')
      hero.style.marginTop = `0px`;
    }
  };

  headerFixed();
  // scrollAnimation();
  window.addEventListener('scroll', () => {
    headerFixed();
    // scrollAnimation();
  });

  // =========================================================

  // $width = $(window).width();
  // console.log($width);

  $('.icon-menu').click(function () {
    $('html').toggleClass('_open');
  });

  $(window).resize(function () {
    $('html').removeClass('_open');
  });


  $('.header__bottom__menu li a, .substrate').click(function () {
    $('html').removeClass('_open');
  });
  // =========================================================

  // Плавная прокрутка по якорю
  document.querySelectorAll('._js_cat_nav a[href^="#"').forEach(link => {

    link.addEventListener('click', function (e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = document.querySelector('.header').offsetHeight;
      // const topOffset = 0; // если не нужен отступ сверху 
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });

  // =========================================================


  // $(document).mouseup(function (e) { // событие клика по веб-документу
  //   var div = $(".header__bottom"); // тут указываем ID элемента
  //   if (!div.is(e.target) // если клик был не по нашему блоку
  //     && div.has(e.target).length === 0) { // и не по его дочерним элементам
  //     // div.hide(); // скрываем его
  //     $('html').removeClass('_open');
  //   }
  // });

  // =========================================================


  // Плавная прокрутка по якорю
  document.querySelectorAll('.header__bottom__menu a[href^="#"').forEach(link => {

    link.addEventListener('click', function (e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = document.querySelector('.header').offsetHeight;
      // const topOffset = 0; // если не нужен отступ сверху 
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });

  // =========================================================


  var menu_selector = "#primary-menu";

  function onScroll() {
    var scroll_top = $(document).scrollTop();
    $(menu_selector + " a").each(function () {
      var hash = $(this).attr("href");
      var target = $(hash);
      if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
        $(menu_selector + " a._active").removeClass("_active");
        $(this).addClass("_active");
      } else {
        $(this).removeClass("_active");
      }
    });
  }

  $(document).on("scroll", onScroll);
  // =========================================================
  $('.popular__sl').slick({
    centerMode: true,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    centerPadding: "10.625rem",
    responsive: [
      {
        breakpoint: 998,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "2.5rem",
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "20%",
          slidesToShow: 1
        }
      },
      {
        breakpoint: 560,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "15px",
          slidesToShow: 1
        }
      }
    ]
  });

  $('.video__sl, .reviews__sl').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 998,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 560,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });

  // =========================================================

  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });

  // =========================================================


  $('.up').on('click', function () {
    $('body , html').animate({
      scrollTop: 0,
    }, 1000);
  })







});



/* Проверка мобильного браузера */
let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
/* Добавление класса touch для HTML если браузер мобильный */
function addTouchClass() {
  // Добавление класса _touch для HTML если браузер мобильный
  if (isMobile.any()) document.documentElement.classList.add('touch');
}
addTouchClass();