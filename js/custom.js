$(function(){
     // countup
     $('.counter').countUp();
    
// Navbar scrolalar add class
$(window).scroll(function(){
  if ($(this).scrollTop() > 950) {
     $('.header').addClass('newclass');
  } else {
     $('.header').removeClass('newclass');
  }
});

// banner
$('.client_wrap').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll:1,
  arrows:false,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 700,
  dots:false,
  prevArrow:'<i class="fas fa-chevron-left prev"></i>', 
  nextArrow:'<i class="fas fa-chevron-right next"></i>',
  responsive: [
    {
      breakpoint: 968,
      settings: {
        arrows: false,
        centerPadding: '0px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        centerPadding: '0px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '0px',
        slidesToShow:1
      }
    }
  ]
});


   // Back to Top 
   var btn = $('.backtotop');

   $(window).scroll(function() {
     if ($(window).scrollTop() > 300) {
       btn.addClass('show');
     } else {
       btn.removeClass('show');
     }
   });
   btn.on('click', function(e) {
     e.preventDefault();
     $('html, body').animate({scrollTop:0}, '300');
   });
 
  
// navbar off can list
var list = $('.js-dropdown-list');
var link = $('.js-link');
link.click(function(e) {
  e.preventDefault();
  list.slideToggle(200);
}); 

// AOS
AOS.init();



});