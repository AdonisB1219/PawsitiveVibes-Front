const email = document.getElementById("email");
const password = document.getElementById("contrasena");
const boton = document.getElementById("btn-inicio");
const cuenta = document.getElementById("icono-cuenta");
var usuarios = [];

boton.addEventListener("click",function(event){
    event.preventDefault();
    let logeado = false;
    let json = (JSON.parse(window.localStorage.getItem("usuarios")));
        json.forEach(u => {
            if(u.email == email.value && u.contraseña == password.value){
                window.localStorage.setItem("usuario-logeado", JSON.stringify(u));
                logeado = true;
                setTimeout(window.location.href = "./index.html",3000);
            } 
        });

        if(JSON.parse(window.localStorage.getItem("usuario-logeado") != null)){
            cuenta.classList.add("logeado");
        }

        if(!logeado) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                html: 'Los datos no son válidos',
              })
        }
});