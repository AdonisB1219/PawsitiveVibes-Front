var id = 0;

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
        <button href="#" class="boton-comprar" style="background-color:${color}">Comprar</button>
        </div>
      </div>
      </div>
    </div>`;

    var producto = document.getElementById(item.mascota);
    producto.insertAdjacentHTML("afterbegin", itemHTML);


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

var contadorProductos = 0;

if(localStorage.length > 0){
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
    'name': 'Juguete',
    'categoria': 'Juguete',
    'clave': 'juguete',
    'description': 'trenza de tela para moder y jalar',
    'descuento': '0',
    'img': './src/img/imgProductos/juguetePerro5.png',
    'Marca': 'Nupec',
    'mascota': 'perros',
    'precio': 150, 
    'stock': 2
});

addItem({
    'name': 'Juguete',
    'categoria': 'Juguete',
    'clave': 'juguete',
    'description': 'trenza de tela para moder y jalar',
    'descuento': '0',
    'img': './src/img/imgProductos/jugueteGato1.png',
    'Marca': 'Nupec',
    'mascota': 'gatos',
    'precio': 150, 
    'stock': 2
});

addItem({
    'name': 'Razcador en torre',
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
    'description': 'Comida para peces con mucha hambre 1.5k',
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
    'description': 'Comida para peces con mucha hambre',
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
    'name': 'Comida gatuna',
    'categoria': 'Juguete',
    'clave': 'juguete',
    'description': 'Comida para gatos con mucha hambre',
    'descuento': '0',
    'img': './src/img/imgProductos/comidaGato1.png',
    'Marca': 'Nupec',
    'mascota': 'gatos',
    'precio': 150, 
    'stock': 2
 });

 addItem({
    'name': 'Adorno',
    'categoria': 'Juguete',
    'clave': 'juguete',
    'description': 'Este es un adorno bien padre',
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
    'description': 'Este es un adorno bien padre',
    'descuento': '10',
    'img': './src/img/imgProductos/acuario1.png',
    'Marca': 'Nupec',
    'mascota': 'peces',
    'precio': 320, 
    'stock': 2
});

 addItem({
    'name': 'Adorno',
    'categoria': 'Juguete',
    'clave': 'juguete',
    'description': 'Este es un adorno bien padre',
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
 

