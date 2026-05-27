// aca esta todo lo de las ofertas laborales: el array, crearlas, mostrarlas en cada pantalla y cerrarlas

// array de ofertas precargadas (es lo que se ve en pantalla cuando abrimos la app)
// cada oferta es un objeto con todos los datos que pide la letra
// el id arranca con JOB_OFFER_ y un numero (formato que pide la consigna)
let ofertasLaborales = [
    {
        id: "JOB_OFFER_1",
        titulo: "Pasante Backend",
        empresa: "Sabre",
        descripcion: "Apoyar al equipo de desarrollo en la implementación de servicios backend para soluciones de la industria del turismo.",
        nivel: "Junior",
        area: "Tecnología",
        limitePostulaciones: "20",
        vacantes: "2",
        destacada: "Sí",
        estado: "Activa"
    },
    {
        id: "JOB_OFFER_2",
        titulo: "Desarrollador Full Stack",
        empresa: "Globant",
        descripcion: "Diseñar, desarrollar y mantener aplicaciones web utilizando React y Node.js para clientes internacionales.",
        nivel: "Semi-Senior",
        area: "Tecnología",
        limitePostulaciones: "15",
        vacantes: "3",
        destacada: "Sí",
        estado: "Activa"
    },
    {
        id: "JOB_OFFER_3",
        titulo: "Analista de Datos",
        empresa: "Mercado Libre",
        descripcion: "Analizar grandes volúmenes de datos para generar insights de negocio y dar soporte a la toma de decisiones.",
        nivel: "Semi-Senior",
        area: "Tecnología",
        limitePostulaciones: "12",
        vacantes: "2",
        destacada: "Sí",
        estado: "Activa"
    },
    {
        id: "JOB_OFFER_4",
        titulo: "Ingeniero DevOps",
        empresa: "dLocal",
        descripcion: "Automatizar pipelines de CI/CD y administrar infraestructura cloud sobre AWS para procesamiento de pagos.",
        nivel: "Senior",
        area: "Tecnología",
        limitePostulaciones: "10",
        vacantes: "1",
        destacada: "No",
        estado: "Activa"
    },
    {
        id: "JOB_OFFER_5",
        titulo: "Diseñador UX/UI",
        empresa: "PedidosYa",
        descripcion: "Diseñar interfaces y flujos de usuario para la app de delivery, trabajando junto al equipo de producto.",
        nivel: "Semi-Senior",
        area: "Diseño",
        limitePostulaciones: "10",
        vacantes: "2",
        destacada: "Sí",
        estado: "Activa"
    },
    {
        // esta la puse inactiva a proposito para que se vea distinta en gestionar ofertas
        id: "JOB_OFFER_6",
        titulo: "Especialista en Marketing Digital",
        empresa: "Despegar",
        descripcion: "Planificar y ejecutar campañas de performance marketing y SEO para mercados de Latinoamérica.",
        nivel: "Senior",
        area: "Marketing",
        limitePostulaciones: "8",
        vacantes: "1",
        destacada: "No",
        estado: "Inactiva"
    },
    {
        id: "JOB_OFFER_7",
        titulo: "Consultor SAP Junior",
        empresa: "Accenture",
        descripcion: "Participar en proyectos de implementación SAP, brindando soporte funcional a clientes corporativos.",
        nivel: "Junior",
        area: "Tecnología",
        limitePostulaciones: "15",
        vacantes: "4",
        destacada: "No",
        estado: "Activa"
    },
    {
        // esta la puse cerrada para que se vea como queda despues de cerrar una oferta
        id: "JOB_OFFER_8",
        titulo: "Desarrollador Java",
        empresa: "TCS",
        descripcion: "Desarrollar y mantener aplicaciones empresariales con Java, Spring Boot y bases de datos relacionales.",
        nivel: "Semi-Senior",
        area: "Tecnología",
        limitePostulaciones: "12",
        vacantes: "3",
        destacada: "No",
        estado: "Cerrada"
    },
    {
        id: "JOB_OFFER_9",
        titulo: "Analista de Recursos Humanos",
        empresa: "Santander",
        descripcion: "Gestionar procesos de selección, onboarding y desarrollo del talento interno del banco.",
        nivel: "Junior",
        area: "Administración",
        limitePostulaciones: "10",
        vacantes: "1",
        destacada: "No",
        estado: "Activa"
    },
    {
        id: "JOB_OFFER_10",
        titulo: "Desarrollador GeneXus",
        empresa: "GeneXus",
        descripcion: "Desarrollar aplicaciones empresariales utilizando la plataforma GeneXus y dar soporte a clientes globales.",
        nivel: "Semi-Senior",
        area: "Tecnología",
        limitePostulaciones: "10",
        vacantes: "2",
        destacada: "Sí",
        estado: "Activa"
    }
];

