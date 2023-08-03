const titulo = document.getElementById("titulo");
const categoria = document.getElementById("categoria");
const clave = document.getElementById("clave");
const numStock = document.getElementById("numStock");
const marca = document.getElementById("marca");
const descripcion = document.getElementById("descripcion");
//opcion multiple
const precio = document.getElementById("precio");
const descuento = document.getElementById("descuento");
const checkInfo = document.getElementById("checkInfo");
const boton = document.getElementById("registrar");
const botonImg = document.getElementById("boton-img");


boton.addEventListener("click", (function(event){

    event.preventDefault();

    let errores = validarDatos();
    console.log(errores.length);

    if (errores.length == 0){
        let producto = {"name":titulo.value,"img":imagen, "description":descripcion.value, "precio":precio.value};
        window.localStorage.setItem("producto", JSON.stringify(producto));
        Swal.fire(
            'Éxito',
            'El producto fue agregado correctamente',
            'success'
          )

    } else{
        let strErrores = "";
        errores.forEach((error)=>{
            strErrores += error + "<br>";
        });
    
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            html: strErrores,
          })
    }



}));

var myWidget = cloudinary.createUploadWidget({
    cloudName: 'dl3mykyoa', 
    uploadPreset: 'ummhv3o6'}, (error, result) => { 
      if (!error && result && result.event === "success") { 
        Swal.fire(
            'Éxito',
            'Imagen cargada correctamente',
            'success'
          );
        imagen = result.info.secure_url;
      }
    }
  )
  
  botonImg.addEventListener("click", function(){
      myWidget.open();
    }, false);




function validarDatos(){
    var errores = [];
    titulo.style.border="";
    categoria.style.border="";
    clave.style.border="";
    numStock.style.border="";
    marca.style.border="";
    descripcion.style.border="";
    precio.style.border=""
    descuento.style.border=""
    checkInfo.style.border=""
    //
    //QUITAR EL ESTILO A TODOS LOS BORDES
    //


if(!(titulo.value.length > 2 )){
    titulo.style.border="solid 2px red"
    errores.push("El titulo no es válido");
}


if(!(categoria.value.length > 2 )){
    categoria.style.border="solid 2px red"
    errores.push("La categoria no es válida");
}

if(!(clave.value.length > 2 )){
    clave.style.border="solid 2px red"
    errores.push("Las palabras clave no son válidas");
}

if(!(numStock.value > 0 )){
    numStock.style.border="solid 2px red"
    errores.push("El número de Stock no es válido");
}

if(!(marca.value.length > 2 )){
    marca.style.border="solid 2px red"
    errores.push("La marca no es válida");
}

if(!(descripcion.value.length > 10 )){
    descripcion.style.border="solid 2px red"
    errores.push("La descripción no es válida");
}

if(!(precio.value > 10 )){
    precio.style.border="solid 2px red"
    errores.push("El precio no es válido");
}

if(!(descuento.value.length > 2 )){
    descuento.style.border="solid 2px red"
    errores.push("El descuento no es válido");
}

if(!(checkInfo.checked)){
    checkInfo.style.border="solid 2px red"
    errores.push("No se marcó checkbox de revisión de información");
}

return errores;


}










