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

cartTable.addEventListener('input', function(event){ 
    if(event.target.classList.contains('quantity-input')){
        // Pass both the index and quantity to the handlePayment function
        handlePayment(event.target.dataset.index, event.target.value);
        calculateTotalAmount(); // calling function to update amount
    }
});

// Event listener for the "Pay" button
payButton.addEventListener('click', function() {
    alert('Payment completed. Thank you for your purchase!');
    clearCheckoutPage();
});