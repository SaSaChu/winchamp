/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

$(function () {
  if ($(window).width () < 960) {
    $('header > div > div').click (function () {
      if (!$(this).hasClass ('s')) {

      }
      $(this).find ('a').click (function () {
        $(this).addClass ('a').siblings ().removeClass ('a');
      });

      $(this).toggleClass ('s');
      return false;
    });
  }
  $('body > *:nth-child(2)').each (function () {
    var $that = $(this);
    setTimeout (function () {
      $(this).height ($(this).find ('img').height ());
    }.bind ($(this)), 500);

    $(this).find ('a').click (function () {
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
  });
});