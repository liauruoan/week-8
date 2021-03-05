// GOTOP

$(document).ready(function () {

  $('.top').click(function(event) { 
    event.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 1000);
    
  });
});


// swiper

$(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    speed: 2000,
    autoplay: {
      delay: 2000,
    },
    loop: true,
  });
});
