$(document).ready(function () {

  $('.top').click(function(event) { 
    event.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 1000);
  });
});

// 頁面往下滾動後 TOP 才會出現
$(window).scroll(function() {
  if ( $(this).scrollTop() > 400){
      $('.top').fadeIn();
  } else {
      $('.top').stop().fadeOut();
  }
});