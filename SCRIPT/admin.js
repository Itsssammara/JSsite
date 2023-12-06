//objects created manually
let art = []
//constructor function
function Objects(id, name, description,price,url){
    this.id = id,
    this.name = name,
    this.description = description,
    this.price = price,
    this.url = url
}
//items created with constructor functions
let item1 = new Objects(1, 'vector images', 'Anime girl digital poster', 100.00, 'https://i.postimg.cc/k4kM7fzZ/digital-painting-girl-anime-style-vector-illustration-147933-3842.jpg')
let item2 = new Objects(1, 'Digital Prints', 'Various car posters', 150.00, 'https://i.postimg.cc/Qd7jqR4y/27b734879d537302413e9ace96a6767a.jpg')
let item3 = new Objects(1, 'Mixed-media', 'Anime girl digital poster', 400.00, 'https://i.postimg.cc/qRkMmjWH/paint2.jpg')
let item4 = new Objects(1, 'Acrylic on canvas', 'Asorted paintings', 500.00, 'https://i.postimg.cc/2S75nsX7/paint1.jpg')
let item5 = new Objects(1, 'Acrylic on canvas', 'Asorted paintings', 600.00, 'hhttps://i.postimg.cc/2S75nsX7/paint1.jpg')
let item6 = new Objects(1, 'Oil on canvas', 'Asorted paintings', 800.00, 'https://i.postimg.cc/W1ddcW9G/e997518c36681eacffd7bb3fe5894c61.jpg')

//push items into array
art.push(item1,item2,item3,item4,item5,item6)

//sets array to local storage
localStorage.setItem('art',JSON.stringify(art))

// sets the array from local storage to array(items) in code
art= JSON.parse(localStorage.getItem('art'))


//     {
//         id:1,
//         name:'vector images',
//         image:'https://i.postimg.cc/k4kM7fzZ/digital-painting-girl-anime-style-vector-illustration-147933-3842.jpg',
//         price: 99.99
//     },
//     {
//         id:2,
//         name:'Digital Prints',
//         image:'https://i.postimg.cc/Qd7jqR4y/27b734879d537302413e9ace96a6767a.jpg',
//         price: 99.99
//     },
//     {
//         id:3,
//         name:'Mixed-media',
//         image:'https://i.postimg.cc/qRkMmjWH/paint2.jpg',
//         price: 600.00
//     },
//     {
//         id:4,
//         name:'Acrylic on canvas',
//         image:'https://i.postimg.cc/2S75nsX7/paint1.jpg',
//         price: 500.00
//     },
//     {
//         id:5,
//         name:'Acrylic on canvas',
//         image:'https://i.postimg.cc/2S75nsX7/paint1.jpg',
//         price: 500.00
//     },
//     {
//         id:6,
//         name:'Oil on canvas',
//         image:'https://i.postimg.cc/W1ddcW9G/e997518c36681eacffd7bb3fe5894c61.jpg',
//         price: 800.00
//     }
// 


let table = document.querySelector('[admin-table]')
function admin(){
    table.innerHTML = ''
    try{
        art.map((artpiece,index) => {
            table.innerHTML = `
            <tr>
            <td>${artpiece.id}</td>
            <td>${artpiece.name}</td>
            <td>${artpiece.description}</td>
            <td>R${artpiece.price}</td>
            <td><img src="${artpiece.url}"></img></td>
            <td>
            <td><button class="delete" value="${index}">Delete</button></td>
            </tr>
            `
        })
    
    }catch(e){
        alert(e.message)
    }
}
// let addButt = document.querySelector('#addButt');
// addButt.addEventListener('click', function(){

//     let exampleModal = document.getElementById('exampleModal');

//     exampleModal.innerHTML = `
//     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//             <div class="modal-dialog">
//               <div class="modal-content">
//                 <div class="modal-header">
//                   <h1 class="modal-title fs-5" id="exampleModalLabel">fufu</h1>
//                   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                 </div>
//                 <div class="modal-body">
//                   ...
//                 </div>
//                 <div class="modal-footer">
//                   <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                   <button type="button" class="btn btn-primary">Save changes</button>
//                 </div>
//               </div>
//             </div>
//            </div>
//     `;
    
// })


admin()
//table.style.display = 'none'
function favourite(){
    //sets the array to local storage
localStorage.setItem('art',JSON.stringify(art))
// sets the array from local storage to array(items) in code
items = JSON.parse(localStorage.getItem('art'))
}
let deleteButton = document.querySelector('.delete')
function remove(position) {
    //alert('clicked ')
    art.splice(position,1)
    favourite()
    mara()
    callback()
}
table.addEventListener('click', function(){
    if(event.target.classList.contains('delete')){
        remove(event.target.value)
        //alert(event.target.value)
    }
})

//update product constructor funct
function UpdateProduct(item){
    try{
        this.id = item.id;
        this.make = document.querySelector('#admin-make${this.id}').value;
        this.spec = document.querySelector('#admin-make${this.id}').value;
    }catch(err){
        alert(err)
    }
}
