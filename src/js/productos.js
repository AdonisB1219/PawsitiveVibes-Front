var id = 0;
let promesa = fetch("https://pawsitivevibesecommerce.onrender.com/api/productos/", {
    method: "GET"
});
let contadorProductos = 0;


//let promesa = [{"id":1,"titulo":"Arenero","categoria":"Muebles","numStock":2,"marca":"Nupec","descripcion":"Arenero cerrado para gato","seccion":"gatos","descuento":0,"precio":310.0,"imagen":"https://phantom-marca-mx.unidadeditorial.es/bb0f8e5a5dc3495d7e4695b204c67b70/resize/1200/f/jpg/mx/assets/multimedia/imagenes/2023/04/03/16805545425507.jpg"},{"id":2,"titulo":"Croquetas","categoria":"Alimento","numStock":3,"marca":"Nupec","descripcion":"Costal de 4 kilos de croquetas","seccion":"perros","descuento":10,"precio":500.0,"imagen":"https://phantom-marca-mx.unidadeditorial.es/bb0f8e5a5dc3495d7e4695b204c67b70/resize/1200/f/jpg/mx/assets/multimedia/imagenes/2023/04/03/16805545425507.jpg"}];

promesa.then(
    (response)=>{response.json()
    .then((data)=>{
        data.forEach((producto)=>{
            addItemBD(producto)
        });
    })
}
).catch((error)=> {
    console.log(error);
})

