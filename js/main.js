"use strict";

$(() => {

  // ---flatpickr---
  const config = {
    mode: "multiple",
    minDate: "today",
  }
  flatpickr('.flatpickr', config);



  // ---モーダル---
  // モーダル発火
  let body = $("body");
  let modal = $(".modal");
  let modalBgc = $(".modal_bgc");
  let modalTrigger = $(".reserve_row_link");
  let modalTriggerIndex = $(".reserve_link");
  modalTrigger.click(function () {
    modal.addClass("in");
    modalBgc.addClass("in");
    body.addClass("modalin");
  })
  modalTriggerIndex.click(function () {
    modal.addClass("in");
    modalBgc.addClass("in");
    body.addClass("modalin");
  })

  // モーダル消す
  let modalEraseBox = $(".modal_eraseBox");
  modalEraseBox.click(function () {
    modal.removeClass("in");
    modalBgc.removeClass("in");
    body.removeClass("modalin");
  })
});



// ======= header =========
// スクロールしたらヘッダー固定
let header = $('#header');
let navLink = $('.header_nav_link');
let logoW = $('.header_row_logo_w');
let logoB = $('.header_row_logo_b');

$(window).scroll(function () {

  if ($(window).scrollTop() < 80) {
    header.addClass('color');
    navLink.addClass('fix');
    logoW.removeClass('fix');
    logoB.removeClass('fix');
  } else {
    header.removeClass('color');
    navLink.removeClass('fix');
    logoW.addClass('fix');
    logoB.addClass('fix');
  }
});

// ======= header hamburger =========
$('.hamburger').click(function () {
  $(this).toggleClass('active');

  if ($(this).hasClass('active')) {
    $('.header_row_nav').addClass('active');
    $(this).find('span').addClass('fix');
  } else {
    $('.header_row_nav').removeClass('active');
    $(this).find('span').removeClass('fix');
  }
});


// ①タブをクリックしたら発動
$('.tab li').click(function () {

  // ②クリックされたタブの順番を変数に格納
  var index = $('.tab li').index(this);

  // ③クリック済みタブのデザインを設定したcssのクラスを一旦削除
  $('.tab li').removeClass('active');

  // ④クリックされたタブにクリック済みデザインを適用する
  $(this).addClass('active');

  // ⑤コンテンツを一旦非表示にし、クリックされた順番のコンテンツのみを表示
  $('.area ul').removeClass('show').eq(index).addClass('show');

});





AOS.init({
  // Global settings:
  disable: false, //AOSを無効にする場合に設定。「 true」 で無効。「 'phone'」「'tablet'」「'mobile'」でそれぞれの時に無効。
  // startEvent: 'DOMContentLoaded', //AOSが初期化されるイベント名を設定。
  initClassName: 'aos-init', //初期化後に適用されるクラス名
  animatedClassName: 'aos-animate', //アニメーションに適用されるクラス
  useClassNames: false, //trueの場合、 スクロール時に「 data - aos」 のクラス名を追加します
  disableMutationObserver: false, //自動変異の検出を無効にします
  debounceDelay: 50, //ウィンドウのサイズ変更中に使用されるデバウンスの遅延
  throttleDelay: 99, //ページのスクロール中に使用されるスロットルの遅延

  // Effect settings:
  offset: 50, //元のトリガーポイントからのオフセット（ ピクセル単位）
  delay: 200, //アニメーションが始まるまでの遅延時間（0-3000の間で指定。50ms毎）
  duration: 1500, //アニメーション開始から終了までの時間（0-3000の間で指定。50ms毎）
  easing: 'ease-out', //AOSアニメーションのイージング
  once: true, //スクロール中にアニメーションを１回だけ実行するか
  mirror: false, //スクロール中にアニメーションするか
  anchorPlacement: 'center-bottom', //トリガーポイントの設定。要素のどの位置がウィンドウのどの位置にきたら実行させるか
  // （'要素位置-ウィンドウ位置'）位置は「 top」「 center」「 bottom」 でそれぞれ指定。
});