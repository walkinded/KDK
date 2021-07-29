$('.navigation').addClass('original').clone().insertAfter('header').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);


function stickIt() {

  var orgElementPos = $('.original').offset();
  orgElementTop = orgElementPos.top;               

  if ($(window).scrollTop() >= (orgElementTop)) {
    // scrolled past the original position; now only show the cloned, sticky element.

    // Cloned element should always have same left position and width as original element.     
    orgElement = $('.original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;  
    widthOrgElement = orgElement.css('width');
    $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
    $('.original').css('visibility','hidden');
  } else {
    // not scrolled past the menu; only show the original menu.
    $('.cloned').hide();
    $('.original').css('visibility','visible');
  }
}



$('.slider-small').slick({
  arrows: false,
  dots: false,
  slidesToShow: 3,
  speed: 1000,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  rows: 1,
  asNavFor: ".slider-big",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        speed: 1000,
        arrows: false,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2,
        speed: 1000,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        slidesToShow: 3,
        speed: 1000,
      },
    }
  ]
});
$('.slider-big').slick({
  arrows: true,
  dots: true,
  fade: true,
  asNavFor: ".slider-small",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      }
    }
  ]
});


$('.our-works-slider-small').slick({
  arrows: false,
  dots: false,
  slidesToShow: 5,
  speed: 1000,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  rows: 1,
  asNavFor: ".our-works-slider-big",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        speed: 1000,
        arrows: false,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2,
        speed: 1000,
        centerMode: true,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        slidesToShow: 3,
        speed: 1000,
      },
    },
    {
      breakpoint: 1441,
      settings: {
        arrows: false,
        slidesToShow: 3,
        speed: 1000,
      },
    }
  ]
});
$('.our-works-slider-big').slick({
  arrows: true,
  dots: true,
  fade: true,
  asNavFor: ".our-works-slider-small",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      }
    }
  ]
});

$('.reviews__slider').slick({
  arrows: true,
  dots: true,
  slidesToShow: 3,
  speed: 1000,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  rows: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        speed: 1000,
        arrows: false,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2,
        speed: 1000,
      },
    },
    {
      breakpoint: 1366,
      settings: {
        arrows: true,
        slidesToShow: 3,
        speed: 1000,
      },
    }
  ]
});


$(document).ready(function($) {
  $('.tab_content').hide();
  $('.tab_content:first').show();
  $('.tabs li:first').addClass('active');
  $('.tabs li').click(function(event) {
    $('.tabs li').removeClass('active');
    $(this).addClass('active');
    $('.tab_content').hide();

    var selectTab = $(this).find('a').attr("href");

    $(selectTab).fadeIn();
  });
});
