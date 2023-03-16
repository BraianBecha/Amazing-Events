
 let upcommingEvents =[];

  for(i=0; i<data.events.length; i++){
    if(data.events[i].date > data.currentDate)
        {
            upcommingEvents.push(data.events[i]);
        }

  }


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
imprimir(upcommingEvents)



let strSearch = document.getElementById("searchValue")
strSearch.addEventListener('input', ()=>{ filterByString(strSearch.value)} )


cat1.addEventListener("change", clickEnCheck1, false);
cat2.addEventListener("change", clickEnCheck2, false);
cat3.addEventListener("change", clickEnCheck3, false);
cat4.addEventListener("change", clickEnCheck4, false);
cat5.addEventListener("change", clickEnCheck5, false);
cat6.addEventListener("change", clickEnCheck6, false);
cat7.addEventListener("change", clickEnCheck7, false);


function clickEnCheck1(){
  resetString(upcommingEvents)
 
}
function clickEnCheck2(){
 
 resetString(upcommingEvents)
 
}
function clickEnCheck3(){
 
  resetString(upcommingEvents)
 
}
function clickEnCheck4(){
  
  resetString(upcommingEvents)
 
}
function clickEnCheck5(){
 
  resetString(upcommingEvents)

}
function clickEnCheck6(){
 
  resetString(upcommingEvents)
 
}
function clickEnCheck7(){ 
 
  resetString(upcommingEvents)

}


function imprimir(x){

  if(cat1.checked ==true){  
    cardArray1=(arrayToCard(eventsFilter(x, "Food Fair")))
    cardArrayTot= cardArrayTot.concat(cardArray1)
  }
  
  if(cat2.checked ==true){
    cardArray2=(arrayToCard(eventsFilter(x, "Museum")))
    
    cardArrayTot= cardArrayTot.concat(cardArray2)
    
   
  }
  
  if(cat3.checked ==true){
    cardArray3= arrayToCard(eventsFilter(x , "Costume Party"))
    
    cardArrayTot= cardArrayTot.concat(cardArray3)
    
   
  }
  if(cat4.checked ==true){
    cardArray4=(arrayToCard(eventsFilter(x , "Music Concert")))
    
  
    cardArrayTot= cardArrayTot.concat(cardArray4)
    
  }
  if(cat5.checked ==true){
    cardArray5=(arrayToCard(eventsFilter(x , "Race")))
    
  
    cardArrayTot= cardArrayTot.concat(cardArray5)
    
  
  }
  
  if(cat6.checked ==true){
    cardArray6=(arrayToCard(eventsFilter(x , "Book Exchange")))
    
    cardArrayTot= cardArrayTot.concat(cardArray6)
    
   
  }
  
  if(cat7.checked ==true){
    cardArray7=(arrayToCard(eventsFilter(x , "Cinema")))
    
    cardArrayTot= cardArrayTot.concat(cardArray7)
    
   
  }
   
if (cardArrayTot.length==0){
  
  cardContent.innerHTML='<h2> Humm... No items match the search criteria. </h2>'
  return
}
             
  stringHTML=cardArrayTot.join(" ")
  cardContent.innerHTML=stringHTML
  
  }
  



  function filterByString(x){
    let arrayFiltrado = upcommingEvents.filter(elemento => elemento.name.toLowerCase().includes(x.toLowerCase()))
    resetString(arrayFiltrado)
   
   }
   
   
   
   
   function resetString(x){  
     cardArrayTot=[]
     stringHTML = ''
     imprimir(x)
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
  <a href="details.html?id=${x._id}" class="btn btn-primary">More</a>
</div>
</div>`))
return mapToCardEvents
}
