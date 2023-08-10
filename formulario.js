var formulario = document.querySelector("#form")

formulario.onsubmit = function(e) {
//Faltaba Default
  e.preventDefault();
  
  var n = formulario.elements[0]//name
  var e = formulario.elements[1]//age
  var na = formulario.elements[2]//nationality

  var nombre = n.value
  var edad = e.value

  var i = na.selectedIndex
  var nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  //Validar nombre
  if (nombre.length === 0) {
    n.classList.add("error")
  }
  //validar edad
  //corregí la edad máxima contemplando al abuelito más old que conozco
  if (edad < 18 || edad > 98) {
    e.classList.add("error") 
  }

if (nombre.length > 0 
  //ajuste la comparación para contemplar a la gente que tiene 18 y también la máxima
  && (edad >= 18 
    && edad <= 98) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
  n.value="";
  e.value="";
}

var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar)

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

var lista = document.getElementById("lista-de-invitados")

var elementoLista = document.createElement("div")
//Se corrige Added por add
elementoLista.classList.add("elemento-lista")
lista.appendChild(elementoLista)

var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre; 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
  //corrección de nomber
var spanNombre = document.createElement("span");
var inputNombre = document.createElement("input");
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor; 
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


var botonBorrarInvitado = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}