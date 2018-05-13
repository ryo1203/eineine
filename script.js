$(function() {

    $('.nav-button').hover(
        function() {
            $(this).css('background-color', 'rgba(209, 209, 209,0.9)');
        },
        function() {
            $(this).css('background-color', 'rgba(209, 209, 209,0.0)');
        });


    var startPos = 0;
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var scrollPos = $(window).scrollTop();
    var mainHeight = $('.main-box-1').height();
    var mainWidth = $('.main-box-1').width();
    var scrollHeight = $('#scroll').height();
    var einLength = $('.ein').text().length;
    var ricekomeLength = $('.ricekome').text().length;
    var ricePictureHeight = $('.ein-katuyou-body > center >  img').height();
    var mainHeight2 = $('.main-box-2').height();
    var scroll3Height = $('.main-box-3').height();
    var scroll2Pos = $('#scroll2').offset();
    var scroll3Pos = scroll2Pos.top + mainHeight2 / 2;
    var slidebarFlag = true;
    var slidebarWidth = [
        $('.slidebar:nth-child(1)').width(),
        $('.slidebar:nth-child(2)').width(),
        $('.slidebar:nth-child(3)').width(),
        $('.slidebar:nth-child(4)').width()
      ];
      var slideLine = windowWidth - slidebarWidth[0] - slidebarWidth[3];
      var slideFontSize = slideLine / 6;

    if (scrollPos >= windowHeight / 8) {
        $('.center-box').hide();
    }

    $(window).scroll(function() {
        var scroll = $(this).scrollTop();
        if (scroll >= windowHeight / 10) {
            $('.center-box').fadeOut();
        } else {
            $('.center-box').fadeIn();
        }
    });

    $('.ricekome').hide();
    $('.slidebar').css('height', (scroll3Height / 5) - 15);

    var slidebarHeight = $('.slidebar').height();


    if (slideFontSize >= slidebarHeight / 2) {
      slideFontSize = slideFontSize / 2;
      $('.lefttext , .righttext').css('font-size', slideFontSize);
    }

    $('.lefttext , .righttext').css({
      'font-size' : slideFontSize,
      'top' : (slidebarHeight - (slideFontSize + 10)) / 2
  });

    $(window).scroll(function() {
        var scroll = $(this).scrollTop();
        if (scroll >= windowHeight / 3) {
            $('.ricekome').slideDown();
        } else {
            $('.ricekome').slideUp();
        }
    });

    if (mainHeight <= windowHeight / 3) {
        $('.ricekome').css('margin-top', mainHeight / 2).css('margin-bottom', mainHeight / 2);
    }

    if (mainHeight >= scrollHeight) {
        var sideLength = Math.floor((mainWidth - 50) / 20);
        var attrLength = Math.floor(ricekomeLength / sideLength);
        var fontSize = Math.floor(mainHeight / (attrLength * 2));
        $('.ricekome').css('font-size', fontSize);
        $('#scroll').css('height', (mainHeight / 3) * 2);
    }

    if (ricePictureHeight >= mainHeight2 / 3) {
        $('.img').css('height', mainHeight2 / 3).css('width', (mainHeight2 / 3) * 3 / 2);
    }

    $(window).scroll(function() {
        var scroll = $(this).scrollTop();
        if (scroll >= scroll3Pos && slidebarFlag) {
            $('.leftside > .slidebar').each(function(i) {
                $(this).delay(300 * i).animate({
                    width: 'toggle'
                }, 'slow');
            });
            $('.rightside > .slidebar').each(function(i) {
                $(this).delay(300 * i).animate({
                    width: 'toggle'
                }, 'slow');
            });
            slidebarFlag = false;
        }
    });


});
