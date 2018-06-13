'use strict';

$(document).ready(function() {
  var clear = '';
  $('#clear').on('click', function(){
    $('[data-cell]').text('');
  })


 var turn = 'X';
 $('[data-cell]').on('click', function(){
   if($(this).text()===''){
    $(this).text(turn);
    if(turn === '0'){
      turn = 'X';
    }else{
      turn = '0';
    }
   }     
 })

var pic1 = $("[data-cell=0]").text;
var pic2 = $("[data-cell=1]").text;
var pic3 = $("[data-cell=2]").text;
var pic4 = $("[data-cell=3]").text;
var pic5 = $("[data-cell=4]").text;
var pic6 = $("[data-cell=5]").text;
var pic7 = $("[data-cell=6]").text;
var pic8 = $("[data-cell=7]").text;
var pic9 = $("[data-cell=8]").text;

 function checkWin(){
  if (pic1 === pic2 && pic3){
    console.log('pic1');
    $("#announce-winner").innerHTML = "Game won! Please reset the game.";
 }
}
checkWin();
}

);
