'use strict';

{
  const humbergerMenu = document.querySelector('.humberger-menu');

  const navi = document.getElementById('humberger-navigation');

  const humbergerMenuSections = document.querySelectorAll('.humberger-menu-section');

  humbergerMenu.addEventListener('click', function () {
    humbergerMenu.classList.toggle('active');
    navi.classList.toggle('active');
  });

  humbergerMenuSections.forEach((humbergerMenuSection) => {
    humbergerMenuSection.addEventListener('click', function () {
      humbergerMenu.classList.remove('active');
      navi.classList.remove('active');
    });
  });
}



{
  var slideConts = document.querySelectorAll('.slideConts'); // スライドで表示させる要素の取得
  var slideContsRect = []; // 要素の位置を入れるための配列
  var slideContsTop = []; // 要素の位置を入れるための配列
  var windowY = window.pageYOffset; // ウィンドウのスクロール位置を取得
  var windowH = window.innerHeight; // ウィンドウの高さを取得
  var remainder = 0; // ちょっとはみ出させる部分
  // 要素の位置を取得
  for (var i = 0; i < slideConts.length; i++) {
    slideContsRect.push(slideConts[i].getBoundingClientRect());
  }
  for (var i = 0; i < slideContsRect.length; i++) {
    slideContsTop.push(slideContsRect[i].top + windowY);
  }
  // ウィンドウがリサイズされたら、ウィンドウの高さを再取得
  window.addEventListener('resize', function () {
    windowH = window.innerHeight;
  });
  // スクロールされたら
  window.addEventListener('scroll', function () {
    // スクロール位置を取得
    windowY = window.pageYOffset;
    
    for (var i = 0; i < slideConts.length; i++) {
      // 要素が画面の下端にかかったら
      if(windowY > slideContsTop[i] - windowH + remainder) {
        // .showを付与
        slideConts[i].classList.add('show');
      }
      // else {
      //   // 逆に.showを削除
      //   slideConts[i].classList.remove('show');
      // }
    }
  });
}