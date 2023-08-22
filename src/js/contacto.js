//Contacto

//Mandamos llamar a los elementos de los formularios

let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let mensaje = document.getElementById("mensaje");
let tel = document.getElementById("tel");
let seleccion = document.getElementById("motivo");
let terminos = document.getElementById("exampleCheck1");
let enviar = document.getElementById("enviar");

//Llamar a los mensajes de error
let errorNombre = document.getElementById("errorNombre");
let errorCorreo = document.getElementById("errorCorreo");
let errorMensaje = document.getElementById("errorMensaje");
let errorTel = document.getElementById("errorTel");
let errorMotivo = document.getElementById("errorMotivo");
let errorTerminos = document.getElementById("errorTerminos");



let errores = 0;
let formularioCorrecto = true;

const regexCorreo = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexTel =  /^(?!.*(\d).*\3)\d{0,10}$/;

const btn = document.getElementById('enviar');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   if(validarDatos()){

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'contacto';

   emailjs.sendForm(serviceID, templateID, this)
   .then(() => {
     btn.value = 'Send Email';
     Swal.fire(
      'Éxito',
      'El mensaje fue enviado correctamente',
      'success'
    )
    // Limpiar los campos después de enviar el formulario
        nombre.value = '';
        email.value = '';
        mensaje.value = '';
        tel.value = '';
        opcion.selectedIndex = 0; 
        terminos.checked = false;

        // Restablecer los estilos y mensajes de error
        nombre.style.border = '';
        email.style.border = '';
        mensaje.style.border = '';
        tel.style.border = '';
        opcion.style.border = '';
        terminos.style.border = '';
        errorNombre.style.display = '';
        errorCorreo.style.display = '';
        errorMensaje.style.display = '';
        errorTel.style.display = '';
        errorMotivo.style.display = '';
        errorTerminos.style.display = '';
   }, (err) => {
     btn.value = 'Send Email';
     alert(JSON.stringify(err));
   });
 }
});




function validarDatos(){
    errores = 0;
    
    
   nombre.value = nombre.value.trim();
   email.value = email.value.trim();
   mensaje.value = mensaje.value.trim();

   errorNombre.style.display = ""
   errorCorreo.style.display = ""
   errorMensaje.style.display = ""
   errorTel.style.display = ""
   errorMotivo.style.display = ""
   errorTerminos.style.display = ""

   nombre.style.border=""
   email.style.border=""
   mensaje.style.border=""
   tel.style.border=""
   opcion.style.border=""
   terminos.style.border=""
    

    //NOMBRE
    if(nombre.value.length<3 || !isNaN(nombre.value)){
        errorNombre.style.display = "block"
        nombre.style.border="solid 2px red"
        errores ++;   
    }


    //Correo electrónico
    if(!regexCorreo.test(email.value)){
        errorCorreo.style.display = "block"
        email.style.border="solid 2px red"
        errores ++;
    }
    

    //Mensaje
    if(mensaje.value.length<=20){
        errorMensaje.style.display = "block"
        mensaje.style.border="solid 2px red"
        errores ++;
    }


    //Teléfono
    y=0;
    tel.value.split("").forEach(n=>y+=parseInt(n));
    if(!regexTel.test(tel.value) || y < 15){
        errorTel.style.display = "block"
       tel.style.border="solid 2px red"
       errores ++;
    }


    //Motivo

    if(opcion.value == ""){
        errorMotivo.style.display = "block"
        opcion.style.border="solid 2px red"
        errores ++;
    }
   

    //checkbox
    if(!terminos.checked){
        errorTerminos.style.display = "block"
        terminos.style.border="solid 2px red"
        errores++;
    }
  
    //Alerta 
    if(errores == 0){
        return true;
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Revisa los datos ingresados',
            
          })
        return false;
    }
}//funcion validarDatos