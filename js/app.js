// Create drop down menu
var $select = $('<select></select>');

// Add drop down menu in the main navigation menu
$(".main-nav").append($select);

// Select each ancher item on the main navigation menu 
$(".main-nav a").each( function() {
	$archer = $(this);

	// Create option for the drop down menu
	var $option = $('<option></option>');

	// If user in this page select this page
	if ( $archer.parent().hasClass('here') ) {
		$option.prop('selected', 'true');
	}

	// Add value (link) to the option
	$option.val( $archer.attr('href') );

	// Add text to the option
	$option.text( $archer.text() )

	// Add option to the drop down menu
	$select.append($option);
});

// If click the page name
$select.change( function() {
	
	// Redirect another page
	window.location = $select.val();
});

