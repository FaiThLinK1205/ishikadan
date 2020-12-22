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
  let modalTrigger = $(".reserve_link");
  modalTrigger.click(function(){
    modal.addClass("in");
    modalBgc.addClass("in");
    body.addClass("modalin");
  })

  // モーダル消す
  let modal = $(".modal");
  let modalBgc = $(".modal_bgc");
  let modalEraseBox = $(".modal_eraseBox");
  modalEraseBox.click(function(){
    modal.removeClass("in");
    modalBgc.removeClass("in");
    body.removeClass("modalin");
  })

});

// ======= header =========
// スクロールしたらヘッダー固定
let header = $('.header');
let navLink = $('.header_nav_link');
let logoW = $('.header_logo-w');
let logoB = $('.header_logo-b');

$(window).scroll(function () {

    if ($(window).scrollTop() > 80) {
    header.addClass('fix');
    navLink.addClass('fix');
    logoW.addClass('fix');
    logoB.addClass('fix');
    } else {
    header.removeClass('fix');
    navLink.removeClass('fix');
    logoW.removeClass('fix');
    logoB.removeClass('fix');
    }
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
  offset: 100, //元のトリガーポイントからのオフセット（ ピクセル単位）
  delay: 0,  //アニメーションが始まるまでの遅延時間（0-3000の間で指定。50ms毎）
  duration: 1500, //アニメーション開始から終了までの時間（0-3000の間で指定。50ms毎）
  easing: 'ease-out', //AOSアニメーションのイージング
  once: false, //スクロール中にアニメーションを１回だけ実行するか
  mirror: false, //スクロール中にアニメーションするか
  anchorPlacement: 'center-bottom', //トリガーポイントの設定。要素のどの位置がウィンドウのどの位置にきたら実行させるか
  // （'要素位置-ウィンドウ位置'）位置は「 top」「 center」「 bottom」 でそれぞれ指定。
});