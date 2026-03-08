let cart = JSON.parse(localStorage.getItem("cart")) || []

function addToCart(name,price){

cart.push({name,price})

localStorage.setItem("cart",JSON.stringify(cart))

alert("Added to cart")

}

function loadCart(){

let cartDiv=document.getElementById("cartItems")

if(!cartDiv) return

let total=0

cart.forEach(item=>{

cartDiv.innerHTML+=`

<p>${item.name} - ₹${item.price}</p>

`

total+=item.price

})

document.getElementById("totalPrice").innerText="Total ₹"+total

}

window.onload=loadCart

function placeOrder(){

alert("🎉 Order Confirmed")

localStorage.removeItem("cart")

}
