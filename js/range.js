const
	range = document.getElementById('range'),
	rangeV = document.getElementById('rangeV'),
	setValue = () => {
		const
			newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) ),
			newPosition = 10 - (newValue * 0.2);
		rangeV.innerHTML = `<span>${range.value + " м2"}</span>`;
		rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
	};
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener('input', setValue);


jQuery(($) => {
  $('.select').on('click', '.select__head', function () {
      if ($(this).hasClass('open')) {
          $(this).removeClass('open');
          $(this).next().fadeOut();
      } else {
          $('.select__head').removeClass('open');
          $('.select__list').fadeOut();
          $(this).addClass('open');
          $(this).next().fadeIn();
      }
  });


  $('.select').on('click', '.select__item', function () {
      $('.select__head').removeClass('open');
      $(this).parent().fadeOut();
      $(this).parent().prev().text($(this).text());
      $(this).parent().prev().prev().val($(this).text());
  });

  $(document).click(function (e) {
      if (!$(e.target).closest('.select').length) {
          $('.select__head').removeClass('open');
          $('.select__list').fadeOut();
      }
  });
});

$(document).ready(function(){
  $(".house-proj__wrap").slice(0, 12).show();
  $("#loadMore").on("click", function(e){
    e.preventDefault();
    $(".house-proj__wrap:hidden").slice(0, 4).slideDown();
    if($(".house-proj__wrap:hidden").length == 0) {
      $("#loadMore").text("Показать еще").addClass("noContent");
    }
  });
  
})