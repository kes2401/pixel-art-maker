$(document).ready(function() {

	// makeGrid function to create pixel art grid
	function makeGrid() {
		let row = $('#input_height').val();
		let col = $('#input_width').val();

		$('#pixel_canvas').append(function() {
			let newHtml = '';
			for(let i = 0; i < row; i++){
				newHtml += '<tr>';
					for(let j = 0; j < col; j++){
						newHtml += '<td></td>';		
					}
				newHtml += '</tr>';
			}
			return newHtml;
		});
	};

	// button event to create new grid
	$('#submit-btn').on('click', function(e) {
		e.preventDefault();
		$('#pixel_canvas').empty();
		makeGrid();
	});

	// click event to add colour to grid elements
	$('#pixel_canvas').on('click', 'td', function() {
		let color = $('input#color_picker').val();
		$(this).css({ 'background-color': color });
	});	

	// click event to remove colour from grid element
	$('#pixel_canvas').on('contextmenu', 'td', function(e) {
		e.preventDefault();
		$(this).removeAttr('style');
	});
});