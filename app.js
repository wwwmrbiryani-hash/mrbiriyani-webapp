let foods=[
{name:"Chicken Biryani",price:120,img:"https://images.unsplash.com/photo-1604908176997-125f25cc6f3d"},
{name:"Matka Biryani",price:180,img:"https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a"},
{name:"Egg Biryani",price:90,img:"https://images.unsplash.com/photo-1633945274405-b6c8069047b0"}
]

let cart=[]

window.onload=function(){

setTimeout(()=>{
document.getElementById("loadingScreen").style.display="none"
},5000)

loadMenu()

}

function loadMenu(){

let menu=document.getElementById("menu")

foods.forEach((food,i)=>{

menu.innerHTML+=`

<div class="card">

<img src="${food.img}">

<h3>${food.name}</h3>

<p>₹${food.price}</p>

<button onclick="addToCart(${i})">Add to Cart</button>

</div>

`

})

}

function addToCart(i){

cart.push(foods[i])

updateCart()

}

function updateCart(){

let list=document.getElementById("cartItems")

let total=0

list.innerHTML=""

cart.forEach(item=>{

total+=item.price

list.innerHTML+=`<p>${item.name} ₹${item.price}</p>`

})

document.getElementById("totalPrice").innerText="Total ₹"+total

}

function showCart(){

document.getElementById("homeScreen").style.display="none"

document.getElementById("cartScreen").style.display="block"

}

function showHome(){

document.getElementById("homeScreen").style.display="block"

document.getElementById("cartScreen").style.display="none"

}

function showProfile(){

document.getElementById("homeScreen").style.display="none"

document.getElementById("cartScreen").style.display="none"

document.getElementById("profileScreen").style.display="block"

}

function placeOrder(){

let orderID=Math.floor(Math.random()*10000)

document.getElementById("orderNumber").innerText="Order ID: MR"+orderID

document.getElementById("successScreen").style.display="flex"

setTimeout(()=>{

document.getElementById("successScreen").style.display="none"

cart=[]

updateCart()

},5000)

}

function getLocation(){

navigator.geolocation.getCurrentPosition(pos=>{

let lat=pos.coords.latitude

let lon=pos.coords.longitude

document.getElementById("address").value="Lat:"+lat+" Long:"+lon

document.getElementById("map").style.display="block"

let map=L.map('map').setView([lat,lon],15)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

L.marker([lat,lon]).addTo(map)

})

}
