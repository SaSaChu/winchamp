/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

$(function () {
  window.mainLoading = $('#loading');
  window.showLoading = function (callback) {
    this.mainLoading.fadeIn (function () { $(this).removeClass ('hide'); if (callback) callback (); });
  };

  window.hideLoading = function (callback) {
    clearTimeout (window.showLoadingTimer); this.mainLoading.addClass ('hide').fadeOut (function () { $(this).hide (function () { if (callback) callback (); }); });
  };

  window.closeLoading = function (callback) {
    window.hideLoading (function  () { if (callback) callback (); window.mainLoading.remove (); });
  };


  if ($(window).width () < 960) {
    $('header > div > div').click (function () {
      if (!$(this).hasClass ('s')) {
      }
      $(this).find ('a').click (function () {
        $(this).addClass ('a').siblings ().removeClass ('a');
        window.location.assign ($(this).attr ('href'));
      });

      $(this).toggleClass ('s');
      return false;
    });
  }
  $('body > *:nth-child(2)').each (function () {
    var $that = $(this);
    $(this).height ($(window).height () * 0.65);
    setTimeout (function () {
      $(this).height ($(this).find ('img').height ());
    }.bind ($(this)), 500);

    var $a = $(this).find ('a').click (function () {
      if (!$(this).is (':last-child')) {
        var $last = $that.find ('img').last ().clone ();
        $that.find ('img').last ().remove ();
        $last.insertBefore ($that.find ('img').first ());
      } else {
        var $first = $that.find ('img').first ().clone ();
        $that.find ('img').first ().remove ();
        $first.insertAfter ($that.find ('img').last ());
      }
    });

    setInterval (function () { $a.first ().click (); }, 6000);
  });

  setTimeout (function () {
    window.hideLoading ();
  }, 1000);

});