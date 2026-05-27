// buscador de la pantalla de estadisticas
// recorre la tabla y oculta las filas cuyo titulo no coincide con lo escrito
function filtrarEstadisticas() {
    let input = document.querySelector("#buscadorEstadisticas");
    if (input == null) {
        return;
    }

    let filtro = input.value.toUpperCase();
    let tabla = document.querySelector("#tablaEstadisticas");
    let filas = tabla.getElementsByTagName("tr");

    // arranco en 1 para saltarme la fila del thead
    for (let i = 1; i < filas.length; i++) {
        let celdas = filas[i].getElementsByTagName("td");
        let mostrar = false;

        // me fijo solo en la primera celda (titulo de la oferta)
        if (celdas[0] != null && celdas[0].innerText.toUpperCase().indexOf(filtro) > -1) {
            mostrar = true;
        }

        if (mostrar) {
            filas[i].style.display = "";
        } else {
            filas[i].style.display = "none";
        }
    }
}

// engancho el evento al input del buscador
let buscadorEstadisticas = document.querySelector("#buscadorEstadisticas");
if (buscadorEstadisticas != null) {
    buscadorEstadisticas.addEventListener("keyup", filtrarEstadisticas);
}
