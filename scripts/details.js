

let cardDetailCont = document.getElementById("detailBoxContainer");

let queryString = location.search
let paramQery = new URLSearchParams(queryString);
let idQuery = paramQery.get("id")

console.log("paramQuery")
console.log(paramQery)



let eventDet = data.events.find(x => x._id == idQuery)

cardDetailCont.innerHTML= `

<div class="detailBox">
        <img src="${eventDet.image}" alt="">
        <div>
          <h2>Place: ${eventDet.place}</h2>
          <p>Date: ${eventDet.date}</p>
          <p>Description: ${eventDet.description}</p>
          <p>Capacity: ${eventDet.capacity}</p>
          <p>Estimate: ${eventDet.estimate}</p>
          <H3>Price: ${eventDet.price}</H3>
       
          </div>`
