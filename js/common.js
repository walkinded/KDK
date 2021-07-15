const menuBtn = document.querySelector(".menu-btn");

let menuOpen = false;
menuBtn.addEventListener("click", () => {
  document.getElementById("myDropdown").classList.toggle("show");
  if(!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true; 
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }

  window.onclick = function(event) {
    if (!event.target.matches('.menu-btn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
          menuBtn.classList.remove("open");
          menuOpen = false;
        }
      }
    }
  }
});




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

// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// // Закройте выпадающее меню, если пользователь щелкает за его пределами
// window.onclick = function(event) {
  
  // if (!event.target.matches('.menu-btn')) {
  //   var dropdowns = document.getElementsByClassName("dropdown-content");
  //   var i;
  //   for (i = 0; i < dropdowns.length; i++) {
  //     var openDropdown = dropdowns[i];
  //     if (openDropdown.classList.contains('show')) {
  //       openDropdown.classList.remove('show');
  //     }
  //   }
  // }
// }