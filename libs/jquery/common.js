$(document).ready(function() {

/*
$('.gallery a').hover( function(){

	TweenMax.to(".gallery p", 1, {left: 100px, scale: 2, ease: Bounce}, 1);

});

*/








/*кнопка формы*/
$(".letter").on('click', function (event){
  event.preventDefault();
  $(".letter").toggleClass("animated");
  /*$(".letter").toggleClass("tada");*/
  $(".main-form").toggleClass('show');
});

$(document).on('mouseup', function(event) { 
var container = ".main-form"; 
if ($(event.target).closest(container).length || $(event.target).hasClass(container)) return; 
$(container).removeClass('show'); 
event.stopPropagation(); 
});




  }); 