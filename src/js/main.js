//Contacto

//Mandamos llamar a los elementos de los formularios

let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let mensaje = document.getElementById("mensaje");
let tel = document.getElementById("tel");
let seleccion = document.getElementById("motivo");
let terminos = document.getElementById("exampleCheck1");
let enviar = document.getElementById("enviar");



let errores = 0;
let formularioCorrecto = true;

const regexCorreo = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexTel =  /^(\+?52)?\s*\(?\d{2,3}\)?[-.\s]?\d{2,3}[-.\s]?\d{2,4}$/;

const btn = document.getElementById('enviar');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   if(validarDatos()){

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_o57us32';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Mensaje enviado con éxito');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
}
});


function eliminarMensajeError(elemento) {
    const mensajeError = elemento.nextElementSibling;
    elemento.style.border="";
    if (mensajeError && mensajeError.classList.contains("mensajeError")) {
        mensajeError.remove();
    }
}

function validarDatos(){
    errores = 0;
    eliminarMensajeError(nombre);
    eliminarMensajeError(email);
    eliminarMensajeError(mensaje);
    eliminarMensajeError(tel);
    eliminarMensajeError(seleccion);
    eliminarMensajeError(enviar);
    
   nombre.value = nombre.value.trim();
   email.value = email.value.trim();
   mensaje.value = mensaje.value.trim();
    

    //NOMBRE
    if(nombre.value.length==0 || !isNaN(nombre.value)){
        nombre.insertAdjacentHTML("afterend",`
            <p style="color: red" class="mensajeError">*Escriba un nombre válido.</p>
        `);
        nombre.style.border="solid 2px red"
        errores ++;   
    }


    //Correo electrónico
    if(!regexCorreo.test(email.value)){
        email.insertAdjacentHTML("afterend", `
            <p style="color: red" class="mensajeError">*El correo electrónico no es válido</p>
        `)
        email.style.border="solid 2px red"
        errores ++;
    }
    

    //Mensaje
    if(mensaje.value.length==0){
        mensaje.insertAdjacentHTML("afterend",`
            <p style="color: red" class="mensajeError">*Escriba un mensaje.</p>
        `);
        mensaje.style.border="solid 2px red"
        errores ++;
    }


    //Teléfono
    if(!regexTel.test(tel.value)){
       tel.insertAdjacentHTML("afterend",`
       <p  style="color: red" class="mensajeError">*El teléfono no es válido</p>
       `)
       tel.style.border="solid 2px red"
       errores ++;
    }


    //Motivo

    if(seleccion.value == ""){
        seleccion.style.border="solid 2px red"
        errores ++;
    }
   

    //checkbox
    if(!terminos.checked){
        terminos.style.border="solid 2px red"
        errores++;
    }
  

    //Alerta 
    if(errores == 0){
        return true;
    } else return false;


}