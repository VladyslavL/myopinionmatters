var giftSlider = new Swiper ('.gift-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 1000,
  },

  // If we need pagination
  pagination: {
    el: '.gift-slider-paggy',
  }
})
var testimonialSlider = new Swiper ('.testimonial-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 2000,
  },

  // If we need pagination
  pagination: {
    el: '.testimonial-slider .swiper-pagination',
    clickable: true
  }
})

function addClassOnScroll(elem, className, offset){
  var element = document.getElementsByClassName(elem)[0];
  window.onscroll = function() {
    if ( window.pageYOffset > offset) {
        element.classList.add(className);
        
    } else {
        element.classList.remove(className);
        
    }
  }
}

function toggleClass(triger, elem, className){
  var elem = document.getElementsByClassName(elem)[0];
  var triger = document.getElementsByClassName(triger)[0];
  if(elem && triger){
    triger.addEventListener('click', function(event){
      elem.classList.toggle(className);
    })
  }
}

function showHidePassword() {
  var btn = document.getElementsByClassName('togglePassword');

  for (var i=0; i < btn.length; i++) {
    btn.item(i).addEventListener('click', function(event){
      var pswrdInput = this.parentNode.getElementsByClassName("password-input")[0];
  
      if (pswrdInput.type === "password") {
        pswrdInput.type = "text";
      } else {
          pswrdInput.type = "password";
      }
    })
  }
}

showHidePassword();

addClassOnScroll('nav-main', 'scrolled', 0)
toggleClass('sidenav-main-trigger', 'sidenav-main', 'is-active');
toggleClass('sidenav-main-trigger-close', 'sidenav-main', 'is-active');

MicroModal.init();