'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
window.onload = function(){
    // Job 1: Alert the user to how many list items there are on the page.
 let listAlert = setListMessage();
 alert(listAlert);


   //Job 2: Add a <h2> to the page under the title that says 'You have _ items in your shopping cart'.
  // Do not use html to do this. Use JavaScript.
   createListCountHeaderElement();

   //Job 3: Create the ability to add more items to the list using JavaScript.

   createNewItemTextInput();

   createAddButton();

   //job 4
  addRemoveButtonstoExistingItems();

  //addRemoveButton(appendElement);

  }  

  //Job 1:
function setListMessage(){
  let list = document.getElementById('shopping-cart');
  return "This page has " + list.children.length + " items in the shopping cart";
}
 


//Job 2:
function createListCountHeaderElement(){
  let listHeading = document.createElement("h2");
  listHeading.setAttribute ("id", "list-heading");
  
  let h1 = document.getElementsByTagName("h1");

  let count = document.getElementById("shopping-cart");

  listHeading.innerHTML = ("There are "+ count.children.length +" items in your shopping cart");

  h1[0].appendChild(listHeading);

}

  //Job 2, 3, and 4:

function updateListCountHeaderMessage(){
  console.log('running update');
  let count = document.getElementById("shopping-cart");
 document.getElementById("list-heading").innerHTML = 
    ("There are "+ count.children.length +" items in your shopping cart");

}

//Job 3:

function createNewItemTextInput(){
  let textField = document.createElement('input');
  textField.setAttribute("id", "text-field");
  document.getElementById('shopping-cart').after(textField);

  //this is all this function needs

  // textField.setAttribute ("placeholder", "Type item to add");
  // let addButton = document.getElementById("add-button");
  // addButton.innerHTML = "Add Item";
  // addButton.onClick = addItem;

  // document.getElementById("add-item").appendChild(textField);
 // document.getElementById("add-item").appendChild(addButton);
}

function createAddButton(){
  let newButton = document.createElement('button');
  newButton.onclick = function(){ addItem() };
  newButton.innerHTML = "Add Item";
  document.getElementById('text-field').after(newButton);
}

function addItem (){
  console.log('testing');

   let newItemText = document.getElementById ('text-field').value;
   let newItem = document.createElement('li');
   newItem.innerHTML = newItemText;
   document.getElementById('shopping-cart').appendChild(newItem);

   updateListCountHeaderMessage();
   addRemoveButton(newItem);
console.log('another test');
}

//Job 4:

function addRemoveButtonstoExistingItems(){
  let list = document.getElementById("shopping-cart");
  for (let i = 0; i<list.children.length; i++){
    addRemoveButton(list.children[i]);
  }
}

function deleteItem (){
  console.log('testing job 4');
  this.parentNode.remove(this);
  updateListCountHeaderMessage();
}

//Job 3 and 4:

function addRemoveButton(appendElement){
  let removeButton = document.createElement("button");
  removeButton.innerHTML = "Remove";
  removeButton.onclick = deleteItem;
  appendElement.appendChild (removeButton);
  updateListCountHeaderMessage();
}


});

function handleClick(){
  console.log('click');
}
