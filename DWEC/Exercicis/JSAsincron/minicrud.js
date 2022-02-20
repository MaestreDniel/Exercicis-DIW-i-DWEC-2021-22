let apiConcert = 'http://localhost:3000/conciertos';

/**
 * imprimirConcierto() es para consultar el listado completo de los conciertos, así que por defecto hace el GET
 * y recupera los conciertos registrados en la fake-api.
 */

function imprimirConcierto() {
  document.getElementById("editConcierto").style.display = "none";
  document.getElementById("concierform").style.display = "block";
  fetch(apiConcert)
    .then((response) => response.json())
    .then((conciertos) => {
      let txt = "<h2>Próximos conciertos</h2>";
      for (let i in conciertos) {
        txt += "<li>"
        txt += `<h3>${conciertos[i].titulo}</h3> <p>${conciertos[i].grupo} tocará en la fecha ${conciertos[i].fecha} en ${conciertos[i].lugar}.</p>`;
        txt += `<button onclick="imprimirEsteConcierto(${conciertos[i].id})">Ver</button>`;
        txt += `<button onclick="eliminarEvent(${conciertos[i].id})">Eliminar</button>`;
        txt += "</li>"
      }
      document.getElementById("conciertos").innerHTML = txt;
    })
    .catch(function (error) {
      document.getElementById("fetcherror").innerHTML = "Ha habido algún problema para mostrar los conciertos";
    })
}

// Se ejecuta directamente al cargar la página
imprimirConcierto();

/**
 * Se parece a imprimirConcierto(), pero en este caso se busca imprimir solamente aquel
 * concierto que indique el usuario.
 */

function imprimirEsteConcierto(concierto) {
  document.getElementById("concierform").style.display = "none";
  fetch(`http://localhost:3000/conciertos/${concierto}`)
    .then(response => response.json())
    .then((concierto) => {
      let txt = `<h2>Visualizando el concierto ${concierto.titulo} </h2>`
      txt += `<h3>${concierto.titulo}</h3> <p>${concierto.grupo} tocará en la fecha ${concierto.fecha} en ${concierto.lugar}.</p>`;
      txt += `<p>${concierto.descripcion}</p>`;
      txt += `<button id="editConcert" onclick="saltarFormularioEdit(${concierto.id})">Editar</button>`;
      txt += `<button onclick="eliminarEvent(${concierto.id})" class="delConcert">Eliminar</button>`;
      txt += `<button onclick="imprimirConcierto()" class="delConcert">Volver a conciertos</button>`;
      document.getElementById("conciertos").innerHTML = txt;
    })
    .catch(function (error) {
      document.getElementById("fetcherror").innerHTML = "Ha habido algún problema para mostrar los conciertos";
    })
}

// Se encarga de mostrar el formualario para editar conciertos
function saltarFormularioEdit(evento) {
  imprimirEsteConcierto(evento);
  document.getElementById("editConcierto").style.display = "block";
  document.getElementById("concierform").style.display = "none";
  document.getElementById("edit").addEventListener("click", function () {
    editEvent(evento);
  });
  return evento;
}

/**
 * añadirConcierto() es un fetch que utiliza POST con tal de guardar un nuevo concierto en la fake-api.
 * No está programado para aceptar imágenes, así que introduce una por defecto, el resto de campos sí que
 * los recoge a partir de los input del formulario
 */

function añadirConcierto() {
  fetch('http://localhost:3000/conciertos', {
      method: 'POST',
      body: JSON.stringify({
        titulo: document.getElementById("titulo").value,
        grupo: document.getElementById("grupo").value,
        fecha: document.getElementById("fecha").value,
        lugar: document.getElementById("lugar").value,
        descripcion: document.getElementById("descripcion").value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(imprimirConcierto())
    .then((document.getElementById("fetchresult").innerHTML = "Concierto añadido con éxito. En caso de que no lo veas, refresca la página."));

}

/**
 * Este fetch usa el método DELETE para eliminar un concierto de la fake-api. El parámetro evento
 * está determinado por el bóton de papelera que se imprime al lado de cada concierto, el cual recoge
 * la id de cada concierto.
 */

function eliminarEvent(evento) {
  fetch(`http://localhost:3000/conciertos/${evento}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.status == "200") {
        document.getElementById("fetchresult").innerHTML = `Concierto ${evento} eliminado correctamente`;
        imprimirConcierto();
      } else
        throw new Error(response.status)
      response.json()
    })
}

/**
 * Es muy similar a eliminarEvent. Este fetch usa el método PUT para modificar un concierto de la fake-api.
 * El parámetro concierto está determinado por el bóton de editar que se imprime al lado de cada concierto,
 * el cual recoge la id de cada concierto. Se diferencia de eliminar en que en este caso sí que recoge valores
 * del formulario para gestionar los datos
 */

function editEvent(concierto) {
  fetch(`http://localhost:3000/conciertos/${concierto}`, {
      method: 'PUT',
      body: JSON.stringify({
        titulo: document.getElementById("tituloo").value,
        grupo: document.getElementById("grupoo").value,
        fecha: document.getElementById("fechaa").value,
        lugar: document.getElementById("lugarr").value,
        descripcion: document.getElementById("descripcionn").value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(imprimirConcierto())
    .then((document.getElementById("fetchresult").innerHTML = `El concierto ${concierto} ha sido editado correctamente. Si no se te muestran los cambios aún, refresca la página.`))
}