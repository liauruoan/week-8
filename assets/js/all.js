"use strict";

$(document).ready(function () {
  $('.top').click(function (event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 1000);
  });
});
"use strict";

var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  speed: 2000,
  autoplay: {
    delay: 2000
  },
  loop: true
});
//# sourceMappingURL=all.js.map
