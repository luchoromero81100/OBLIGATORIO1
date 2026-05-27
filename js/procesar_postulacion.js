// pantalla de procesar postulacion (placeholder)
// la idea es: cuando el admin aprueba o rechaza, deberia cambiar el estado real
// en el array de postulaciones, pero por ahora solo cambia el cartelito en pantalla

// aprobar: pone el estado en aceptada y muestra mensajito
function aprobarPostulacion() {
    document.querySelector("#lblEstado").innerHTML = "Aceptada";
    document.querySelector("#pMensajeProcesar").innerHTML = "La postulación fue aprobada (placeholder).";
}

// rechazar: pone el estado en rechazada y muestra mensajito
function rechazarPostulacion() {
    document.querySelector("#lblEstado").innerHTML = "Rechazada";
    document.querySelector("#pMensajeProcesar").innerHTML = "La postulación fue rechazada (placeholder).";
}

// engancho los 2 botones (solo existen en procesar_postulacion.html)
let btnAprobar = document.querySelector("#btnAprobarPostulacion");
if (btnAprobar != null) {
    btnAprobar.addEventListener("click", aprobarPostulacion);
}

let btnRechazar = document.querySelector("#btnRechazarPostulacion");
if (btnRechazar != null) {
    btnRechazar.addEventListener("click", rechazarPostulacion);
}
