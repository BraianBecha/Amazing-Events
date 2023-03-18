

let cardDetailCont = document.getElementById("detailBoxContainer");

let queryString = location.search
let paramQery = new URLSearchParams(queryString);
let idQuery = paramQery.get("id")
let eventDet

console.log("paramQuery")
console.log(paramQery)



let pastEvents =[];
fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then ((resp)=> resp.json())
 .then(resp2 => { 
  console.log(resp2)
  data  = resp2 

 eventDet = data.events.find(x => x._id == idQuery)
console.log(eventDet)
cardDetailCont.innerHTML= `
<div class="detailBox">
        <div>
        <img src="${eventDet.image}" alt="">
        </div>
        <div>
        <h1>${eventDet.name}</h1>
          <h2>Place: ${eventDet.place}</h2>
          <p>Date: ${eventDet.date}</p>
          <p>Description: ${eventDet.description}</p>
          <p>Capacity: ${eventDet.capacity}</p>
          <p>Estimate: ${eventDet.estimate}</p>
          <H3>Price: ${eventDet.price}</H3>
       
          </div>`

           
 })