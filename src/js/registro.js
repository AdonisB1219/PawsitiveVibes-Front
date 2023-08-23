const nombre = document.getElementById("nombre");
const numtel = document.getElementById("numtel");
const email = document.getElementById("email");
const contraseña = document.getElementById("contraseña");
const confirmacontra = document.getElementById("confirmacontra");
const terminosalert = document.getElementById("terminos-alert");
const terminos = document.getElementById("terminos");
const btnregistrame = document.getElementById("btnregistrame");
const btnTerminos = document.getElementById("btnTerminos");
const imgPerfil = document.querySelectorAll('input[type=radio]');

//Para que al cargar la imagen no exista un boton seleccionado de forma predeterminada
imgPerfil.forEach(radio => {
    radio.checked = false;
});
terminos.checked = false;

function limpiar(){

    nombre.value = '';
    numtel.value = '';
    email.value = '';
    contraseña.value = '';
    confirmacontra.value = '';
   // terminos.value = '';
   

    //Funcion para limpiar los checkbox
    imgPerfil.forEach(radio => {
        radio.checked = false;
    });
    terminos.checked = false;
}

const regexCorreo = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexTel =  /^(?!.*(\d).*\3)\d{0,10}$/;
const regexContra = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

btnregistrame.addEventListener("click", (function (event) {

    event.preventDefault();
    if(validarDatos()){
        imgPerfil.forEach(img => {
            if (img.checked){
                imgSelec = img;
            }});
        let usuario = {"nombre":nombre.value, "numtel":numtel.value, "email": email.value, "contraseña":contraseña.value, "imgPerfil": imgSelec.id};
        let usuarios = [];
        let usuarioRepetido;
        if(window.localStorage.getItem("usuarios") != null){
            let json = (JSON.parse(window.localStorage.getItem("usuarios")));

            //agrega usuarios del localStorage
            json.forEach(u => {
                if(usuario.email == u.email){
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        html: 'Ya hay una cuenta con este correo',
                      });
                    usuarioRepetido = true;
                }
                
                usuarios.push(u);
              
            });

            }

            //Agrega usuario registrado
            if(!usuarioRepetido)
            {
                usuarios.push(usuario);
                Swal.fire(
                    'Éxito',
                    'Te registraste con éxito',
                    'success'
                );
                limpiar();
            }


        window.localStorage.setItem("usuarios", JSON.stringify(usuarios));

    }
 
}))

function validarDatos() {
   let isValid = true;


    nombre.value = nombre.value.trim();
    email.value = email.value.trim();
    numtel.value = numtel.value.trim();
    contraseña.value = contraseña.value.trim();
    confirmacontra.value = confirmacontra.value.trim();


    nombre.style.border = ""
    email.style.border = ""
    numtel.style.border = ""
    contraseña.style.border = ""
    confirmacontra.style.border = ""
    terminos.style.border = ""

    limpiarAlerta("nombre-alert");
    limpiarAlerta("correo-alert");
    limpiarAlerta("tel-alert");
    limpiarAlerta("contraseña-alert");
    limpiarAlerta("confirmacontra-alert");
    limpiarAlerta("terminosalert");
    limpiarAlerta("terminos");





    //NOMBRE
    if (nombre.value.length <= 2 || !isNaN(nombre.value)) {
        displayAlert("Por favor, ingresa tu nombre completo.", "nombre-alert", "alert-danger");
        isValid = false;
        nombre.style.border = "solid 2px red"

    }


    //Correo electrónico
    if (!regexCorreo.test(email.value)) {
        displayAlert("Por favor, ingresa un correo electrónico válido.", "correo-alert", "alert-danger");
        isValid = false;
        email.style.border = "solid 2px red"

    }


    //Teléfono
    y=0;
    numtel.value.split("").forEach(n=>y+=parseInt(n));
    if(!regexTel.test(numtel.value) || y < 15){
        displayAlert("Por favor, ingresa un número de teléfono válido.", "tel-alert", "alert-danger");
        isValid = false;
        numtel.style.border = "solid 2px red"

    }

    //Contraseña
    if (!regexContra.test(contraseña.value)) {
        displayAlert("Debe contener al menos: \n Una letra mayúscula,  \n una letra minúscula, \n un número \n, un caracter especial (#?!@$ %^&*-) \n , una longitud mínima de 8 caracteres.", "contraseña-alert", "alert-danger");
        isValid = false;
        contraseña.style.border = "solid 2px red"

    }

    if (contraseña.value!==confirmacontra.value) {
        displayAlert("Las contraseñas tienen que ser iguales", "confirmacontra-alert", "alert-danger");
        isValid = false;
        confirmacontra.style.border = "solid 2px red"

    }

    //checkbox
    if (!terminos.checked) {
        terminos.style.border = "solid 2px red"
        displayAlert("Por favor, acepta términos y condiciones", "terminosalert", "alert-danger");
        isValid = false;
    }

    return isValid;
}//funcion validarDatos


// Función para mostrar alertas personalizadas
function displayAlert(message, alertContainerId, type) {
    // Crea un elemento de alerta
    const alertElement = document.createElement("div");
    alertElement.classList.add("alert", type);
    alertElement.textContent = message;

    // Encuentra el contenedor de alerta correspondiente por su id
    const alertContainer = document.getElementById(alertContainerId);

    // Limpia el contenedor antes de agregar una nueva alerta
    alertContainer.innerHTML = "";

    // Inserta el elemento de alerta en el contenedor
    alertContainer.appendChild(alertElement);
  }

function limpiarAlerta(alertContainerId){
    const alertContainer = document.getElementById(alertContainerId);
    alertContainer.innerHTML = "";
}
