//gets the products from localstorage
let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
let cartTable = document.getElementById('cartTable')
cartTable.innerHTML = cart.map(function(item, index){
    return `
     <tr>
       <td>${item.image}</td>
       <td>${item.name}</td>
       <td>${item.description}</td>
       <td>${item.price}</td>
       <td>${item.quantity}</td>
       <td>
            <input type="number" class="quantity-input" placeholder="Qty" min="1" value="0" data-index=${index}>
        </td>
     </tr>`;
}).join('')



// Event listener for the "buy" button
buyButton.addEventListener('click', function() {
    alert('Thank you for your purchase! See you next time!');
    clearCheckoutPage();
});