function addItem(item) {
    contadorProductos++;
    let color = definirColorBoton(contadorProductos);
    let precio = item.precio;
    let descuento = item.descuento;
    switch (descuento){
        case "10":
            precio *= 0.9;
            precio = precio.toFixed(2);
            break;
            case "20":
            precio *= 0.8;
            precio = precio.toFixed(2);
            break;
            case "30":
            precio *= 0.7;
            precio = precio.toFixed(2);
            break;
            case "40":
            precio *= 0.6;
            precio = precio.toFixed(2);
            break;
    }
    id++;
    let precioHTML;
    let span;
    if (descuento != 0){
        precioHTML = `<p class="card-text precio" style="text-decoration:line-through; font-weight:200">$ ${item.precio}</p><p class="card-text precio"><strong>$ ${precio}</strong></p>`;
        span = `  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style="font-size:25px">
        -${descuento}%
      </span>`;
    } else{
         precioHTML = `<p class="card-text precio">$ ${item.precio}</p>`
    span = "";
    }



    const itemHTML = `
    <div class="col mt-4">
      <div class="card h-100""> ${span}
      <div class="flex-card h-100 d-flex justify-content-center flex-wrap">
      <div class="imagen">
         <img src="${item.img}" class="card-img-top center-block mx-auto d-block tarjeta-producto" alt="...">
</div>
</div>
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text description">${item.description}</p>
          <p class="card-text">
          ${precioHTML}
          <div class="text-end boton-carta align-self-center">
        <button type="button" class="boton-comprar" data-bs-toggle="modal" data-bs-target="#prod" style="background-color:${color}">Comprar</button>
        </div>
      </div>
      </div>
    </div>`;//TODO agregar el id en la fila 55.  data-bs-target="#prod${id}"


    const detalleProd = `        <div class="container">
    <h3 id="mascat">${item.mascota.toUpperCase()} / ${item.categoria.toUpperCase()}</h3>
    <div class="row">
        <h1 class="col" id="nomProd">${item.name}</h1>
        <h3 class="col" id="stock">En Stock [${item.stock}]</h3>
    </div>
    <div class="row sec1">
        <div class="col">
            <div>
                <div class="card cardMain border-0" style="width: 27rem;">
                    <img src="${item.img}" alt="" class="col card-img-top center-block mx-auto d-block tarjeta-producto" >
                    
                </div>
                <br>
                
                <div class="row">
                    <div class="card cardSec  shadow-none" style="width: 5rem;">
                        <img src="./src/img/imgProductos/juguetePerro4.png" alt="" class="col card-img-top center-block mx-auto d-block tarjeta-producto" >
                    </div>
                    <div class="card cardSec  shadow-none" style="width: 5rem;">
                        <img src="./src/img/imgProductos/jugueteGato1.png" alt="" class="col card-img-top center-block mx-auto d-block tarjeta-producto" >
                    </div>
                    <div class="card cardSec  shadow-none" style="width: 5rem;">
                        <img src="./src/img/imgProductos/jugueteGato1.png" alt="" class="col card-img-top center-block mx-auto d-block tarjeta-producto" >
                    </div>
                </div>
            </div>
        </div>
        
        <div class=" col infoGen">
            <div class="row row-cols-auto">
                <div class="col">
                    <i class="bi bi-star-fill star"></i>
                    <i class="bi bi-star-fill star"></i>
                    <i class="bi bi-star-fill star"></i>
                    <i class="bi bi-star-fill star"></i>
                    <i class="bi bi-star-fill star"></i>
                </div>
                <p class="col rese"> 12 Calificaciones</p>
            </div>
            
            <h3 class="subTitle">DESCRIPCIÓN</h3>
            <p class="descripcion">${item.description}</p>
            <br>

            <div class="row row-cols-auto">
                <h3 class="col">${precioHTML}</h3>
                
                <div class=" btn-group btn-group-lg" role="group" aria-label="Large button group">
                    <div class="btn-group btn-group-lg me-2" role="group" aria-label="First group">
                        <button type="button" class="btn "><i class="bi bi-dash-square col"></i></button>
                        <button type="button" class="btn contUni ">1</button>
                        <button type="button" class="btn "><i class="bi bi-plus-square col"></i></button>
                    
                    </div>
                </div>  
                
            </div>
            <br>
            <br>
            <div class="col">
                <button type="button" class="btn btnComprar">Comprar ahora</button>
                <button type="button border" class="btn btnCarr">Añadir al carrito</button> 
            </div>
        </div>
        
    </div>

    <br>
    <br>
    <br>
    <div>
        <h5 class="subTitle">OPINIONES</h5>
        <br>
        <div class="row">
            
            <div class="col">
                <div class="row row-cols-auto">
                    <i class="bi bi-person-bounding-box col imgPerfil"></i>
                    <h4 class="col">Kristin Swanson</h4>
                    <div class="col">
                        <i cl ass="bi bi-star-fill star"></i>
                        <i class="bi bi-star-fill star"></i>
                        <i class="bi bi-star-fill star"></i>
                        <i class="bi bi-star-fill star"></i>
                        <i class="bi bi-star-fill star"></i>
                    </div>
                </div>
                <div class="col">
                   
                

                <p class="fecha">Nov 09, 2022</p>
                <p class="descripcion">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita inventore libero sint fugiat atque quasi nam incidunt, corporis fuga exercitationem ad neque tempore error magnam laborum eius? Ipsum quos, perferendis exercitationem facere, labore eos modi ut aliquid numquam, rerum quisquam.</p>
                </div>
            </div>
            
            <div class="col">
                <img src="./src/img/imgProductos/pelota-amarilaverde.png" alt="" style="width: 190px">
            </div>
        </div>
    </div>
    <br>
    <br>
    <br>
    <div>
        <h2 id="tituloProductosRelacionados" class="text-center">Productos Relacionados</h2>
        <br>
        
    </div>

</div>`;

    
    const modal = `<div class="modal fade" id="prod${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">${item.name}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ${detalleProd}
        </div>
      </div>
    </div>
  </div>`;

    var producto = document.getElementById(item.mascota);
    producto.insertAdjacentHTML("afterbegin", itemHTML);
    document.getElementsByTagName("body")[0].insertAdjacentHTML("afterbegin", modal);



}


function definirColorBoton(contador){
    switch(contador%4){
        case 3: 
        color = "#50D0D3";
        break;
        case 2: 
        color = "#F06319";
        break;
        case 1: 
        color = "#E8A42B";
        break;
        case 0: 
        color = "#33658A";
        break;
    }
    return color;
}


if(localStorage.getItem("productos") != null){
    let productos = JSON.parse(window.localStorage.getItem("productos"));
    productos.forEach(p => addItem(p));
}






addItem({
    'name': 'Alimento para perro',
    'categoria': 'Alimento',
    'clave': 'croquetas',
    'description': 'Alimento seco sabor salmón 2.5k',
    'descuento': '0',
    'img': './src/img/imgProductos/comidaPerro1.png',
    'Marca': 'Nupec',
    'mascota': 'perros',
    'precio': 1050, 
    'stock': 2
});

