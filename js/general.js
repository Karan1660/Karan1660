$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    $('#backTop').addClass('show');
  } else {
    $('#backTop').removeClass('show');
  }
});

$('#backTop').on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


$('.navbar-nav a').on('click', function(){
    $('.navbar-nav a').removeClass('active');
    $(this).addClass('active');

    if($(window).width() < 992){
        $('.navbar-collapse').removeClass('show');
    }
});