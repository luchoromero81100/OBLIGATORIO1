// pantalla de editar oferta
// por ahora es un placeholder: cuando se conecte de verdad
// va a leer los inputs y modificar la oferta correspondiente en el array
function guardarEdicionOferta() {
    document.querySelector("#pMensajeEdicion").innerHTML = "Cambios guardados (placeholder).";
}

// engancho el boton de guardar (solo existe en editar_oferta.html)
let btnGuardarOferta = document.querySelector("#btnGuardarOferta");
if (btnGuardarOferta != null) {
    btnGuardarOferta.addEventListener("click", guardarEdicionOferta);
}
