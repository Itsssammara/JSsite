let goods = []
let main = document.querySelector('main')

// Sets the array from local storage to goods in code
goods= JSON.parse(localStorage.getItem('goods'))

main.innerHTML = goods.map(function(item, index){
    return `
    <div>
        <h2>${item.name}</h2>
        <p><img src="${item.url}" /></p>
        <p>${item.description}</p>
        <p>${item.price}</p>
        <button value="${index}" data-add>Add to cart</button>
    </div>`
}).join('')

// Function to add item to cart
function add(index){
    cart.push(goods[index])
    localStorage.setItem('cart', JSON.stringify(cart))
}

// add an Event listener for add to cart button
main.addEventListener('click', function(event){
    if(event.target.hasAttribute('data-add')){
        add(event.target.value)
    }
})

// Adding products to the shopping cart
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
    console.log("Added " + productName + " to cart. Price: R" + productPrice);
}
//function runs items you search 
function search() {
    let searchBar = document.getElementById('searchBar').value.toLowerCase();
    let filteredItems = goods.filter(item => {
        return item.name.toLowerCase().includes(searchBar);
    });
    addToCart(filter);
}
document.getElementById('input').addEventListener('input', search);
//sorts prices from high to low
function sort(){
    let sort = document.getElementById('select').value;
}
























