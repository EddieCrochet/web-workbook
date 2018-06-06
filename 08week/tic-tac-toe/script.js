'use strict';

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
