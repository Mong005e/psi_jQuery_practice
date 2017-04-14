//
// ## jQuery Practice Project
//
// Write the code to make clicking on the 'change-highlight' button give a box on the DOM the 'highlight' class to turn the box red.
// Each time the 'change-highlight' button is clicked, it should give the next square
// the 'highlight' class.
// Only 1 box should be highlighted at a time.
// You will need to add to the highlightASquare function, you are also welcome to write more than the given functions.
//
// VERY USEFUL HINT: [jQuery has good methods for finding and for changing an element's class](https://api.jquery.com/category/manipulation/class-attribute/)
//

//
// ## jQuery Pro Practice Project (optional)
//
// Write code to make the number on the DOM countdown each second. Only one number should be displayed on the DOM at a time.
//
// HINT: look into javascript's setInterval() function.
//
// BONUS 1: Add a button for the user to reset the timer.
// BONUS 2: Make something cool happen using a jQuery animation when the timer gets to zero.

/*
  Write the code to make clicking on the 'change-highlight' button give a box on the DOM
  the 'highlight' class to turn the box red.
  Each time the 'change-highlight' button is clicked, it should give the next square
  the 'highlight' class.
  Only 1 box should be highlighted at a time.
  You will need to add to the highlightASquare function,
  you are also welcome to write more than the given functions.
*/
var numberOfSquares = 10;
var thisSquare = 0;
var thatSquare = 0;


$(document).ready(onReady);

//Function that runs when html is fully loaded:
function onReady(){
  //click listener to button:
  $('.change-highlight').on('click', highlightASquare);



  //call to put starting squares on DOM
  appendSquaresToDom(numberOfSquares);
}

function highlightASquare(){

  $(this).on('click');

  // ANOTHER HINT: There is an array in the highlightASquare function.
  //You will need to find a way to keep track of an index of that array.

  //This variable stores an array of the elements with the 'square' class
  var arrayOfSquares = $('.square');
  $(arrayOfSquares[thisSquare]).addClass('highlight');
  thisSquare ++ ;
  console.log(thisSquare);

  if (thisSquare > numberOfSquares) {
    thisSquare = 0;
    thatSquare = -1;
  }

  removeHighlight(); // maybe switch to .square??

  }

  function removeHighlight(classySquare){
// check to see if any div with class of square has class of highlight
// if ( $(classySquare).hasClass('highlight') === true) {
//   console.log('classy');


//if number of highlighted squares is more than 1 remove class



}










//You don't need to change this function:
function appendSquaresToDom(number){
  var squaresToAppend = "";
 //concatenate string of squares
  for(var i = 0; i < number; i++){
    squaresToAppend += "<div class='square'></div>";
  }
  //append string of html
  $(".container").append(squaresToAppend);
}