addItem({
    'name': 'Juguete peludo',
    'categoria': 'Juguete',
    'clave': 'juguete',
    'description': 'Juguete suave de peluche para perro',
    'descuento': '10',
    'img': './src/img/imgProductos/juguetePerro1.png',
    'Marca': 'Nupec',
    'mascota': 'perros',
    'precio': 210, 
    'stock': 2
});

addItem({
    'name': 'Juguete',
    'categoria': 'Juguete',
    'clave': 'juguete',
    'description': 'Juguete en forma de pato para perro grande',
    'descuento': '20',
    'img': './src/img/imgProductos/juguetePerro2.png',
    'Marca': 'Nupec',
    'mascota': 'perros',
    'precio': 210, 
    'stock': 2
});

addItem({
   'name': 'Juguete',
    'categoria': 'Juguete',
    'clave': 'juguete',
    'description': 'Rueda masticable para perro',
    'descuento': '0',
    'img': './src/img/imgProductos/juguetePerro3.png',
    'Marca': 'Nupec',
    'mascota': 'perros',
    'precio': 200, 
    'stock': 2
});

addItem({
    'name': 'Juguete',
    'categoria': 'Juguete',
    'clave': 'juguete',
    'description': 'trenza de tela para moder y jalar',
    'descuento': '0',
    'img': './src/img/imgProductos/juguetePerro4.png',
    'Marca': 'Nupec',
    'mascota': 'perros',
    'precio': 150, 
    'stock': 2
});

addItem({
    'name': 'Juguete limpia dientes',
    'categoria': 'Juguete',
    'clave': 'juguete',
    'description': 'Para morder y limpiar los dientes de tu mascota',
    'descuento': '0',
    'img': './src/img/imgProductos/juguetePerro5.png',
    'Marca': 'Nupec',
    'mascota': 'perros',
    'precio': 150, 
    'stock': 2
});

addItem({
    'name': 'Juguete aguacate',
    'categoria': 'Juguete',
    'clave': 'juguete',
    'description': 'Juguete en forma de aguacate con catnip para gato',
    'descuento': '0',
    'img': './src/img/imgProductos/jugueteGato1.png',
    'Marca': 'Nupec',
    'mascota': 'gatos',
    'precio': 150, 
    'stock': 2
});

addItem({
    'name': 'Rascador en torre',
    'categoria': 'Juguete',
    'clave': 'juguete',
    'description': 'Razcador en torre para 5 gatos',
    'descuento': '20',
    'img': './src/img/imgProductos/rascador1.png',
    'Marca': 'Nupec',
    'mascota': 'gatos',
    'precio': 3600, 
    'stock': 2
});

addItem({
    'name': 'Comida sabor atún',
    'categoria': 'Juguete',
    'clave': 'juguete',
    'description': 'Comida para peces nutricionada con Spirulina en ojuelas 1.5k',
    'descuento': '0',
    'img': './src/img/imgProductos/comidaPeces1.png',
    'Marca': 'Nupec',
    'mascota': 'peces',
    'precio': 150, 
    'stock': 2
});

addItem({
    'name': 'Comida en ojuelas',
    'categoria': 'Juguete',
    'clave': 'juguete',
    'description': 'Comida para todo tipo de peces adicionada con vitaminas y minerales',
    'descuento': '0',
    'img': './src/img/imgProductos/comidaPeces2.png',
    'Marca': 'Nupec',
    'mascota': 'peces',
    'precio': 150, 
    'stock': 2
});

