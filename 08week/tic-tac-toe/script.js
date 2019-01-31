'use strict';
$(document).ready(function () {
  let playerOne = 'X';
  let playerTwo = '0';
  var pic1 = $("[data-cell=0]").text;
  var pic2 = $("[data-cell=1]").text;
  var pic3 = $("[data-cell=2]").text;
  var pic4 = $("[data-cell=3]").text;
  var pic5 = $("[data-cell=4]").text;
  var pic6 = $("[data-cell=5]").text;
  var pic7 = $("[data-cell=6]").text;
  var pic8 = $("[data-cell=7]").text;
  var pic9 = $("[data-cell=8]").text;
  var turn = 1;
  var clear = '';
 

  $('[data-cell]').click(function () {

    if (turn % 2 === 1) {
      $(this).text(playerOne);
      checkWin(playerOne);
    } else {
      $(this).text(playerTwo);
      checkWin(playerTwo);
    }
    turn++
  })

  //  $('[data-cell]').on('click', function(){
  //    if($(this).text(playerOne)){
  //     $(this).text(turn);
  //     checkWin(playerOne);
  //     if(turn === playerTwo){
  //       turn = playerOne;
  //     }else{
  //       turn = playerTwo;
  //     }
  //     }     
  //  })

  function checkWin() {
    if (pic1 === playerOne && pic2 === playerOne && pic3 === playerOne) {
      console.log(pic1, "is this working?");
      $("#announce-winner").innerHTML = "the player playing with the x is the winner";
    }
  }

  $('#clear').on('click', function () {
    $('[data-cell]').text('');
  })


}

);
$(document).ready(function() {
  $('[data-cel]').on('click', function(){
    if(!$(this).text()){ //if block IS empty
    $(this).text('1');
    
  }else{
    let $val = $(this).text(); //get value from this clicked box
    $val++; //increase by increment of one
    $(this).text($val); //put new value in box
  }
  limit(50);
  })

  function limit(end){
    let counter = 0;
    $('[data-cell]').each(function(){
      counter += Number($(this).text());
      console.log(counter);
    })
    if(counter === end){
      $('#announce-winner').text('you hit ${limit}!!')
    }
  }
})
