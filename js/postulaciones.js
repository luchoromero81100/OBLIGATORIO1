// aca esta todo lo de postulaciones: el array, mostrar las pendientes y crear nuevas

// array de postulaciones precargadas (mock para que tenga datos al abrir)
// los ids siguen el formato JOB_nroAutoincremental como pide la letra
// arme un mix realista: algunas pendientes, una aceptada, una rechazada
// usuario1 es el que tiene mas pendientes (eso despues lo uso en estadisticas)
let postulaciones = [
    {
        id: "JOB_1",
        postulante: "usuario1",
        oferta: "Pasante Backend",
        empresa: "Sabre",
        estado: "Pendiente"
    },
    {
        id: "JOB_2",
        postulante: "usuario1",
        oferta: "Desarrollador Full Stack",
        empresa: "Globant",
        estado: "Pendiente"
    },
    {
        id: "JOB_3",
        postulante: "usuario1",
        oferta: "Analista de Datos",
        empresa: "Mercado Libre",
        estado: "Pendiente"
    },
    {
        id: "JOB_4",
        postulante: "usuario2",
        oferta: "Especialista en Marketing Digital",
        empresa: "Despegar",
        estado: "Pendiente"
    },
    {
        id: "JOB_5",
        postulante: "usuario3",
        oferta: "Consultor SAP Junior",
        empresa: "Accenture",
        estado: "Pendiente"
    },
    {
        // esta ya esta aceptada para mostrar el caso en mis postulaciones
        id: "JOB_6",
        postulante: "usuario1",
        oferta: "Diseñador UX/UI",
        empresa: "PedidosYa",
        estado: "Aceptada"
    },
    {
        // y esta esta rechazada para mostrar el otro caso
        id: "JOB_7",
        postulante: "usuario2",
        oferta: "Desarrollador Web",
        empresa: "Tech Corp",
        estado: "Rechazada"
    }
];

// contador para el id de la proxima postulacion
// como ya tengo 7 cargadas, arranco en 8
let proximoNumeroPostulacion = 8;


// tabla de postulaciones pendientes (postulaciones_pendientes.html)
// recorre el array, filtra solo las que estan pendientes y arma una fila por cada una
// con un boton procesar que lleva a la pantalla de procesar_postulacion.html
function mostrarPostulacionesPendientes() {
    let tabla = document.querySelector("#tbodyPostulacionesPendientes");

    // si no estoy en la pantalla de pendientes, no hago nada
    if (tabla == null) {
        return;
    }

    let texto = "";

    // recorro todas las postulaciones y agarro solo las pendientes
    for (let i = 0; i < postulaciones.length; i++) {
        if (postulaciones[i].estado == "Pendiente") {
            texto = texto + "<tr>";
            texto = texto + "<td>" + postulaciones[i].id + "</td>";
            texto = texto + "<td>" + postulaciones[i].postulante + "</td>";
            texto = texto + "<td>" + postulaciones[i].oferta + "</td>";
            texto = texto + "<td>" + postulaciones[i].empresa + "</td>";
            texto = texto + "<td>" + postulaciones[i].estado + "</td>";
            texto = texto + "<td>";
            // boton procesar: lo hago como link asi se ve igual pero navega
            texto = texto + "<a href='procesar_postulacion.html' class='boton boton-pequeno'>Procesar</a>";
            texto = texto + "</td>";
            texto = texto + "</tr>";
        }
    }

    tabla.innerHTML = texto;
}


// llamada inicial
// al cargar la pagina muestro las pendientes (si no estoy en esa pagina la funcion sale sin hacer nada)
mostrarPostulacionesPendientes();


// crear postulacion nueva con id autoincremental
// esta funcion la dejo lista para cuando enganche el boton postularme
// agarra el nombre del postulante, el titulo y la empresa y arma el objeto con el id JOB_nroAutoincremental
// despues lo pushea al array y devuelve la postulacion nueva
function crearPostulacion(nombrePostulante, tituloOferta, nombreEmpresa) {
    let nuevaPostulacion = {
        id: "JOB_" + proximoNumeroPostulacion,
        postulante: nombrePostulante,
        oferta: tituloOferta,
        empresa: nombreEmpresa,
        estado: "Pendiente" // toda postulacion arranca como pendiente
    };
    postulaciones.push(nuevaPostulacion);
    // sumo 1 al contador para que la proxima tenga otro id
    proximoNumeroPostulacion++;
    return nuevaPostulacion;
}
