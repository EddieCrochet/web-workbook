'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
window.onload = function(){
    // Job 1: Alert the user to how many list items there are on the page.
   setListMessage();

   //Job 2: Add a <h2> to the page under the title that says 'You have _ items in your shopping cart'.
  // Do not use html to do this. Use JavaScript.
   createListCountHeaderElement();

   //Job 3: Create the ability to add more items to the list using JavaScript.
   //updateListCountHeaderMessage();

   createNewItemTextInput();

   //job 4
   addRemoveButtonstoExistingItems();

  }  

  //Job 1:
function setListMessage(){
  let list = document.getElementsByTagName('ul');
  let message = "This list has " + list[0].children.length + " items";
  alert(message);
}
 


//Job 2:
function createListCountHeaderElement(message){
  let listHeading = document.createElement("h2");
  let h1 = document.getElementsByTagName("h1");

  let count = document.getElementsByTagName("ul");

  listHeading.innerHTML = "There are "+ count[0].children.length +" items in your shopping cart";

  h1[0].appendChild(listHeading);

 // listHeading.setAttribute("id", "list-heading");
}

  //Job 2, 3, and 4:

function updateListCountHeaderMessage(){
  let listAlert = setListMessage();

  let listHeading = document.getElementById("list-heading");

  listHeading.innerHTML = listAlert;
}

//JOb 3:

function createNewItemTextInput(){
  let textField = document.getElementById("item-text");
  textField.setAttribute ("placeholder", "Type item to add");
  let addButton = document.getElementById("add-button");
  addButton.innerHTML = "Add Item";
  addButton.onClick = addItem;

  document.getElementById("add-item").appendChild(textField);
  document.getElementById("add-item").appendChild(addButton);
}

// //Job 4:

// function addRemoveButtonstoExistingItems(){
//   let list = document.getElementsByTagName("ul");
//   for (let i = 0; i<list.children.length; i++){
//     addRemoveButton(list.children[i]);
//   }
// }
});