// contador para el id de la proxima oferta nueva
// como ya tengo 10 cargadas, arranco en 11
let proximoNumeroOferta = 11;


// crear oferta nueva (lo dispara el boton de la pantalla crear_oferta.html)
// agarra todos los inputs del form, arma un objeto con el id autoincremental
// y lo agrega al array. despues limpia el form y refresca las tablas
function crearOfertaLaboral() {
    // me traigo todos los valores del formulario
    let tituloOferta = document.querySelector("#txtTituloOferta").value;
    let empresaOferta = document.querySelector("#txtEmpresaOferta").value;
    let descripcionOferta = document.querySelector("#txtDescripcionOferta").value;
    let nivelOferta = document.querySelector("#slcNivelOferta").value;
    let areaOferta = document.querySelector("#slcAreaOferta").value;
    let limitePostulacionesOferta = document.querySelector("#txtLimitePostulaciones").value;
    let cantidadVacantesOferta = document.querySelector("#txtCantidadVacantes").value;
    let esDestacada = document.querySelector("#chkOfertaDestacada").checked;

    // el checkbox devuelve true o false, pero yo guardo la palabra "Sí" o "No" como string para que se vea lindo en la tabla
    let valorDestacada = "No";
    if (esDestacada) {
        valorDestacada = "Sí";
    }

    // armo el objeto nuevo con el id autoincremental que pide la letra
    let ofertaNueva = {
        id: "JOB_OFFER_" + proximoNumeroOferta,
        titulo: tituloOferta,
        empresa: empresaOferta,
        descripcion: descripcionOferta,
        nivel: nivelOferta,
        area: areaOferta,
        limitePostulaciones: limitePostulacionesOferta,
        vacantes: cantidadVacantesOferta,
        destacada: valorDestacada,
        estado: "Activa" // toda oferta nueva arranca como activa
    };

    // la pusheo al array y le sumo 1 al contador para la proxima
    ofertasLaborales.push(ofertaNueva);
    proximoNumeroOferta++;

    // mensajito de exito
    document.querySelector("#pMensajeOferta").innerHTML = "Oferta creada correctamente.";

    // limpio el form y refresco las tablas para que aparezca la oferta nueva al toque
    limpiarFormularioOfertaLaboral();
    mostrarOfertasEnTablaAdministrador();
    mostrarOfertasEnTablaPostulante();
}


// tabla del admin (gestion_ofertas.html)
// muestra todas las ofertas (activas, inactivas y cerradas) con sus botones de editar y cerrar
function mostrarOfertasEnTablaAdministrador() {
    let tablaAdmin = document.querySelector("#tbodyOfertasAdmin");

    // si no estoy en la pagina del admin, no hago nada y me voy
    // (esto se llama en todas las paginas asi que tengo que chequear)
    if (tablaAdmin == null) {
        return;
    }

    // voy armando todo el html de las filas en un string
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
        // boton editar: lleva a la pantalla de editar oferta
        textoTablaAdministrador = textoTablaAdministrador + "<a href='editar_oferta.html' class='boton boton-pequeno'>Editar</a> ";
        // boton cerrar: le paso el indice de la oferta para saber cual cerrar
        textoTablaAdministrador = textoTablaAdministrador + "<button type='button' class='boton boton-pequeno boton-secundario' onclick=\"cerrarOferta(" + i + ")\">Cerrar oferta</button>";
        textoTablaAdministrador = textoTablaAdministrador + "</td>";
        textoTablaAdministrador = textoTablaAdministrador + "</tr>";
    }

    // tiro todo el string al tbody de una sola vez
    tablaAdmin.innerHTML = textoTablaAdministrador;
}


