// jQuery - Getting Started Notes
//================================

// Anatomy of a jQuery Command

// hello world:

$(function() {
    console.log('hello world');
});

// $ - shortcut to the jQuery library

// $ === jQuery

// jQuery ready:

$(function() {
    //page setup
});

// this method allows you to access the DOM once its loaded, etc.:

$(document).ready(function() {
    // jQuery code, event handling callbacks here
});

//Callback Functions Example:

$(document).ready(function() {
    $('img').click(function() {
        //handle the click event on any img element in the page
    });
});

//I believe this is syntactically the same:

$(function() {
    $('img').click(function() {
        //blah
    });
});

//Tip:  Checking the length of something returned by jQuery is a great way
//to check whether your selector has returned something or not ... no error

//Example:

$('nomatch') //returns an empty array, length == 0

//getter and setter functions

//Example:

$('h2').text(); //returns the text of the h2

$('h2').text('123 Main Street'); //sets the text of the h2

//Finding Parts of a page

//CSS3 Selectors

// Examples:

// 1.  ID Selector (single item):

$('#content-container')

// 2.  Class Selector (one to many items):

$('.title')

// 3.  Pseudo Class Selectors:

$('div:first-child')

$('#special-features li:first-child') //this looks for an item with an id of special-features and then look for the first list item (li)

$('a[href^="http://"]') //this looks for anchor tags with an href attribute that starts with the string "http://"

// HTML Literals

// Examples:

$('<div>This is a DIV</div>') //creates a div in memory that we can use

$(['<span>one</span>', '<span>two</span>']) //creates an array of spans in memory

// Using JavaScript along with a jQuery selector:

$(document.getElementById('house-detail')) // returns the div

$([document.querySelector('h2')]) //returns a collection of h2s using the built in browser query capabilities

$([document.querySelector('h2'), document.querySelector('h3')]) // same as above but is able to return a collection of the found h2s and h3s

// Find function

$('.col-sm-5').find('button[class*="btn-primary"]') //finds button with a class of btn-primary within the element with an id of col-sm-5

//Parent / Child Selectors

//Examples:

$('tbody').parents(); // returns all of the elements that are the parents of the item searched for

$('tbody').children(); // opposite of parents(), this returns all of the children of the item searched for

$('tbody').parents('table') // returns all of the parent tables (in this case 1) of the item searched for

//same can be done with .children()

//Adding style and effects to items once they are selected

// 1.  Accessing attributes directly:

$('h2').attr('style', 'background-color:#ff3') //sets the background color of the h2

// 2.  Accessing css attributes:

$('h2').css('background-color') //accesses the background color of the h2

$('h2').css({
    backgroundColor: '#f60'
}); //sets the background color using a JavaScript array; note the camelcase property

$('h2').css('backgroundColor') //accesses the background color of the h2 via the camelcase property

// 3.  Using built in add and remove class functions:

$('h2').addClass('highlight')

$('h2').removeClass('highlight')

// these add and remove ONLY the class named, so in this case the highlight class

// In addition to be able to pass in a name, you can also pass in a function:

$('h2').addClass(function() {
    return 'bordered';
});

//Effects:  Show, Hide, Toggle functions:

$('h2').hide()
$('h2').show()
    //or
$('h2').toggle()

// as with other jQuery functions, you can pass in a function:

$('h2').toggle(function() {
    console.log('toggled');
});

// More Effects - Fade in and out:

$('h2').fadeOut()
$('h2').fadeIn()

// you can modify the behavior with special arguments:  fast

$('h2').fadeOut('fast')

// more advanced, you can pass in a function:

$('h2').fadeIn(function() {
    $('#special-features').addClass('highlight');
});

// Events

//examples:  page load, key pressed, button clicked, form submitted, window scrolled, element focused, etc. etc.

//Click event example:

//wire the click event of the button to our function
$('#save-button').on('click', function() {
    console.log('the save button is clicked.');
});

//unwire the click event of the button
$('#save-button').off('click');

//Handle an event only once
$('#save-button').one('click', function() {
    console.log('the save button is clicked.');
});

//Specialized handling of a click event (other events are also handled liked this in jQuery):
$('#save-button').click(function() {
    console.log('clicked!');
});

$('#save-button').blur(function() {
    console.log('no more love :(');
});

//Chaining

//1st non-chained example (for comparison):
$('#special-features li').addClass('highlight bordered');  //adds hightlight style

$('#special-features li').width('50%');  //alters the width of each list item

$('#special-features li').height('200px');  //alters the height of each list item

//above is inefficient as we are selecting the same elements over and over
//instead of doing this over and over - using chaining to do this efficiently
$('#special-features li')
    .addClass('highlight bordered')
    .width('50%')
    .height('200px');

//more advanced example using the .each function to apply changes to all of the selected items
$('#special-features li')
        .width('50%')
        .height('200px')
        .addClass('highlight bordered')
        .each(function(index, item) {
            var $item = $(item);
            $item.text($item.text() + ' ' + $item.attr('data-feature-id'));
        });

//in order to work with the same elements over and over, create a variable
var items = $('#special-features li');

//example of chaining when you are referencing a single item
$('#save-button')
    .click(function() {
        console.log('clicked');
    })
    .addClass('bordered');

//Working With User Input

//Textboxes and TextAreas

//getting and setting values:
$('#notes-box').val('these are my notes');  //sets the text in the TextAreas
$('#notes-box').val();  //retrieves the text from the TextAreas

//date input type:
$('#showing-date').val('2015-12-13');

//jQuery protects from bad entries:
$('#showing-date').val('test');  //will produce a jQuery error

//checkbox:
$('#owner-present-check').prop('checked', true);  //check the checkbox

//note:  the course said this doesn't work but it appears to in Chrome:
$('#owner-present-check').attr('checked', true);  //check the checkbox

//radio buttons - a little different / special to check the status of
//using a pseudo class (:checked) to find it:
var status = $('input[name="available"]:checked').val();

//Big Picture

//jQuery Versions - 1.x and 2.x
//1.x required if you support IE7,8,9, otherwise use 2.x

//jQuery UI - library built on top of jQuery; widgets, etc.

//zepto.js - jQuery compatible library for Mobile and Device Development

//variable naming convention:

//1.  Use the $ prefix for variables that are populated from a jQuery selection
//ex:
var $h2 = $('h2');
