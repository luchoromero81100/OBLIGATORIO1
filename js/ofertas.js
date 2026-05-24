// Array global con ofertas precargadas para mostrar en las pantallas
let ofertasLaborales = [
    {
        id: "#1",
        titulo: "Desarrollador de Integraciones Junior",
        empresa: "Descartes",
        descripcion: "Participar en el desarrollo de sitios web y mantenimiento de aplicaciones.",
        nivel: "Junior",
        area: "Tecnología",
        limitePostulaciones: "10",
        vacantes: "2",
        destacada: "Sí",
        estado: "Activa"
    },
    {
        id: "#2",
        titulo: "Analista de Marketing",
        empresa: "WASABI",
        descripcion: "Analizar campañas de marketing digital y proponer mejoras estratégicas.",
        nivel: "Senior",
        area: "Marketing",
        limitePostulaciones: "8",
        vacantes: "3",
        destacada: "Sí",
        estado: "Activa"
    },
    {
        id: "#3",
        titulo: "Analista de Marketing",
        empresa: "NOA",
        descripcion: "Analizar campañas de marketing digital y proponer mejoras estratégicas.",
        nivel: "Senior",
        area: "Marketing",
        limitePostulaciones: "8",
        vacantes: "3",
        destacada: "Sí",
        estado: "Activa"
    }
];

// Contador para el próximo ID de oferta
let proximoNumeroOferta = 4;


// Creacion de ofertas

function crearOfertaLaboral() {
    let tituloOferta = document.querySelector("#txtTituloOferta").value;
    let empresaOferta = document.querySelector("#txtEmpresaOferta").value;
    let descripcionOferta = document.querySelector("#txtDescripcionOferta").value;
    let nivelOferta = document.querySelector("#slcNivelOferta").value;
    let areaOferta = document.querySelector("#slcAreaOferta").value;
    let limitePostulacionesOferta = document.querySelector("#txtLimitePostulaciones").value;
    let cantidadVacantesOferta = document.querySelector("#txtCantidadVacantes").value;
    let esDestacada = document.querySelector("#chkOfertaDestacada").checked;

    let valorDestacada = "No";
    if (esDestacada) {
        valorDestacada = "Sí";
    }

    // Acá creo un objeto para el array de ofertas con todas las caracteristicas de arriba
    let ofertaNueva = {
        id: "#" + proximoNumeroOferta,
        titulo: tituloOferta,
        empresa: empresaOferta,
        descripcion: descripcionOferta,
        nivel: nivelOferta,
        area: areaOferta,
        limitePostulaciones: limitePostulacionesOferta,
        vacantes: cantidadVacantesOferta,
        destacada: valorDestacada,
        estado: "Activa"
    };
    
    // Acá lo pusheo en el array
    ofertasLaborales.push(ofertaNueva);
    proximoNumeroOferta++;

    document.querySelector("#pMensajeOferta").innerHTML = "Oferta creada correctamente.";

    limpiarFormularioOfertaLaboral();
    mostrarOfertasEnTablaAdministrador();
    mostrarOfertasEnTablaPostulante();
}


// Mostrar ofertas en tabla Admin

