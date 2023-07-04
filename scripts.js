function procesarTexto(accion) {
  var texto = document.getElementById("area_texto").value;
  var areaTexto1 = document.getElementById("area2-text1");
  var areaTexto2 = document.getElementById("area2-text2");
  var imagen = document.getElementById("imagen_areaIzq");
  var botonCopiar = document.getElementById("botonCopiar");

  if (texto === "") {
    areaTexto1.style.display = "block";
    areaTexto2.style.display = "none";
    imagen.style.display = "block";
    botonCopiar.style.display = "none";
  } else {
    areaTexto1.style.display = "none";
    var resultado = (accion === "encriptar") ? encriptar(texto) : desencriptar(texto);
    areaTexto2.innerText = resultado;
    areaTexto2.style.display = "block";
    imagen.style.display = "none";
    botonCopiar.style.display = "block";
  }
}

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
  var textoEncriptado = document.getElementById("area2-text2").innerText;
  var textarea = document.createElement("textarea");
  textarea.value = textoEncriptado;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  alert("Texto encriptado copiado al portapapeles: " + textoEncriptado);
}