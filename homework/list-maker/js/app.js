$(document).ready(function () {
// Users should be able to:
// 1. Enter an item into #item
// 2. Click on #clickme
// 3. New item is appended as a <li> element to the #list
// 4. After item is added, the text inside #item should clear

// Requirements: Create a separate function, called appendItem, that accepts one argument, item, that is called when #clickme is clicked and appends the <li> to #list


$('#clickme').click(function(){
	var output = $('#item').val();
	
	if ($('#item').val().length > 0){
		alert('The value is empty');
	} else {
		appendItem(output);
};

function appendItem(item){
		$('#list').append('<li>' + item + '</li>');
		$('#item').val('');
		$('#item').focus();
		$('li').click(function(){
			$(this).remove();
		})
};



// function appendItem(item){
// 	var newItem = '<li>' + item + '</li>'
// 		$('#list').append(newItem);
// 		$('#item').val('').focus();
// 	};

// 	$('#clickme').click(function(){
// 		var output = $('#item').val();
// 		appendItem(output);
// });
// 	if ($('#item').val().length > 0){
// 		alert('The value is empty');
// 	} else {
// 		alert('The value is not empty');
// 	}

// 	$(newItem).remove();
	
// CAROLYN, I TRIED BUT I KNOW THIS IS WRONG :(

// Bonus: Focus on #item after the item is added (hint: look up "jquery focus")
// Itermediate Bonus: If the value of #item is blank, do not append the <li> and alert user (hint: use an if/else statement)
// Legendary Bonus: Remove individual <li> elements when they are clicked (hint: use $(this) and .remove())



	// 1. Attach a .click() event to #clickme; attach an anonymous function to the .click()
	// 1A. This anonymous function should create a variable, newItem equal to the value of #item
	// 1B. This anonymous function should call a separate function, appendItem, and pass it the variable newItem
	// 1C. This anonymous function should then clear the text inside of #item

	// 2. Write the appendItem function here
});
