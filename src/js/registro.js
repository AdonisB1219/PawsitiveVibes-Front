const nombre = document.getElementById("nombre");
const numtel = document.getElementById("numtel");
const email = document.getElementById("email");
const contraseña = document.getElementById("contraseña");
const confirmacontra = document.getElementById("confirmacontra");
const terminosalert = document.getElementById("terminos-alert");
const terminos = document.getElementById("terminos");
const btnregistrame = document.getElementById("btnregistrame");

const regexCorreo = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexTel = /^(\+?52)?\s*\(?\d{2,3}\)?[-.\s]?\d{2,3}[-.\s]?\d{2,4}$/;
const regexContra = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

btnregistrame.addEventListener("click", (function (event) {

    event.preventDefault();
console.log("Hoola");
    if(validarDatos()){
        let usuario = {"nombre":nombre.value, "numtel":numtel.value, "email": email.value, "contraseña":contraseña.value};
        window.localStorage.setItem("usuario", JSON.stringify(usuario));
        Swal.fire(
            'Éxito',
            'Te registraste con éxito',
            'success'
        );
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



    //NOMBRE
    if (nombre.value.length <= 3 || !isNaN(nombre.value)) {
        displayAlert("Por favor, ingresa tu nombre completo.", "nombre-alert", "alert-danger");
        isValid = false;
        nombre.style.border = "solid 2px red"

    }


    //Correo electrónico
    if (!regexCorreo.test(email.value)) {
        displayAlert("Por favor, ingresa un correo electronico valido.", "email-alert", "alert-danger");
        isValid = false;
        email.style.border = "solid 2px red"

    }


    //Teléfono
    if (!regexTel.test(numtel.value)) {
        displayAlert("Por favor, ingresa un numero de telefono valido.", "numtel-alert", "alert-danger");
        isValid = false;
        numtel.style.border = "solid 2px red"

    }

    //Contraseña
    if (!regexContra.test(contraseña.value)) {
        displayAlert("Debe contener al menos: \n Una letra mayúscula  \n Una letra minúscula \n Un número \n Un caracter especial \n Una longitud mínima de 8 caracteres", "contraseña-alert", "alert-danger");
        isValid = false;
        contraseña.style.border = "solid 2px red"

    }
    if (!contraseña.value==confirmacontra.value) {
        displayAlert("Las contraseñas tienen que ser iguales", "confirmacontra-alert", "alert-danger");
        isValid = false;
        confirmacontra.style.border = "solid 2px red"

    }

    //checkbox
    if (!terminos.checked) {
        terminos.style.border = "solid 2px red"
        displayAlert("Por favor, acepta terminos y condiciones", "terminos-alert", "alert-danger");
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
