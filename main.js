// Params
let mainSliderSelector = '.main-slider',
    navSliderSelector = '.nav-slider';

// Main Slider
let mainSliderOptions = {
  loop: false,
  speed:2000,
  autoplay:false,
  direction: 'vertical',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  on: {
    init: function(){
      this.autoplay.stop();
    },
    imagesReady: function(){
      this.el.classList.remove('loading');
    }
  }
};
let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);

// Navigation Slider
let navSliderOptions = {
      loop: false,
      speed:2000,
      spaceBetween: 5,
      slidesPerView: 5,
      centeredSlides : true,
      slideToClickedSlide: true,
      direction: 'vertical',
      on: {
        imagesReady: function(){
          this.el.classList.remove('loading');
        },
        click: function(){
          mainSlider.autoplay.stop();
        }
      }
    };
let navSlider = new Swiper(navSliderSelector, navSliderOptions);


// Matching sliders
mainSlider.controller.control = navSlider;
navSlider.controller.control = mainSlider;