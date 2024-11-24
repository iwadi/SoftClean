/* ============ Выбор информации =================== */
/* ============ Выбор информации =================== */

// Список всех кнопок и соответствующих им контентов
const sections = {
  button1: 'ul1',
  button2: 'ul2',
  button3: 'ul3',
  button4: 'ul4',
  button5: 'ul5',
  button6: 'ul6'
};

// Функция для переключения контента
function toggleContent(buttonId) {
  // Скрываем весь контент
  for (let key in sections) {
      document.getElementById(sections[key]).style.opacity = '0';
  }

  // Показываем только нужный контент
  const contentId = sections[buttonId];
  const content = document.getElementById(contentId);
  if (content.style.opacity === '0') {
      content.style.opacity = '1';
  } else {
      content.style.opacity = '0';
  }
}

// Добавляем обработчики событий на каждую кнопку
for (let buttonId in sections) {
  document.getElementById(buttonId).addEventListener('click', function() {
      toggleContent(buttonId);
  });
}

/* ============ Анимация меняющейся картинки каждые несколько секунд =================== */
/* ============ Анимация меняющейся картинки каждые несколько секунд =================== */

(function slideShow() {
    let imgs = [
      "img/png/section_9/sliders/slide.png",
      "img/png/section_9/sliders/slide2.png",
      "img/png/section_9/sliders/slide3.png",
      "img/png/section_9/sliders/slide4.png"
    ];
  
    let index = 0;
    const frontImg = document.getElementById("slideshow__img--front");
    const backImg = document.getElementById("slideshow__img--back");
    frontImg.src = imgs[index];
  
    const changeSlideShowImg = () => {
      const currImgSrc = imgs[index];
      index++;
      if (index >= imgs.length) index = 0;
      const newImgSrc = imgs[index];
  
      backImg.src = newImgSrc;
      frontImg.classList.add("slideshow__img--fadeout");
  
      setTimeout(() => {
        frontImg.src = newImgSrc;
        frontImg.classList.remove("slideshow__img--fadeout");
      }, 500);
    };
  
    setInterval(changeSlideShowImg, 3000);
  })()

/* ============ SWIPER JS =================== */
/* ============ SWIPER JS =================== */

let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.myslider-next',
    prevEl: '.myslider-prev',
  },

  breakpoints:{
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

let swiperCardsSection6 = new Swiper(".card__content__section_6", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.myslider-next',
    prevEl: '.myslider-prev',
  },

  breakpoints:{
    600: {
      slidesPerView: 1,
    },
    968: {
      slidesPerView: 1,
    },
  },
});

/* ============ accordion =================== */
/* ============ accordion =================== */

new Accordion('.accordion-container');

/* ============ Слайдер сравнения =================== */
/* ============ Слайдер сравнения =================== */

const slider = document.querySelector(".slider__section_6 input");
const img = document.querySelector(".images__section_6 .img2__wrapper");
const dragLine = document.querySelector(".slider__section_6 .drag-line");
slider.oninput = () => {
  let sliderVal = slider.value;
  dragLine.style.left = sliderVal + "%";
  img.style.width = sliderVal + "%";
}

/* ====================== Бургер меню =================== */
/* ====================== Бургер меню =================== */

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burger").addEventListener("click", function() {
      document.querySelector(".header ").classList.toggle("open");
  });
  // document.getElementById("burger__Request").addEventListener("click", function() {
  //   document.querySelector(".header__Request ").classList.toggle("open");
  // });
  // document.getElementById("burger__calculation").addEventListener("click", function() {
  //   document.querySelector(".header__calculation ").classList.toggle("open");
  // });
  // document.getElementById("burger__service").addEventListener("click", function() {
  //   document.querySelector(".header__service ").classList.toggle("open");
  // });
})


// Закрыть меню при нажатии на Esc
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      // Действие при клике
      document.querySelector(".header").classList.remove("open");
      // document.querySelector(".header__Request").classList.remove("open");
      // document.querySelector(".header__calculation").classList.remove("open");
      // document.querySelector(".header__service").classList.remove("open");
  }
});

// Закрыть меню при клике вне его
// document.getElementById("menu").addEventListener('click', event => {
//   event._isClickWithInMenu = true;
// });
// document.getElementById("burger").addEventListener('click', event => {
//   event._isClickWithInMenu = true;
// });
// document.getElementById("header__Request").addEventListener('click', event => {
//   event._isClickWithInMenu = true;
// });
// document.getElementById("header__calculation").addEventListener('click', event => {
//   event._isClickWithInMenu = true;
// });
// document.getElementById("header__service").addEventListener('click', event => {
//   event._isClickWithInMenu = true;
// });
// document.body.addEventListener('click', event => {
//   if (event._isClickWithInMenu) return;
//   // Действие при клике
//   document.querySelector(".header").classList.remove("open");
//   document.querySelector(".header__Request").classList.remove("open");
//   document.querySelector(".header__calculation").classList.remove("open");
//   document.querySelector(".header__service").classList.remove("open");
// });

/* ====================== Плавная перемотка =================== */
/* ====================== Плавная перемотка =================== */

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}
