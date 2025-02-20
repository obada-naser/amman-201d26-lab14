/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);
let newCart=[];
let count=0;


// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');

  for (let i in Product.allProducts) {
    let optionElement=document.createElement('option');
    selectElement.appendChild(optionElement);
    let par=document.createElement('p');
    optionElement.appendChild(par);

    par.textContent=Product.allProducts[i].name;
    newCart[i]=Product.allProducts[i];





  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();


  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart

function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  //  cart.push(newCart);

  // TODO: get the quantity
  
   const item = document.getElementById('items').value;
   const quantity = document.getElementById('quantity').value;
   cart.addItem(item, quantity);

  
  // TODO: using those, add one item to the Cart


}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  let carCount=document.getElementsById('itemCount');
  count=count+1;
  let para=document.createElement('p');
  carCount.appendChild(para);
  carCount.textContent=count;


}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div


function updateCartPreview() {
  // TODO: Get the item and quantity from the form
 
  let item = document.getElementById('items').value;
  let quantity = document.getElementById('quantity').value;


  
  

  // TODO: Add a new element to the cartContents div with that information

  let content=documen.getElementById('cartContents');
  let par=document.createElement('p');
  content.appendChild(par);
  par.textContent=item + quantity;
  console.log(par.textContent);
  




}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
