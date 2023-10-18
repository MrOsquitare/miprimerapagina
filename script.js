//alert("Hola este es mi Javascript");

// let nombre = "martha";
// console.log(nombre);

//SELECCIONAR ELEMENTO

// let nombre2 = "martha";

// let titulo = document.querySelector("#tituloacercademi");
// titulo.innerHTML = nombre;

// //CONDICIONALES

// let  textoTitulo = titulo.innerText;
// console.log(textoTitulo);

// if (textoTitulo == nombre1) {
//     titulo.innerHTML = "Sobre mi";
// } else {
//     console.log ("no se cumple");
// }

// //FUNCIONES

// let nombre = "Oscar";
// let ciudad = "Cali";
// let color = "Negro";

// let parrafo = document.querySelector(".parrafo2");

// function cambiarTexto (nombre, ciudad, color) {
//     let contenido = ''
// }

//FORMULARIO

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});