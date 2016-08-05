/*
=======================================================

** Week 4 - Project 1 **
*** jQuery! ***

For any methods that we didn't cover, please refer to the jQuery documentation.
https://api.jquery.com/

BASIC TRACK: 1-8
ADVANCED TRACK: 9-12
=======================================================
*/

// Add your JS here.
$(document).ready(function(){

// 1 - Hide when clicked

    $(".hideMe").click(function(){
      $(".hideMe").hide();
    });

// 2 - change color of third li element when button is clicked

  $(".changeColor").click(function(){
      $("ul li:eq(2)").css("color", "#8A2BE2");
    });

// 3 - when 4th item is clicked, add another beneath it

  $("ul li:eq(3)").click(function(){
    $("ul li:eq(3)").append("<li>New item!</li>");
  });

// 4 - remove second li when clicked

  $("#removeLi").click(function(){
    $("ul li:eq(1)").remove();
  });

// 5 - when last item is clicked, change font size to 40px and hide all other items

  $("ul li:last").click(function(){
    $("ul li:last").css("font-size", "40px");
    $("ul li:not(:last)").hide();
  });


// 6 - make 1 more puppy when clicked

  $(".cute").click(function(){
    $('.cute-container').append($(".cute").clone());
  });

// 7 - when double click anywhere on page, turn rectangle into a square

  $('body').dblclick(function(){
    $('#makeSquare').css('width', '100px');
    $('#makeSquare').css('height', '100px');
    $('#makeSquare').css('border-radius', '0px');
  });


// 8 - alert user when button is clicked

  $('#dontClick').click(function(){
    alert('you clicked the button...');
  })

// ADVANCED TRACK
// 9 - when clicked change page background to match the swatch

  $('.black').click(function(){
    $('body').addClass('black');
  });

  $('.wood').click(function(){
    $('body').addClass('wood');
  });

  $('.chaos').click(function(){
    $('body').addClass('chaos');
  });

  $('.restore').click(function(){
    $('body').removeClass();
  });

// 10 - turn red when mouse is over box

  $('#hover').hover(function(){
    $('#hover').css('background-color', 'red');
    },
    function(){
    $('#hover').css('background-color', '#39B7CD');
  });

// 11&12 - add class green when clicked and remove class green when clicked again


  $('#hover').click(function(){
    $('#hover').toggleClass('green');
  });


});
