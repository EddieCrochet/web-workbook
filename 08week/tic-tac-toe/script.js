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


}

);
