let cat1 = document.getElementById("Category1")
let cat2 = document.getElementById("Category2")
let cat3 = document.getElementById("Category3")
let cat4 = document.getElementById("Category4")
let cat5 = document.getElementById("Category5")
let cat6 = document.getElementById("Category6")
let cat7 = document.getElementById("Category7")


let cardArray1
let cardArray2
let cardArray3
let cardArray4
let cardArray5
let cardArray6
let cardArray7

let stringHTML
let cardArrayTot = []

let cardContent = document.getElementById("contCard")
imprimir()


cat1.addEventListener("change", clickEnCheck1, false);
cat2.addEventListener("change", clickEnCheck2, false);
cat3.addEventListener("change", clickEnCheck3, false);
cat4.addEventListener("change", clickEnCheck4, false);
cat5.addEventListener("change", clickEnCheck5, false);
cat6.addEventListener("change", clickEnCheck6, false);
cat7.addEventListener("change", clickEnCheck7, false);


function clickEnCheck1(){
 console.log("el valor de check 1 cambio a "+ cat1.checked)
  resetString()
 
}
function clickEnCheck2(){
 // console.log("el valor de check 2 cambio a "+ cat2.checked)
 resetString()
 
}
function clickEnCheck3(){
 // console.log("el valor de check 3 cambio a "+ cat3.checked)
  resetString()
 
}
function clickEnCheck4(){
  //console.log("el valor de check 4 cambio a "+ cat4.checked)
  resetString()
 
}
function clickEnCheck5(){
  //console.log("el valor de check 5 cambio a "+ cat5.checked)
  resetString()

}
function clickEnCheck6(){
  //console.log("el valor de check 6 cambio a "+ cat6.checked)
  resetString()
 
}
function clickEnCheck7(){ 
  //console.log("el valor de check 7 cambio a "+ cat7.checked)
  resetString()

}



function imprimir(){
if(cat1.checked ==true){  
  cardArray1=(arrayToCard(eventsFilter(data.events , "Food Fair")))
  cardArrayTot= cardArrayTot.concat(cardArray1)
  console.log("cardArray1")
  console.log(cardArray1)
}

if(cat2.checked ==true){
  cardArray2=(arrayToCard(eventsFilter(data.events , "Museum")))
  
  cardArrayTot= cardArrayTot.concat(cardArray2)
  
 // console.log(cardArray2)
}

if(cat3.checked ==true){
  cardArray3= arrayToCard(eventsFilter(data.events , "Costume Party"))
  
  cardArrayTot= cardArrayTot.concat(cardArray3)
  
 // console.log(cardArray3)
}
if(cat4.checked ==true){
  cardArray4=(arrayToCard(eventsFilter(data.events , "Music Concert")))
  

  cardArrayTot= cardArrayTot.concat(cardArray4)
  //console.log(cardArray4)
}
if(cat5.checked ==true){
  cardArray5=(arrayToCard(eventsFilter(data.events , "Race")))
  

  cardArrayTot= cardArrayTot.concat(cardArray5)
  
  //console.log(cardArray5)
}

if(cat6.checked ==true){
  cardArray6=(arrayToCard(eventsFilter(data.events , "Book Exchange")))
  
  cardArrayTot= cardArrayTot.concat(cardArray6)
  
  //console.log(cardArray6)
}

if(cat7.checked ==true){
  cardArray7=(arrayToCard(eventsFilter(data.events , "Cinema")))
  
  cardArrayTot= cardArrayTot.concat(cardArray7)
  
  //console.log(cardArray7)
}
           
stringHTML=cardArrayTot.join(" ")
cardContent.innerHTML=stringHTML

}




function resetString(){
  console.log("entro a reset")
  cardArrayTot=[]
  stringHTML = ''

  console.log("cardArrayTot")
  console.log(cardArrayTot)
  console.log("stringHTML")
  console.log(stringHTML)
  imprimir()
  }




function eventsFilter(rawEvents, cat){
  console.log("cat")
  console.log(cat)
  let filteredEvents = rawEvents.filter(x => x.category == cat && x.id!=0)
  return filteredEvents
}


function arrayToCard(filteredEvents){
let mapToCardEvents = filteredEvents.map( x => (`<div class="cardHome card  mx-3 mb-3 rounded-0 p-3" >
<img  src="${x.image}" class="imghome card-img-top rounded-0" alt="">
<div class="card-body">
  <h5 class="card-title">${x.name}</h5>
  <p class="card-text">${x.description}</p>                                              
  <p class="card-text"><small class="text-muted">Price: $${x.price}</small></p>
  <a href="details.html" class="btn btn-primary">More</a>
</div>
</div>`))
return mapToCardEvents
}




