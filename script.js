let total=0

function addToCart(name,price){

total+=price

document.getElementById("total").innerHTML="Total ₹"+total

}

function toggleTheme(){

document.body.classList.toggle("dark")

}

function placeOrder(){

document.getElementById("success").style.display="block"

setTimeout(()=>{

document.getElementById("success").style.display="none"

},3000)

}

function getLocation(){

document.getElementById("map").style.display="block"

navigator.geolocation.getCurrentPosition(function(pos){

let lat=pos.coords.latitude
let lon=pos.coords.longitude

document.getElementById("address").value="Lat:"+lat+" Long:"+lon

let map=L.map('map').setView([lat,lon],15)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

L.marker([lat,lon]).addTo(map)
.bindPopup("Your Location")
.openPopup()

})

}
