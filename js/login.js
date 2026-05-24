// Lo unico que hay aca es el login

function login() {
    let usuario = document.querySelector("#txtUserLogin").value;
    let password = document.querySelector("#txtPassLogin").value;

    let usuarioEncontrado = null;

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].usuario === usuario && usuarios[i].password === password) {
            usuarioEncontrado = usuarios[i];
        }
    }

    if (usuarioEncontrado !== null) {
        if (usuarioEncontrado.rol === "admin") {
            window.location.href = "postulaciones_activas.html";
        } else if (usuarioEncontrado.rol === "postulante") {
            window.location.href = "ofertas.html";
        }
    } else {
        document.querySelector("#pErrorLogin").innerHTML = "Usuario o contraseña incorrectos.";
    }
}

document.querySelector("#btnLogin").addEventListener("click", login);
