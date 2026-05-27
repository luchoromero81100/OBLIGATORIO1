// este script lo importo en todas las paginas
// se encarga de 2 cosas:
// 1) mostrar y ocultar los items del menu de arriba segun el rol del que esta logueado
// 2) si alguien quiere meterse a una pagina que no le toca (escribiendo la url a mano por ejemplo) lo rebota al login

// agarro el rol que se guardo cuando hizo login (puede ser "admin", "postulante" o null si no esta logueado)
let rolLogueado = localStorage.getItem("rolLogueado");

// saco el nombre del archivo html de la url actual
// por ejemplo, si la url termina en /ofertas.html, nombrePagina queda como "ofertas.html"
let paginaActual = window.location.pathname;
let partes = paginaActual.split("/");
let nombrePagina = partes[partes.length - 1];

// estas paginas solo las puede ver el admin
let paginasAdmin = [
    "gestion_ofertas.html",
    "crear_oferta.html",
    "editar_oferta.html",
    "estadisticas.html",
    "postulaciones_pendientes.html",
    "procesar_postulacion.html"
];

// y estas solo el postulante
let paginasPostulante = ["mis_postulaciones.html"];

// chequeo de acceso: si esta entrando a una pagina que no le pertenece, lo mando al login
// indexOf devuelve menos uno cuando el valor no esta en el array, asi me fijo si la pagina actual esta en la lista
if (paginasAdmin.indexOf(nombrePagina) != -1 && rolLogueado != "admin") {
    window.location.href = "login.html";
}

if (paginasPostulante.indexOf(nombrePagina) != -1 && rolLogueado != "postulante") {
    window.location.href = "login.html";
}

// funcion ayudita para mostrar u ocultar un li del menu por su id
// si mostrar es true le saco el display, si es false le pongo display none
function mostrarItem(idItem, mostrar) {
    let item = document.querySelector("#" + idItem);
    // hago el if por si no existe el li en esa pagina (asi no rompe)
    if (item != null) {
        if (mostrar) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    }
}

// segun quien esta logueado, prendo o apago cada item del menu
if (rolLogueado == "admin") {
    // el admin no ve cosas de postulante ni el login ni el registro
    mostrarItem("liLogin", false);
    mostrarItem("liRegistro", false);
    mostrarItem("liOfertas", false);
    mostrarItem("liDestacadas", false);
    mostrarItem("liMisPostulaciones", false);
    // sus opciones: pendientes, gestionar, crear oferta, estadisticas y cerrar sesion
    mostrarItem("liPendientes", true);
    mostrarItem("liGestion", true);
    mostrarItem("liCrearOferta", true);
    mostrarItem("liEstadisticas", true);
    mostrarItem("liCerrarSesion", true);
} else if (rolLogueado == "postulante") {
    // postulante: solo ve sus 3 cosas y cerrar sesion
    mostrarItem("liLogin", false);
    mostrarItem("liRegistro", false);
    mostrarItem("liOfertas", true);
    mostrarItem("liDestacadas", true);
    mostrarItem("liMisPostulaciones", true);
    mostrarItem("liPendientes", false);
    mostrarItem("liGestion", false);
    mostrarItem("liCrearOferta", false);
    mostrarItem("liEstadisticas", false);
    mostrarItem("liCerrarSesion", true);
} else {
    // no esta logueado: solo iniciar sesion y crear cuenta
    mostrarItem("liLogin", true);
    mostrarItem("liRegistro", true);
    mostrarItem("liOfertas", false);
    mostrarItem("liDestacadas", false);
    mostrarItem("liMisPostulaciones", false);
    mostrarItem("liPendientes", false);
    mostrarItem("liGestion", false);
    mostrarItem("liCrearOferta", false);
    mostrarItem("liEstadisticas", false);
    mostrarItem("liCerrarSesion", false);
}

// cuando hace click en cerrar sesion, le borro lo guardado en localStorage
// el href del link ya lo lleva al login solo
let linkCerrar = document.querySelector("#linkCerrarSesion");
if (linkCerrar != null) {
    linkCerrar.addEventListener("click", function () {
        localStorage.removeItem("usuarioLogueado");
        localStorage.removeItem("rolLogueado");
    });
}
