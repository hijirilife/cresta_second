
//sticky header

$(function() {
  var $win = $(window),
      $fv = $('.fv'),
      $header = $('.header')
      fvHeight = $fv.outerHeight(),
      fixedClass = '.fixed';

$win.on('load scroll',function(){
  var value = $(this).scrollTop();
    if($win.width()>768)
      if ( value > fvHeight) {
        $header.addClass('fixed');
      } else {
        $header.removeClass('fixed');
      }
  });
});


  //ファーストビューのslider
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    fade: true,
  });

  //ハンバーガーメニューの開閉
  $('.burger-btn').on('click',function(){
    $('.header-nav').fadeToggle(300);
    $('.burger-btn').toggleClass('close');
    $('body').toggleClass('noscroll');
  });
