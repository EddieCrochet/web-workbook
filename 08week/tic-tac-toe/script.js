'use strict';
$(document).ready(function () {
  let playerOne = 'X';
  let playerTwo = '0';
  var pic0 = $("[data-cell=0]");
  var pic1 = $("[data-cell=1]");
  var pic2 = $("[data-cell=2]");
  var pic3 = $("[data-cell=3]");
  var pic4 = $("[data-cell=4]");
  var pic5 = $("[data-cell=5]");
  var pic6 = $("[data-cell=6]");
  var pic7 = $("[data-cell=7]");
  var pic8 = $("[data-cell=8]");
  var turn = 1;
  var clear = '';
 

  $('[data-cell]').click(function () {

    if (turn % 2 ===
       1) {
      $(this).text(playerOne);
      checkWin();
    } else {
      $(this).text(playerTwo);
      checkWin();
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
    console.log("checking win", pic0);
    if ((pic0 === playerOne && pic1 === playerOne && pic2 === playerOne) ||
      (pic3 === playerOne && pic4 === playerOne && pic5 === playerOne) ||
      (pic6 === playerOne && pic7 === playerOne && pic8 === playerOne)) {
        console.log("is this working?");
        $("announce-winner").innerHTML = "the player playing with the X is the winner";
    } else if ((pic0 === playerOne && pic1 === playerOne && pic2 === playerOne) ||
    (pic3 === playerOne && pic4 === playerOne && pic5 === playerOne) ||
    (pic6 === playerOne && pic7 === playerOne && pic8 === playerOne)) {  
      console.log("is this working? OR NOT!?");
      $("announce-winner").innerHTML = "the player playing with the 0 is the winner";
    }
  }

  /*function checkWin() {
    console.log("Checking win!");
    if ((pic0 === pic1) && (pic0 === pic2) ||
        (pic3 === pic4) && (pic3 === pic5) ||
        (pic6 === pic7) && (pic6 === pic8) ||
        (pic0 === pic3) && (pic0 === pic6) ||
        (pic1 === pic4) && (pic1 === pic7) ||
        (pic2 === pic5) && (pic2 === pic8)) {
          document.getElementsByClassName("announce-winner").innerHTML = "LOOKS LIKE WE GOT A WINNER!";
          console.log('itsa looka likea wina');
        } else {
          document.getElementsByClassName("announce-winner").innerHTML = "NO WINNER YET HAHA!";
          console.log('itsa looka likea NOTA wina');
        }
  }*/

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
      $('.announce-winner').text('you hit ${limit}!!')
    }
  }
})
