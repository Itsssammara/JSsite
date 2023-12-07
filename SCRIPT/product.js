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






























// const localStorageKeyBought = "bought";
// let bought = JSON.parse(localStorage.getItem(localStorageKeyBought)) || [];
// let main = document.querySelector("main");
// let accessories = JSON.parse(localStorage.getItem("accessories")) || [];
// function renderItems(items) {
//   if (items.length === 0) {
//     main.innerHTML = '<p class="unknown">No items found.</p>';
//   } else {
//     main.innerHTML = items
//       .map(function (item, index) {
//         return `
//             <div class="div">
//                 <img class="image" src="${item.url}" alt="${item.name}">
//                 <h2 class="h2">${item.name}</h2>
//                 <p class="p">${item.description}</p>
//                 <p class="p">R${item.price.toFixed(2)}</p>
//                 <button class="cart" value="${index}" data-add>Add to Cart</button>
//             </div>`;
//       })
//       .join("");
//   }
// }
// function add(index) {
//   bought.push(accessories[index]);
//   localStorage.setItem(localStorageKeyBought, JSON.stringify(bought));
// }
// main.addEventListener("click", function (event) {
//   if (event.target.hasAttribute("data-add")) {
//     add(event.target.value);
//   }
// });
// function searchAndSort() {
//   let searchBar = document.getElementById("searchBar").value.toLowerCase();
//   let sortOption = document.getElementById("sortOptions").value;
//   let filteredItems = accessories.filter((item) => {
//     return item.name.toLowerCase().includes(searchBar);
//   });
//   console.log(filteredItems);
//   if (sortOption === "cheapest") {
//     filteredItems.sort((a, b) => a.price - b.price);
//   } else if (sortOption === "expensive") {
//     filteredItems.sort((a, b) => b.price - a.price);
//   }
//   renderItems(filteredItems);
// }

// const search = document.getElementById("searchBar");
// console.log(search);
// const sortOptions = document.querySelector("sortOptions");
// sortOptions.addEventListener("change", searchAndSort);
// search.addEventListener("input", searchAndSort);
// document.getElementById("searchBar").addEventListener("input", searchAndSort);
// document
//   .getElementById("sortOptions")
//   .addEventListener("change", searchAndSort);
// Check if all data is deleted and display a spinner
// if (accessories.length === 0) {
//   main.innerHTML =
//     '<div id="spinner" class="spinner" style:"display: none;"><i class="fas fa-spinner fa-spin"></i></div>';
// } else {
  // Initial rendering
//   renderItems(accessories);
// }


