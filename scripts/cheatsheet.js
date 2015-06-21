// L6 Week Four Lecture 1 Homework, JQUERY CHEATSHEET

// **** JQUERY ***

// LIBRARY SOURCES
/*
Add to the head of your HTML doc.

Google CDN https://developers.google.com/speed/libraries/
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

Microsoft CDN http://www.asp.net/ajax/cdn
<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.11.3.min.js"></script>
*/

// SYNTAX
/*
$("<element name, class, id, or XPath>");
$(selector).action();
*/
jQuery();
// or
$();

// DOCUMENT READY EVENT
/*
Wrapping all your jQuery code in an anonymous function ensures 
that your code doesn't run until your document fires a ready event.
By encapsulating all of our jQuery code to only run when the
document is ready, the elements you're selecting will definitely be
on the page when you access them.

SYNTAX */
$(document).ready(
    function(){
        // all the jQuery code that you want to run once the
        // document ready event has fired
});

// SHOWING & HIDING
// $("body").hide();
// $("body").show();

// FADING IN & FADING OUT
// $("#section-one").fadeOut();
// $("#section-one").fadeIn();

// FADE OVER TIME
// $("#section-one").fadeOut(1000);
//Fade out over 1 second
// $("#section-one").fadeIn(4000);
//Fade in over 4 seconds

// HIDE BY SLIDING UP & DOWN
// $("#section-one").slideUp(1000);
//Fade out over 1 second
// $("#section-one").slideDown(4000);
//Fade in over 4 seconds

// ANIMATING CSS
/*
$(".my-element").animate( {
  opacity: 0.25,
  width: "70%"
} , 2000 );
*/

// CLICK EVENT
// executes code when click event is fired 
/*
$("ul li a").click(
  function(){
    alert('clicked!');
});
*/

// CALLBACK
/*
A callback is an anonymous function supplied to another
function to be run when that function is done running.
*/ /*
var animateMenu = function(){
  $(".menu").animate( {opacity: .5} )
};
$(".menu").show(animateMenu);
//or simplified syntax
$(".menu").show( function(){
  $(".menu").animate( {opacity: .5} )
});
*/


// **** JAVASCRIPT ***

// COMMENTS
/*
Comments are not executed and are used to make your code easier
to read. Comments are also useful in debugging.

SYNTAX
// Single line comment
/* Multi-line
comment */


// DATA TYPES
/* 
STRING - Strings are text. They are denoted by surrounding
text with either single or double quotes.

SYNTAX 
"string of text" or 'string of text'
*/
//console.log("This is a string of text.");

/*
NUMBER - Any number can be used and JS also includes the special
"Not-a-Number" (NaN) values, positive infinity and negative 
infinity. All numbers in JS are floats. Math is pre-loaded in JS. 

SYNTAX
4 or 67.9 or 1500
*/
//console.log(4 + 2);

/*
BOOLEAN - Type consisting of the primitive values true and false.
Used in logic and comparisons.

SYNTAX
true or false
*/
//console.log(6 === 7);

/*
NULL - Type whose sole value is the null value (represents
the intentional absence of any object value).

SYNTAX
null
*/
//var nada = null;
//console.log(nada);

/*
UNDEFINED - Type whose sole value is the undefined value (used
when a variable has not been assigned a value).

SYNTAX
undefined
*/
//var openEnded;
//console.log(openEnded);

/* OBJECT - A collection of properties. Each property is
either a named data property, a named accessor property
or an internal property.

SYNTAX
{
	property: value,
}
*/
//var whatsThis = {
//	property: "value",
//};
//console.log(whatsThis);


//ARRAYS
/*
A list of elements that are indexed starting with 0.

SYNTAX
[89, "trombones", {me: "too"}, true]
*/
//var arrayName = [0, 1, 2, 3];
//console.log(arrayName);


// VARIABLES
/* 
Assign a value to any name. The last assignment
defined prevails.

SYNTAX 
var name = value;
*/
//var code = "cool cool cool";
//console.log(code);
//var code = "sick";
//console.log(code);


//LOGIC
/*
Using statements or operators to evaluate the boolean
value of an expression and execute or not execute a
block of code based on that boolean value.

/*
OPERATORS - Comparison and Logical Operators are used to 
create logical statements.

SYNTAX
===  equal value and equal type comparison
!==  not equal value and equal type comparison
>    greater than comparison
<    less than comparison
>=   greater than or equal to comparison
<=   less than or equal to comparison
&&   and
||   or
!    not
*/
//console.log(9 === 5);
//console.log(true && true)

/*
STATEMENTS - Using IF, ELSE, or ELSE IF to run a block of
code based on whether the statement evaluates to true or false.

SYNTAX
if (condition1) {
    block of code to be executed if condition1 is true
} else if (condition2) {
    block of code to be executed if condition1 is false
    and condition2 is true
} else {
    block of code to be executed if condition1 is false
    and condition2 is false
}
*/ /*
var grade = 70;
if (grade > 50) {
    console.log("You " + "passed!");
} else {
    console.log("You " + "failed!"); 
};

/*
SHORTCUT SYNTAX (conditional/ternary operator)
variableName = condition ? executeTrue : executeFalse
*/ /*
var grade = 70;
console.log("You " + (grade > 50 ? "passed!" : "failed!"));


//FUNCTIONS
/*
A function is a JavaScript procedure or set of statements
that performs a task or calculates a value.

SYNTAX
function name(argument1 , argument2, argument3){
    statement1;
    statement2;
    statement3;
}
*/ /*
function greet(name) {
  return "Hello " + name + "!";
}
console.log(greet("Jason"));


// LOOPS
/*
Iterate a block of code more than once.

FOR - Loops through a block of code a defined number 
of times.

SYNTAX
for (statement 1; statement 2; statement 3) {
    code block to be executed
}
*/ /*
var colors = ["yellow", "blue", "red", "green"];
var text = "";
var i;
for (i = 0; i < colors.length; i++) {
    console.log(text += colors[i] + " ");
}

/*
WHILE - Loops through a block of code while a specified  
condition is true. Use this loop if you do not know
how many times you want to loop through your code.

SYNTAX
while (condition) {
    code block to be executed
}
*/ /*
var colors = ["yellow", "blue", "red", "green"];
var text = "";
var i = 0;
while (i < colors.length) {
    console.log(text += colors[i] + " ");
    i++;
}


// DEBUGGING 
/* 
To debug your script, run only the portion of 
code that you are working on by making all other 
code into comments. Then output your script via alerts 
or the console to check that it is working properly. 
Open the JavaScript console in Google Chrome by using 
Command + Option + J (or Ctrl + Option + J on Windows)

SYNTAX FOR CONSOLE (Returns Content in JavaScript console)
console.log("Content");
*/
//console.log("Debug your code here.");

/*
SYNTAX FOR ALERT (Example will appear in pop up)
alert("Example");
*/
//alert("Or try debugging here.");


// TESTING
/*
You can test script directly in the console without
using any files. Simply type JS code in the console
and hit return to see the results.
*/
//console.log("Type your code directly in here to test it.");
