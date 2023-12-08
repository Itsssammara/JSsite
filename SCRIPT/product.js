let goods =[]
let main = document.querySelector('main')

// sets the array from local storage to array(items) in code
art= JSON.parse(localStorage.getItem('art'))

main.innerHTML = items.map(function(item, index){
    return `
    <div>
        <h2>${item.name}</h2>
        <p><img src="${item.url}"></img></p>
        <p>${item.description}</p>
        <p>${item.price}</p>
        <button value="${index}" data-add>Add to cart</button>
    </div>`
}).join('')

function add(index){
    purchased.push(items[index])
    localStorage.setItem('goods',JSON.stringify(purchased))
}
main.addEventListener('click', function(){
    if(event.target.hasAttribute('data-add')){
        // alert('button pressed')
        add(event.target.value)
    }
})

let cart = []

document.getElementById("digitalBtn").addEventListener("click", addToCart);
document.getElementById("postBtn").addEventListener("click", addToCart);
document.getElementById("mediaBtn").addEventListener("click", addToCart);
document.getElementById("oilBtn").addEventListener("click", addToCart);
document.getElementById("polaroidBtn").addEventListener("click", addToCart);
document.getElementById("canvasBtn").addEventListener("click", addToCart);

function addToCart(artpiece) {
    cart.push(artpiece); 
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
  }
  
  function addProductToCart(productName, productPrice) {
    //adds the product to an array or updating a cart total price
    console.log("Added " + productName + " to cart. Price: R" + productPrice);
  }



























