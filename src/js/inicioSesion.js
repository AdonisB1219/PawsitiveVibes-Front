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
                    Swal.fire({
                        icon: 'success',
                        text: '¡Has iniciado sesión con éxito!',
                        width: 600,
                        padding: '3em',
                        color: '#000000',
                        position: 'top',
                        background: '#BFFEFF url(/images/trees.png)',
                        backdrop: `
                        rgba(51, 101, 138, 0.2)
                          url("https://i.gifer.com/origin/4f/4f5d1807ba2d22d9de3f1abb925cab9c_w200.gif")
                          no-repeat
                          bottom
                        `
                      });
                setTimeout(()=>window.location.href = "./index.html", 3000);
                    
            
}});

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