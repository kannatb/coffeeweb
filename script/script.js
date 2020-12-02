'use strict';
 {

   /*ハンバーガーアイコン*/
   document.getElementById('menu-btn').onclick = function (event) {
     event.preventDefault();
     event.currentTarget.classList.toggle('change');
     document.getElementById('gnavi').classList.toggle('open');
   }

$(function() {
  var topBtn = $('.top__link');
  //ボタンを非表示にする
  topBtn.hide();
  //スクロールしてページトップから100に達したらボタンを表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      //フェードインで表示
      topBtn.fadeIn();
    } else {
      //フェードアウトで非表示
      topBtn.fadeOut();
    }
  });
  //スクロールしてトップへ戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});
   
   jQuery(function($) {
     $('.bg-slider').bgSwitcher({
       images: ['img/s1.png','img/s2.png','img/s3.png'], // 切替背景画像を指定
       interval: 5000, // 背景画像を切り替える間隔を指定 3000=3秒
       loop: true, // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
       shuffle: true, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
       effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
       duration: 2000, // エフェクトの時間を指定します。
       easing: "linear" // エフェクトのイージングをlinear,swingから指定
     });
   });
   
   /*sweiper*/
   var swiper = new Swiper('.swiper-container', {
     slidesPerView: 1,
     breakpoints: {
       768: {
         slidesPerView: 3
            }
     },
     spaceBetween: 30,
     pagination: {
       el: '.swiper-pagination',
       clickable: true,
     },
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
   });
   
 }