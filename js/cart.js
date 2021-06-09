/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;



function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {

   
//   let new_tbody = document.createElement('tbody');
// populate_with_new_rows(new_tbody);
// old_tbody.parentNode.replaceChild(new_tbody, old_tbody)

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {


  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  let tbodyElement=document.getElementsByTagName('tbody')[0];

  
  for(let i=0;i<Cart.cartItems.length;i++){
  let trElement=document.createElement('tr');
  tbodyElement.appendChild(trElement);


  let tdElement=document.createElement('td');
  trElement.appendChild(tdElement);
  let par=document.createElement('p');
  tdElement.appendChild(par);
   par.textContent=cart[i];
   
  }
  console.log(cart);



}



function removeItemFromCart(event) {





  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table


}

// This will initialize the page and draw the cart on screen
renderCart();