// cerrar oferta (borrado logico)
// no la borro del array, solo le cambio el estado a "Cerrada" y refresco la tabla
function cerrarOferta(indice) {
    ofertasLaborales[indice].estado = "Cerrada";
    mostrarOfertasEnTablaAdministrador();
}


// tabla del postulante (ofertas.html)
// solo muestro ofertas activas (las cerradas o inactivas no le interesan al postulante)
function mostrarOfertasEnTablaPostulante() {
    let tablaPostulante = document.querySelector("#tbodyOfertasPostulante");

    // si no estoy en la pagina del postulante, me voy
    if (tablaPostulante == null) {
        return;
    }

    let textoTablaPostulante = "";

    for (let i = 0; i < ofertasLaborales.length; i++) {
        // filtro: solo las activas
        if (ofertasLaborales[i].estado == "Activa") {
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
    }

    tablaPostulante.innerHTML = textoTablaPostulante;
}


// tabla de destacadas (ofertas_destacadas.html)
// muestro solo las que estan marcadas como destacadas y que ademas siguen activas
// (no quiero mostrar destacadas que esten cerradas)
function mostrarOfertasDestacadas() {
    let tablaDestacadas = document.querySelector("#tbodyOfertasDestacadas");

    if (tablaDestacadas == null) {
        return;
    }

    let textoTablaDestacadas = "";

    for (let i = 0; i < ofertasLaborales.length; i++) {
        if (ofertasLaborales[i].destacada == "Sí" && ofertasLaborales[i].estado == "Activa") {
            textoTablaDestacadas = textoTablaDestacadas + "<tr>";
            textoTablaDestacadas = textoTablaDestacadas + "<td>" + ofertasLaborales[i].titulo + "</td>";
            textoTablaDestacadas = textoTablaDestacadas + "<td>" + ofertasLaborales[i].empresa + "</td>";
            textoTablaDestacadas = textoTablaDestacadas + "<td>" + ofertasLaborales[i].descripcion + "</td>";
            textoTablaDestacadas = textoTablaDestacadas + "<td>" + ofertasLaborales[i].nivel + "</td>";
            textoTablaDestacadas = textoTablaDestacadas + "<td>" + ofertasLaborales[i].area + "</td>";
            textoTablaDestacadas = textoTablaDestacadas + "<td>";
            textoTablaDestacadas = textoTablaDestacadas + "<button type='button' class='boton boton-pequeno'>Postularme</button>";
            textoTablaDestacadas = textoTablaDestacadas + "</td>";
            textoTablaDestacadas = textoTablaDestacadas + "</tr>";
        }
    }

    tablaDestacadas.innerHTML = textoTablaDestacadas;
}


// limpia los inputs del form despues de crear una oferta
// asi cuando creo otra el form arranca vacio
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


// enganches y carga inicial

// el boton de crear oferta solo existe en crear_oferta.html, asi que primero chequeo
// (sino tira error en consola en las otras paginas)
if (document.querySelector("#btnCrearOferta") != null) {
    document.querySelector("#btnCrearOferta").addEventListener("click", crearOfertaLaboral);
}

// llamo a las 3 funciones de mostrar al cargar
// cada una se fija si esta en la pagina correcta antes de hacer algo, asi no rompe
mostrarOfertasEnTablaAdministrador();
mostrarOfertasEnTablaPostulante();
mostrarOfertasDestacadas();
