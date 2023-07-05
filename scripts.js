// Obtener los elementos del área de texto y el contador
var area_texto = document.getElementById("area_texto");
var contador = document.getElementById("contador");


function procesarTexto(accion) {
  var texto = document.getElementById("area_texto").value;
  var areaTexto1 = document.getElementById("area2-text1");
  // Obtenemos el elemento textarea
  var areaDesencriptado = document.getElementById("area_desencriptado");
  var imagen = document.getElementById("imagen_areaIzq");
  var botonCopiar = document.getElementById("botonCopiar");

  if (texto === "") {
    areaTexto1.style.display = "block";
    // Ocultamos el textarea
    areaDesencriptado.style.display = "none";
    imagen.style.display = "block";
    botonCopiar.style.display = "none";
  } else {
    areaTexto1.style.display = "none";
    var resultado = (accion === "encriptar") ? encriptar(texto) : desencriptar(texto);
    // Cambiamos el value del textarea con el resultado
    areaDesencriptado.value = resultado;
    // Mostramos el textarea
    areaDesencriptado.style.display = "block";
    imagen.style.display = "none";
    botonCopiar.style.display = "block";
  }
}

// Definir una función que actualice el contador cada vez que se cambie el texto
function actualizarContador() {
  // Obtener el número máximo de caracteres permitidos
  var maximo = parseInt(area_texto.getAttribute("maxlength"));
  // Obtener el número de caracteres ingresados
  var ingresados = area_texto.value.length;
  // Calcular el número de caracteres disponibles
  var disponibles = maximo - ingresados;
  // Mostrar el número de caracteres disponibles en el elemento contador
  contador.textContent = disponibles;
}

// Llamar a la función al cargar la página
actualizarContador();

// Agregar un evento al área de texto para llamar a la función cada vez que se cambie el texto
area_texto.addEventListener("input", actualizarContador);


function encriptarTexto() {
  procesarTexto("encriptar");
}

function desencriptarTexto() {
  procesarTexto("desencriptar");
}

function encriptar(texto) {
  var encriptado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  return encriptado;
}

function desencriptar(textoEncriptado) {
  var desencriptado = textoEncriptado
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  return desencriptado;
}

function copiarTexto() {
  // Obtenemos el value del textarea
  var textoEncriptado = document.getElementById("area_desencriptado").value;
  var textarea = document.createElement("textarea");
  textarea.value = textoEncriptado;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  alert("Texto encriptado copiado al portapapeles: " + textoEncriptado);
}
