$(document).ready(function() {
	$('span').on('click', function() {
		// alert('clicked');
	});
// OR
	// $('span').click(function() {
	// 	alert('clicked');
	// });


	$('#to-do').on('submit', function(e) {
		e.preventDefault();
		var $todo = $('#to-do input').val();
		console.log($todo);
		$('#to-do input').val('');

		$('ul').append('<li>' + $todo + '<span> -X</span></li>');
 });

  // $('ul').on('click', 'li span', function() {
  //   console.log('Item clicked!');
  //   $(this).parent().addClass("strike");
  // });

  $('ul').on('click', 'li span', function() {
  console.log('Item clicked!');
  $(this).parent().toggleClass("strike");
// $(this).parent().toggleClass("strike");
  });

});