let data
let dataEvents
let dataOrdenada
let dataReOrdenada
let pastEvents =[]
let upcommingEvents=[]


fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then ((resp)=> resp.json())
.then(resp2 => { 
  
  data = resp2  

  dataEvents = data.events
 

  for(i=0; i<data.events.length; i++){
    if(data.events[i].date < data.currentDate)
        {
            pastEvents.push(data.events[i]);
        }
        if(data.events[i].date > data.currentDate)
        {
            upcommingEvents.push(data.events[i]);
        }

  }

   
  let dataOrdenadaxAsist = dataEvents
  let dataReOrdenadaxAsist = dataEvents
 
 
 
  dataOrdenadaxAsist.sort((a,b) =>  a.assistance-b.assistance);  
  dataOrdenadaxAsist = JSON.stringify(dataOrdenadaxAsist)
  

  dataReOrdenadaxAsist.sort((a,b) => -a.assistance+b.assistance);
 dataReOrdenadaxAsist = JSON.stringify(dataReOrdenadaxAsist)

 dataReOrdenadaxAsist= JSON.parse(dataReOrdenadaxAsist)
  dataOrdenadaxAsist= JSON.parse(dataOrdenadaxAsist)

let evCol1= findMaxAttendance(pastEvents)
let porCentCol1 = calcPorcAssist(evCol1)

let evCol2 = findMinAttendance(pastEvents)
let porCentCol2 = calcPorcAssist(evCol2)

let evCol3 =findMaxCapacity(pastEvents)

let col1 = document.getElementById("tr1")

col1.innerHTML=` <td> ${evCol1.name +"  "} (${porCentCol1}%) </td> <td> ${evCol2.name  +"  "} (${porCentCol2}%)  </td> <td> ${evCol3.name}</td> `

let arrTabla2=calcRevenuesNPercentofAttendance(pastEvents)
let arrTabla3=calcRevenuesNPercentofAttendance(upcommingEvents)
  
let col2 = document.getElementById("tr2")
let col3 = document.getElementById("tr3")

let stringTabla2
let stringTabla3
let dataToHTML
let dataToHTML2

stringTabla2 = arrTabla2.map(e => (`<tr>
            <td>${e[0]} </td>
            <td>${e[1]} </td>        
            <td>(${e[2]}%)</td>
            </tr> 
`)

);
stringTabla3 = arrTabla3.map(e => (`<tr>
            <td>${e[0]} </td>
            <td>${e[1]} </td>        
            <td>(${e[2]}%)</td>
            </tr> 
`)

);


console.log("upcommingEvents" + upcommingEvents)
console.log("pastEvents" + pastEvents)
console.log("arrTabla3" + arrTabla3)
console.log("arrTabla2" + arrTabla2)

dataToHTML= stringTabla2.join(' ')


col2.innerHTML=dataToHTML

dataToHTML2= stringTabla3.join(' ')


col3.innerHTML=dataToHTML2



                 }
)


function calcRevenuesNPercentofAttendance(arr){
  
let catArray =[]
let resp=[]
let gain=0
let assist =0
let capac=0
//se hallan las categorías existentes

  arr.forEach(function (i) {
    if(!catArray.includes(i.category)){
      catArray.push(i.category);
    }
  });
  
  console.log("arr "+ JSON.stringify(arr))
// se calcula ganancia y porcentaje por cada categoría:
catArray.forEach(e => {
    arr.forEach(el => { if(e==el.category){
    //dada una categoría en e, se calcula la ganancia y el porcentaje de asistencia:
    
    
    if(el.assistance == undefined){
    gain = gain+(el.price * el.estimate)
    assist = assist +(el.estimate)
    capac = capac+(el.capacity)
    console.log("el.estimate "+ el.estimate)
  }else{
    gain = gain+(el.price * el.assistance)
    assist = assist +(el.assistance)
    capac = capac+(el.capacity)
    console.log("el.assistance "+ el.assistance)}


  }
    });
    //se guardan en un array los cálculos por cada categoría:
   resp.push([e, gain, (100*assist/capac).toFixed(1)])
}); 

return resp
}

  
 function findMaxAttendance(z){
   
let assistanceEvent = z.map(element => element.assistance )

  assistanceEvent = assistanceEvent.filter(e => e!=undefined)
  let max = Math.max.apply(Number, assistanceEvent)
  
    let eventsMaxAttendance = z.filter(x=>x.assistance==max)
    return eventsMaxAttendance[0]
 
  }

 function findMinAttendance(z){
  
let assistanceEvent = dataEvents.map(element => element.assistance )

assistanceEvent = assistanceEvent.filter(e => e!=undefined)
let min = Math.min.apply(Number, assistanceEvent)

  let eventsMinAttendance = dataEvents.filter(x=>x.assistance==min)
  
  return eventsMinAttendance[0]

 }

 function findMaxCapacity(z){
   
 
let capacityEvent = z.map(element => element.capacity )

capacityEvent = capacityEvent.filter(e => e!=undefined)
let max = Math.max.apply(Number, capacityEvent)

  
  let eventsMaxCapacity = z.filter(x=>x.capacity==max)
 console.log(eventsMaxCapacity)
  return eventsMaxCapacity[0]

 }

 function calcPorcAssist(x){
  n = 100*x.assistance/x.capacity
  
  return n.toFixed(1)

 }

 

