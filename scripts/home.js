



let cardContent = document.getElementById("contCard")
let stringHTML

function imprimirEventos(x) {
  for (events of x) {
    stringHTML += `<div class="cardHome card  mx-3 mb-3 rounded-0 p-3" >
<img  src="${events.image}" class="imghome card-img-top rounded-0" alt="Cistume-Party">
<div class="card-body">
  <h5 class="card-title">${events.name}</h5>
  <p class="card-text">${events.description}</p>
  <p class="card-text"><small class="text-muted">Price: $${events.price}</small></p>
  <a href="details.html" class="btn btn-primary">More</a>
</div>
</div>`
  }
}

imprimirEventos(data.events)

cardContent.innerHTML = stringHTML



