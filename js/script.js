var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true
});
var swiper = new Swiper(".swiperSecond", {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true
});
var swiper = new Swiper(".second-swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 30,
    }
  }
});
var swiper = new Swiper(".thirdSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 30,
    }
  },
  autoplay: {
    delay: 6500,
    disableOnInteraction: false,
  }
});
var swiper = new Swiper(".lastSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 2,
  spaceBetween: 10,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  },
});

let scrollTop = document.querySelector('.up');
let header = document.querySelector("header")

function toggleScrollTop() {
  if (scrollTop) {
    // console.log(window.scrollY);
    if (window.scrollY > 500) {
      scrollTop.classList.add('d-flex')
      scrollTop.classList.remove('d-none')
    } else {
      scrollTop.classList.remove('d-flex');
      scrollTop.classList.add('d-none');
    }
  }
}
if (scrollTop != null) {
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
window.addEventListener('load', toggleScrollTop);
document.addEventListener('scroll', toggleScrollTop);

// mobile header
$(function () {
  //hamburger Menu
  $('.menu').click(function () {
    $(this).toggleClass('open');
    if ($("#mobileMenu").length == 0) {
      console.log($("#mobileMenu").length);
      let div = document.createElement("div");
      div.id = "mobileMenu";
      $(div).toggleClass(" overflow-y-scroll w-75 h-100 bg-white shadow p-3  position-fixed top-0 start-0 z-3 mobile-style animate__animated animate__slideInRight animate__slower");
      $(div).append($(".right-menu").clone(true).removeClass("d-none"));
      $(".mobileMenu").append($(div));
    } else {
      console.log($("#mobileMenu").length);
      $("#mobileMenu").remove();
    }
  });


















});