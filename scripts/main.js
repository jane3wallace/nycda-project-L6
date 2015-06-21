// L6 Week Four Lecture 1 Homework, 4 jQuery events
$(document).ready(function() {
		
	$("#oneClick").click(function(e) {
		e.preventDefault();
		console.log("You clicked once!");
	});

	$("#twoClicks").dblclick(function(ev) {
		ev.preventDefault();
		console.log("You clicked twice!");
	});

	$(window).resize(function() {
		console.log("You resized the window!");
	});

	$("button.mouse").mouseover(function() {
		console.log("You hovered the mouse over the button!")
	});

	$("span.mouse").mouseover(function() {
		console.log("You hovered the mouse over some text!")
	});

});