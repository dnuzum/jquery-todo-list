$(document).ready(function() {
	// $('span').on('click', function() {
		// alert('clicked');
	// });
// OR
	// $('span').click(function() {
	// 	alert('clicked');
	// });
	$('#to-do').on('submit', function(e) {
		e.preventDefault();
		var $todo = $('#to-do input').val();
		// console.log($todo);
		$('#to-do input').val('');

		$('ul').append('<li>' + $todo + '<span> -X</span></li>');	
 	});
	$('ul').sortable();
  // $('ul').on('click', 'li span', function() {
  //   console.log('Item clicked!');
  //   $(this).parent().addClass("strike");
  // });
	  $('ul').css('cursor', 'pointer');
	  $('ul').on('click', 'li', function() {
	  // console.log('li clicked!');
	  $(this).toggleClass("strike");
	});
	  $('ul').on('click', 'li span', function() {
	  // console.log('span clicked!');
	  $(this).parent().remove();
  });
});