addItem({
    'name': 'Jaula para loro',
    'categoria': 'Juguete',
    'clave': 'juguete',
    'description': 'Jaula para loro de metal',
    'descuento': '0',
    'img': './src/img/imgProductos/casaAve1.png',
    'Marca': 'Nupec',
    'mascota': 'aves',
    'precio': 150, 
    'stock': 2
});

 addItem({
    'name': 'Arenero',
    'categoria': 'Juguete',
    'clave': 'juguete',
    'description': 'Arenero redondo gris con blanco',
    'descuento': '0',
    'img': './src/img/imgProductos/arenero1.png',
    'Marca': 'Nupec',
    'mascota': 'gatos',
    'precio': 150, 
    'stock': 2
});

 addItem({
    'name': 'Croquetas Para gato',
    'categoria': 'Juguete',
    'clave': 'juguete',
    'description': 'Croquetas para gatos adultos sabor pollo, 3.5K',
    'descuento': '0',
    'img': './src/img/imgProductos/comidaGato1.png',
    'Marca': 'Nupec',
    'mascota': 'gatos',
    'precio': 150, 
    'stock': 2
 });

 addItem({
    'name': 'Ambientación',
    'categoria': 'Juguete',
    'clave': 'juguete',
    'description': 'Para el habitat de tu amigo acuático.',
    'descuento': '10',
    'img': './src/img/imgProductos/adorno1.png',
    'Marca': 'Nupec',
    'mascota': 'peces',
    'precio': 80, 
    'stock': 2
 });

 addItem({
    'name': 'Adorno',
    'categoria': 'Juguete',
    'clave': 'juguete',
    'description': 'Adorno para pecera pequeña color azul, no inclute peces',
    'descuento': '10',
    'img': './src/img/imgProductos/acuario1.png',
    'Marca': 'Nupec',
    'mascota': 'peces',
    'precio': 320, 
    'stock': 2
});

 addItem({
    'name': 'Porta comida',
    'categoria': 'Juguete',
    'clave': 'juguete',
    'description': 'Porta comida para aves con capacidad de 500g',
    'descuento': '10',
    'img': './src/img/imgProductos/comidaAve2.png',
    'Marca': 'Nupec',
    'mascota': 'aves',
    'precio': 380, 
    'stock': 2
});


addItem({
    'name': 'Adorno',
    'categoria': 'Juguete',
    'clave': 'juguete',
    'description': 'Este es un adorno bien padre',
    'descuento': '10',
    'img': './src/img/imgProductos/juguetesAve1.png',
    'Marca': 'Nupec',
    'mascota': 'aves',
    'precio': 200, 
    'stock': 2
});
 
