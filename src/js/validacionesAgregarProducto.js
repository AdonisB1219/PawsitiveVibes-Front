const titulo = document.getElementById("titulo");
const categoria = document.getElementById("categoria");
const clave = document.getElementById("clave");
const numStock = document.getElementById("numStock");
const marca = document.getElementById("marca");
const descripcion = document.getElementById("descripcion");
const precio = document.getElementById("precio");
const descuento = document.getElementById("descuento");
const checkInfo = document.getElementById("checkInfo");
const boton = document.getElementById("registrar");
const botonImg = document.getElementById("boton-img");
const mascotas = document.querySelectorAll('input[name=mascota]');

//mensajes de error en formularios
const errorTitulo = document.getElementById("errorTitulo");
const errorCategoria = document.getElementById("errorCategoria");
const errorClave = document.getElementById("errorClave");
const errorNumStock = document.getElementById("errorNumStock");
const errorMarca = document.getElementById("errorMarca");
const errorDescripcion = document.getElementById("errorDescripcion");
const errorPrecio = document.getElementById("errorPrecio");
const errorDescuento = document.getElementById("errorDescuento");
const errorCheckInfo = document.getElementById("errorCheckInfo");
const errorMascota = document.getElementById("errorMascota");
const errorImagen = document.getElementById("errorImagen");
var imagen = null;
var mascota;

boton.addEventListener("click", (function(event){

    event.preventDefault();

    let errores = validarDatos();

    if (errores.length == 0) {
        let producto = {
            "titulo": titulo.value,
            "categoria": categoria.value,
            "marca": marca.value,
            "numStock": numStock.value,
            "imagen": imagen,
            "descripcion": descripcion.value,
            "precio": precio.value,
            "seccion": mascota.value,
            "descuento": descuento.value

           
        };
    
        // Realizar la solicitud POST a la API
        fetch("https://pawsitivevibesecommerce.onrender.com/api/productos/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        }).then((response) => {
            if (response.ok) {
                // Si la respuesta es exitosa, agregar el producto localmente (opcional)
                // productos.push(producto);
    
                // Limpiar los campos y mostrar el mensaje de éxito
                Swal.fire(
                    'Éxito',
                    'El producto fue agregado correctamente',
                    'success'
                );
                
                // Limpiar los campos del formulario
                titulo.value = '';
                categoria.value = '';
                clave.value = '';
                numStock.value = '';
                marca.value = '';
                descripcion.value = '';
                precio.value = '';
                descuento.value = '';
                checkInfo.checked = false;
                mascotas.forEach(radio => {
                    radio.checked = false;
                });
    
                // Limpiar los mensajes de error
                errorTitulo.style.border = '';
                errorCategoria.style.border = '';
                errorClave.style.border = '';
                errorNumStock.style.border = '';
                errorMarca.style.border = '';
                errorDescripcion.style.border = '';
                errorPrecio.style.border = '';
                errorDescuento.style.border = '';
                errorCheckInfo.style.border = '';
                errorMascota.style.border = '';
                errorImagen.style.border = '';
            } else {
                // Si hay un error en la respuesta de la API, mostrar un mensaje de error
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Hubo un problema al agregar el producto',
                });
            }
        }).catch((error) => {
            console.log(error);
        });
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
    var erroresMascota = 0;
    mascotas.forEach(m =>{
        m.classList.remove("border-danger");
    });

    //Deja el borde predeterminado antes de volver a evaluar
    titulo.style.border="";
    categoria.style.border="";
    clave.style.border="";
    numStock.style.border="";
    marca.style.border="";
    descripcion.style.border="";
    precio.style.border="";
    descuento.style.border="";
    checkInfo.style.border="";

    //Esconde los mensajes de error antes de volver a evaluar
    errorTitulo.style.display = "";
    errorCategoria.style.display = "";
    errorClave.style.display = "";
    errorNumStock.style.display = "";
    errorMarca.style.display = "";
    errorDescripcion.style.display = "";
    errorPrecio.style.display = "";
    errorDescuento.style.display = "";
    errorCheckInfo.style.display = "";
    errorMascota.style.display = "";
    errorImagen.style.display = "";


  


if(!(titulo.value.length > 3 )){
    titulo.style.border="solid 2px red"
    errores.push("El título no es válido");
    errorTitulo.style.display = "block";
}


if(!(categoria.value.length > 2 )){
    categoria.style.border="solid 2px red"
    errores.push("La categoría no es válida");
    errorCategoria.style.display = "block";
}

if(!(clave.value.length > 2 )){
    clave.style.border="solid 2px red"
    errores.push("Las palabras clave no son válidas");
    errorClave.style.display = "block";
}

if(!(numStock.value >= 0 )){
    numStock.style.border="solid 2px red"
    errores.push("El número de stock no es válido");
    errorNumStock.style.display = "block";
}

if(!(marca.value.length > 2 )){
    marca.style.border="solid 2px red"
    errores.push("La marca no es válida");
    errorMarca.style.display = "block";
}

if(!(descripcion.value.length > 10 )){
    descripcion.style.border="solid 2px red"
    errores.push("La descripción no es válida");
    errorDescripcion.style.display = "block";
}

if(!(precio.value > 10 )){
    precio.style.border="solid 2px red"
    errores.push("El precio no es válido");
    errorPrecio.style.display = "block";
}

if((descuento.value == "" )){
    descuento.style.border="solid 2px red"
    errores.push("El descuento no es válido");
    errorDescuento.style.display = "block";
}

if(!(checkInfo.checked)){
    checkInfo.style.border="solid 2px red"
    errores.push("No se marcó checkbox de revisión de información");
    errorCheckInfo.style.display = "block";
}

if(imagen == null){
    errores.push("No se agregó imagen del producto");
    errorImagen.style.display = "block";

}


//validar tipo de mascota seleccionado

mascotas.forEach(m => {
    if (m.checked){
        mascota = m;
    } else {
        (erroresMascota++);
    }});

if(erroresMascota == 4){
errores.push("No se seleccionó el tipo de mascota");
errorMascota.style.display = "block";
let m;
console.log(mascotas);
mascotas.forEach(m =>{
    m.classList.add("border-danger");
});
}

return errores;


}










