// este archivo se encarga del login nomas, nada raro

// funcion principal: agarra los inputs, busca el usuario en el array y si lo encuentra lo manda a su pantalla
function login() {
    // me traigo lo que escribio el usuario
    let usuario = document.querySelector("#txtUserLogin").value;
    let password = document.querySelector("#txtPassLogin").value;

    // arranco con null y si lo encuentro lo guardo aca
    let usuarioEncontrado = null;

    // recorro el array de usuarios uno por uno hasta encontrar el match
    // (no uso find ni nada raro porque es prog 1, todo con for basico)
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].usuario == usuario && usuarios[i].password == password) {
            usuarioEncontrado = usuarios[i];
        }
    }

    if (usuarioEncontrado != null) {
        // si lo encontro, guardo el usuario y el rol en localStorage
        // asi en las otras paginas el nav.js sabe quien esta logueado
        localStorage.setItem("usuarioLogueado", usuarioEncontrado.usuario);
        localStorage.setItem("rolLogueado", usuarioEncontrado.rol);

        // segun el rol lo mando a la pantalla que corresponde
        if (usuarioEncontrado.rol == "admin") {
            // el admin va directo a postulaciones pendientes (asi lo pide la letra)
            window.location.href = "postulaciones_pendientes.html";
        } else if (usuarioEncontrado.rol == "postulante") {
            // el postulante va a ver las ofertas
            window.location.href = "ofertas.html";
        }
    } else {
        // no lo encontro, le muestro el cartelito de error que estaba escondido
        let pError = document.querySelector("#pErrorLogin");
        pError.innerHTML = "Usuario o contraseña incorrectos.";
        pError.style.display = "block";
    }
}

// engancho la funcion al boton de ingresar
document.querySelector("#btnLogin").addEventListener("click", login);
