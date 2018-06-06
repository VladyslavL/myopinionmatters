'use strict';

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
  if(element){
    window.onscroll = function() {
      if ( window.pageYOffset > offset) {
          element.classList.add(className);
          
      } else {
          element.classList.remove(className);
          
      }
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

addClassOnScroll('is-transparent', 'scrolled', 0)
toggleClass('sidenav-main-trigger', 'sidenav-main', 'is-active');
toggleClass('sidenav-main-trigger-close', 'sidenav-main', 'is-active');

MicroModal.init();

var Shuffle = window.Shuffle;

// var rewardsGrid = function (element) {
//   this.types = Array.from(document.querySelectorAll('.filterBtn'));

//   this.shuffle = new Shuffle(element, {
//     easing: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)', // easeOutQuart
//     sizer: '.sizer',
//   });

//   this.filters = {
//     types: []
//   };

//   this._bindEventListeners();
// };

// /**
//  * Bind event listeners for when the filters change.
//  */
// rewardsGrid.prototype._bindEventListeners = function () {
//   this._onTypeChange = this._handleTypeChange.bind(this);

//   this.types.forEach(function (button) {
//     button.addEventListener('click', this._onTypeChange);
//   }, this);
// };

// /**
//  * Get the values of each `active` button.
//  * @return {Array.<string>}
//  */
// rewardsGrid.prototype._getCurrentTypeFilters = function () {
//   return this.types.filter(function (button) {
//     return button.classList.contains('active');
//   }).map(function (button) {
//     return button.getAttribute('data-group');
//   });
// };

// /**
//  * A type button was clicked. Update filters and display.
//  * @param {Event} evt Click event object.
//  */
// rewardsGrid.prototype._handleTypeChange = function (evt) {
//   var button = evt.currentTarget;

//   // Treat these buttons like radio buttons where only 1 can be selected.
//   if (button.classList.contains('active')) {
//     button.classList.remove('active');
//   } 
//   // else if(button.classList.contains('clear')){

//   // }
//    else {
//     this.types.forEach(function (btn) {
//       btn.classList.remove('active');
//     });

//     button.classList.add('active');
//   }

//   this.filters.types = this._getCurrentTypeFilters();
//   this.filter();
// };

// /**
//  * Filter shuffle based on the current state of filters.
//  */
// rewardsGrid.prototype.filter = function () {
//   if (this.hasActiveFilters()) {
//     this.shuffle.filter(this.itemPassesFilters.bind(this));
//   } else {
//     this.shuffle.filter(Shuffle.ALL_ITEMS);
//   }
// };

// /**
//  * If any of the arrays in the `filters` property have a length of more than zero,
//  * that means there is an active filter.
//  * @return {boolean}
//  */
// rewardsGrid.prototype.hasActiveFilters = function () {
//   return Object.keys(this.filters).some(function (key) {
//     return this.filters[key].length > 0;
//   }, this);
// };

// /**
//  * Determine whether an element passes the current filters.
//  * @param {Element} element Element to test.
//  * @return {boolean} Whether it satisfies all current filters.
//  */
// rewardsGrid.prototype.itemPassesFilters = function (element) {
//   var types = this.filters.types;
//   var type = element.getAttribute('data-groups');

//   // If there are active type filters and this type is not in that array.
//   if (types.length > 0 && !types.includes(type)) {
//     return false;
//   }

//   return true;
// };

// document.addEventListener('DOMContentLoaded', function () {
//   window.grid = new rewardsGrid(document.querySelector('.my-shuffle-container'));
// });

(function($) {

	var TS_shuffle = [];

	function init() {

		$('.initiate-shuffle-js').each(function(i) {
			var elm = $(this).data('shuffle-id', i);
			TS_shuffle[i] = new Shuffle( elm.find('.my-shuffle-container').get(0), {
				itemSelector: '.grid-elem',
				sizer: '.sizer'
			});
		});

	}

	$(document).on('click', '.filter-options button', function(e) {
		e.preventDefault();
		var li = $(this),
			groups, i;

		if( !li.hasClass('active') ) {
			li.addClass('active').siblings().removeClass('active');
			groups = li.data('group');

			i = li.closest('.initiate-shuffle-js').data('shuffle-id');

			if( typeof TS_shuffle[i] !== 'undefined' ) {
				TS_shuffle[i].filter(function(element) {
					if( groups === '*' ) {
						return true;
					} else {
						return $(element).hasClass(groups);
					}
				});
			}
		}

		return false;
	});

	$(document).ready(init);

})(jQuery);


if(document.getElementsByClassName('progress-wrapper')[0]){
  //Intialiazation 
  var radialObj = radialIndicator('.progress-wrapper', {
    minValue: 0,
    maxValue: 2000,
    initValue : 0,
    barWidth : 2,
    barColor : '#ff4843',
    frameTime: 2
  }); 

  //Using Instance
  radialObj.animate(radialObj.indOption.maxValue / 2);
}