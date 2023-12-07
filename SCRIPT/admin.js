//constructor function
function Objects(id, name, description, price, url) {
  this.id = id;
  this.name = name;
  this.description = description;
  this.price = price;
  this.url = url;
}

let art = [];

//items created with constructor functions
let item1 = new Objects(
  1,
  "Digital Art",
  "Anime girl vector images",
  60.0,
  "https://i.postimg.cc/k4kM7fzZ/digital-painting-girl-anime-style-vector-illustration-147933-3842.jpg"
);
let item2 = new Objects(
  2,
  "Digital Posters",
  "Various wall posters (size A3).",
  150.0,
  "https://i.postimg.cc/Qd7jqR4y/27b734879d537302413e9ace96a6767a.jpg"
);
let item3 = new Objects(
  3,
  "Mixed-media",
  "Adds a beautiful touch to your bedroom wall (size A2).",
  400.0,
  "https://i.postimg.cc/mr7Mrp9M/paint2.jpg"
);
let item4 = new Objects(
  4,
  "Acrylic on canvas",
  "Custom paintings at affordable prices (sizes A3, A2, A4).",
  300.0,
  "https://i.postimg.cc/2S75nsX7/paint1.jpg"
);
let item5 = new Objects(
  5,
  "Polaroid Images",
  "Mini acrylic and watercolor based paintings.",
  50.0,
  "https://i.postimg.cc/bYmJFhZg/polaroid-imgs.jpg"
);
let item6 = new Objects(
  6,
  "Oil on canvas",
  "For those who appreciate the traditional arts.",
  400.0,
  "https://i.postimg.cc/W1ddcW9G/e997518c36681eacffd7bb3fe5894c61.jpg"
);

//push items into array
art.push(item1, item2, item3, item4, item5, item6);

function items() {
  //sets array to local storage
  localStorage.setItem("art", JSON.stringify(art));
}

let table = document.querySelector("[admin-table]");

function admin() {
  table.innerHTML = "";
  try {
    art.forEach((artpiece, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${artpiece.id}</td>
        <td>${artpiece.name}</td>
        <td>${artpiece.description}</td>
        <td>R${artpiece.price}</td>
        <td><img src="${
          artpiece.url
        }" style="height: 40px; width:40px"></img></td>
        <td><button class="delete" data-index="${index}">Delete</button></td>
      `;
      const deleteBtn = row.querySelector('.delete');
      deleteBtn.addEventListener('click', () => removeitem(index));
      table.appendChild(row);
    });
  } catch (e) {
    alert(e.message);
  }
}
admin();

function removeitem(item) {
  art.splice(item, 1);
  localStorage.setItem("art", JSON.stringify(art));
  admin();
}

let addBtn = document.getElementById("addButton");
let changeName = document.getElementById("newName");
let url = document.getElementById("newPic").value;
let cost = document.getElementById("newCost").value;

addBtn.addEventListener("click", function(){
  const newName = changeName.value;
  const newCost = cost.value;
  const newUrl = url.value;
  
  
  const newItem = new Objects(
    art.length +1,
    newName,
    newCost,
    newUrl
    );
    
    art.push(newItem);
    
    admin();
    items();
  })

  // function UpdateProduct(item) {
    //   try {
      //     this.id = item.id;
      //     this.make = document.querySelector("#admin-make${this.id}").value;
      //     this.spec = document.querySelector("#admin-spec${this.id}").value;
      //   } catch (err) {
        //     alert(err);
        //   }
        // },
        // addBtn.addEventListener("click", funtion(){
          
          // });
          // function addProduct() {
          //   let id = +document.getElementById("idNew").value;
          //   let name = +document.getElementById("newName").value;
          //   let url = +document.getElementById("newPic").value;
          //   let cost = +document.getElementById("newCost").value;
          //   art.push({ id, name, url, cost });
          //   localStorage.setItem("art", JSON.stringify(art));
          //   row.innerHTML = ''
          //   admin();
          // }
          
          // let id = document.getElementById("idNew").value;
        
        