function addItemBD(item) {
    contadorProductos++;
    let color = definirColorBoton(contadorProductos);
    let precio = item.precio;
    let descuento = item.descuento;
    switch (descuento){
        case 10:
            precio *= 0.9;
            precio = precio.toFixed(2);
            break;
            case 20:
            precio *= 0.8;
            precio = precio.toFixed(2);
            break;
            case 30:
            precio *= 0.7;
            precio = precio.toFixed(2);
            break;
            case 40:
            precio *= 0.6;
            precio = precio.toFixed(2);
            break;
    }
    id++;
    let precioHTML;
    let span;
    if (descuento != 0){
        precioHTML = `<p class="card-text precio" style="text-decoration:line-through; font-weight:200">$ ${item.precio}</p><p class="card-text precio"><strong>$ ${precio}</strong></p>`;
        span = `  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style="font-size:25px">
        -${descuento}%
      </span>`;
    } else{
         precioHTML = `<p class="card-text precio">$ ${item.precio}</p>`
    span = "";
    }



    const itemHTML = `
    <div class="col mt-4">
      <div class="card h-100""> ${span}
      <div class="flex-card h-100 d-flex justify-content-center flex-wrap">
      <div class="imagen">
         <img src="${item.imagen}" class="card-img-top center-block mx-auto d-block tarjeta-producto" alt="...">
</div>
</div>
        <div class="card-body">
          <h5 class="card-title">${item.titulo}</h5>
          <p class="card-text description">${item.descripcion}</p>
          <p class="card-text">
          ${precioHTML}
          <div class="text-end boton-carta align-self-center">
        <button type="button" class="boton-comprar" data-bs-toggle="modal" data-bs-target="#prod" style="background-color:${color}">Comprar</button>
        </div>
      </div>
      </div>
    </div>`;//TODO agregar el id en la fila 55.  data-bs-target="#prod${id}"


    const detalleProd = `        <div class="container">
    <h3 id="mascat">${item.seccion.toUpperCase()} / ${item.categoria.toUpperCase()}</h3>
    <div class="row">
        <h1 class="col" id="nomProd">${item.titulo}</h1>
        <h3 class="col" id="stock">En Stock [${item.numStock}]</h3>
    </div>
    <div class="row sec1">
        <div class="col">
            <div>
                <div class="card cardMain border-0" style="width: 27rem;">
                    <img src="${item.imagen}" alt="" class="col card-img-top center-block mx-auto d-block tarjeta-producto" >
                    
                </div>
                <br>
                
                <div class="row">
                    <div class="card cardSec  shadow-none" style="width: 5rem;">
                        <img src="./src/img/imgProductos/juguetePerro4.png" alt="" class="col card-img-top center-block mx-auto d-block tarjeta-producto" >
                    </div>
                    <div class="card cardSec  shadow-none" style="width: 5rem;">
                        <img src="./src/img/imgProductos/jugueteGato1.png" alt="" class="col card-img-top center-block mx-auto d-block tarjeta-producto" >
                    </div>
                    <div class="card cardSec  shadow-none" style="width: 5rem;">
                        <img src="./src/img/imgProductos/jugueteGato1.png" alt="" class="col card-img-top center-block mx-auto d-block tarjeta-producto" >
                    </div>
                </div>
            </div>
        </div>
        
        <div class=" col infoGen">
            <div class="row row-cols-auto">
                <div class="col">
                    <i class="bi bi-star-fill star"></i>
                    <i class="bi bi-star-fill star"></i>
                    <i class="bi bi-star-fill star"></i>
                    <i class="bi bi-star-fill star"></i>
                    <i class="bi bi-star-fill star"></i>
                </div>
                <p class="col rese"> 12 Calificaciones</p>
            </div>
            
            <h3 class="subTitle">DESCRIPCIÓN</h3>
            <p class="descripcion">${item.descripcion}</p>
            <br>

            <div class="row row-cols-auto">
                <h3 class="col">${precioHTML}</h3>
                
                <div class=" btn-group btn-group-lg" role="group" aria-label="Large button group">
                    <div class="btn-group btn-group-lg me-2" role="group" aria-label="First group">
                        <button type="button" class="btn "><i class="bi bi-dash-square col"></i></button>
                        <button type="button" class="btn contUni ">1</button>
                        <button type="button" class="btn "><i class="bi bi-plus-square col"></i></button>
                    
                    </div>
                </div>  
                
            </div>
            <br>
            <br>
            <div class="col">
                <button type="button" class="btn btnComprar">Comprar ahora</button>
                <button type="button border" class="btn btnCarr">Añadir al carrito</button> 
            </div>
        </div>
        
    </div>

    <br>
    <br>
    <br>
    <div>
        <h5 class="subTitle">OPINIONES</h5>
        <br>
        <div class="row">
            
            <div class="col">
                <div class="row row-cols-auto">
                    <i class="bi bi-person-bounding-box col imgPerfil"></i>
                    <h4 class="col">Kristin Swanson</h4>
                    <div class="col">
                        <i cl ass="bi bi-star-fill star"></i>
                        <i class="bi bi-star-fill star"></i>
                        <i class="bi bi-star-fill star"></i>
                        <i class="bi bi-star-fill star"></i>
                        <i class="bi bi-star-fill star"></i>
                    </div>
                </div>
                <div class="col">
                   
                

                <p class="fecha">Nov 09, 2022</p>
                <p class="descripcion">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita inventore libero sint fugiat atque quasi nam incidunt, corporis fuga exercitationem ad neque tempore error magnam laborum eius? Ipsum quos, perferendis exercitationem facere, labore eos modi ut aliquid numquam, rerum quisquam.</p>
                </div>
            </div>
            
            <div class="col">
                <img src="./src/img/imgProductos/pelota-amarilaverde.png" alt="" style="width: 190px">
            </div>
        </div>
    </div>
    <br>
    <br>
    <br>
    <div>
        <h2 id="tituloProductosRelacionados" class="text-center">Productos Relacionados</h2>
        <br>
        
    </div>

</div>`;

    
    const modal = `<div class="modal fade" id="prod${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">${item.titulo}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ${detalleProd}
        </div>
      </div>
    </div>
  </div>`;

    var producto = document.getElementById(item.seccion);
    producto.insertAdjacentHTML("afterbegin", itemHTML);
    document.getElementsByTagName("body")[0].insertAdjacentHTML("afterbegin", modal);



}