function mostrarOfertasEnTablaAdministrador() {
    let tablaAdmin = document.querySelector("#tbodyOfertasAdmin");

    if (tablaAdmin === null) {
        return;
    }

    let textoTablaAdministrador = "";

    for (let i = 0; i < ofertasLaborales.length; i++) {
        textoTablaAdministrador = textoTablaAdministrador + "<tr>";
        textoTablaAdministrador = textoTablaAdministrador + "<td>" + ofertasLaborales[i].id + "</td>";
        textoTablaAdministrador = textoTablaAdministrador + "<td>" + ofertasLaborales[i].titulo + "</td>";
        textoTablaAdministrador = textoTablaAdministrador + "<td>" + ofertasLaborales[i].empresa + "</td>";
        textoTablaAdministrador = textoTablaAdministrador + "<td>" + ofertasLaborales[i].nivel + "</td>";
        textoTablaAdministrador = textoTablaAdministrador + "<td>" + ofertasLaborales[i].area + "</td>";
        textoTablaAdministrador = textoTablaAdministrador + "<td>" + ofertasLaborales[i].limitePostulaciones + "</td>";
        textoTablaAdministrador = textoTablaAdministrador + "<td>" + ofertasLaborales[i].vacantes + "</td>";
        textoTablaAdministrador = textoTablaAdministrador + "<td>" + ofertasLaborales[i].destacada + "</td>";
        textoTablaAdministrador = textoTablaAdministrador + "<td>" + ofertasLaborales[i].estado + "</td>";
        textoTablaAdministrador = textoTablaAdministrador + "<td>";
        textoTablaAdministrador = textoTablaAdministrador + "<button type='button' class='boton boton-pequeno'>Editar</button> ";
        textoTablaAdministrador = textoTablaAdministrador + "<button type='button' class='boton boton-pequeno boton-secundario'>Cerrar oferta</button>";
        textoTablaAdministrador = textoTablaAdministrador + "</td>";
        textoTablaAdministrador = textoTablaAdministrador + "</tr>";
    }

    tablaAdmin.innerHTML = textoTablaAdministrador;
}


// Mostrar ofertas en tabla de usuarios

function mostrarOfertasEnTablaPostulante() {
    let tablaPostulante = document.querySelector("#tbodyOfertasPostulante");

    if (tablaPostulante === null) {
        return;
    }

    let textoTablaPostulante = "";

    for (let i = 0; i < ofertasLaborales.length; i++) {
        textoTablaPostulante = textoTablaPostulante + "<tr>";
        textoTablaPostulante = textoTablaPostulante + "<td>" + ofertasLaborales[i].titulo + "</td>";
        textoTablaPostulante = textoTablaPostulante + "<td>" + ofertasLaborales[i].empresa + "</td>";
        textoTablaPostulante = textoTablaPostulante + "<td>" + ofertasLaborales[i].descripcion + "</td>";
        textoTablaPostulante = textoTablaPostulante + "<td>" + ofertasLaborales[i].nivel + "</td>";
        textoTablaPostulante = textoTablaPostulante + "<td>" + ofertasLaborales[i].area + "</td>";
        textoTablaPostulante = textoTablaPostulante + "<td>";
        textoTablaPostulante = textoTablaPostulante + "<button type='button' class='boton boton-pequeno'>Postularme</button>";
        textoTablaPostulante = textoTablaPostulante + "</td>";
        textoTablaPostulante = textoTablaPostulante + "</tr>";
    }

    tablaPostulante.innerHTML = textoTablaPostulante;
}


// Limpiar inputs al crear oferta

function limpiarFormularioOfertaLaboral() {
    document.querySelector("#txtTituloOferta").value = "";
    document.querySelector("#txtEmpresaOferta").value = "";
    document.querySelector("#txtDescripcionOferta").value = "";
    document.querySelector("#txtLimitePostulaciones").value = "";
    document.querySelector("#txtCantidadVacantes").value = "";
    document.querySelector("#slcNivelOferta").value = "Junior";
    document.querySelector("#slcAreaOferta").value = "Tecnología";
    document.querySelector("#chkOfertaDestacada").checked = false;
}


// En la carga inciar, hago esto para eviat un erro en la consola al llamar al btnCrearOferta en casos donde no existe 

// Evento del botón crear oferta (solo existe en gestion_ofertas.html)
if (document.querySelector("#btnCrearOferta") !== null) {
    document.querySelector("#btnCrearOferta").addEventListener("click", crearOfertaLaboral);
}

// Mostrar ofertas en las tablas al cargar la página
mostrarOfertasEnTablaAdministrador();
mostrarOfertasEnTablaPostulante();
