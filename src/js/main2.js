function addItem(item, categoria) {
    contadorProductos++;
    let color = definirColorBoton(contadorProductos);
    const itemHTML = `
    <div class="col mt-4">
      <div class="card h-100"">
      <div class="flex-card h-100 d-flex justify-content-center flex-wrap">
      <div class="imagen">
         <img src="${item.img}" class="card-img-top center-block mx-auto d-block tarjeta-producto" alt="...">
</div>
</div>
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text description">${item.description}</p>
          <p class="card-text">
          <p class="card-text precio">$ ${item.precio}</p>
        <div class="text-end boton-carta align-self-center">
        <button href="#" class="boton-comprar" style="background-color:${color}">Comprar</button>
        </div>
      </div>
      </div>
    </div>`;
    const producto = document.getElementById(categoria);
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
    let productoNuevo = JSON.parse(window.localStorage.getItem("producto"));
    addItem(productoNuevo, "perros");


}





/* addItem({
    'name': 'Alimento para perro',
    'img': './src/img/imgProductos/comidaPerro1.png',
    'description': 'Costal de alimento para perro adulto, Contenido: 15kg, Marca: Nupec', 'precio': 1050.00
}, "perros");

addItem({
    'name': 'Juguete para perro',
    'img': './src/img/imgProductos/juguetePerro1.png',
    'description': 'Juguete de estambre, 3 colores', 'precio': 230.00
}, "perros")

addItem({
    'name': 'Juguete para perro',
    'img': './src/img/imgProductos/juguetePerro2.png',
    'description': 'Juguete de peluche, pato', 'precio': 180.00
}, "perros")

addItem({
    'name': 'Juguete para perro',
    'img': './src/img/imgProductos/juguetePerro3.png',
    'description': 'Juguete de plástico', 'precio': 120.00
}, "perros");

addItem({
    'name': 'Juguete para perro',
    'img': './src/img/imgProductos/juguetePerro4.png',
    'description': 'Juguete pelota con lazo, 2 colores', 'precio': 140.00
}, "perros");

addItem({
    'name': 'Juguete para perro',
    'img': './src/img/imgProductos/juguetePerro5.png',
    'description': 'Juguete pelota de plástico, 2 colores', 'precio': 85.00
}, "perros");

addItem({
    'name': 'Arenero',
    'img': './src/img/imgProductos/arenero1.png',
    'description': 'Arenero Jumbo con tapa', 'precio': 430
}, "gatos");
addItem({
    'name': 'Croquetas',
    'img': './src/img/imgProductos/comidaGato1.png',
    'description': "Croquetas Hills Hill's cience diet", 'precio': 500
}, "gatos");
addItem({
    'name': 'Catnip',
    'img': './src/img/imgProductos/jugueteGato1.png',
    'description': "Juguete de aguacate con catnip", 'precio': 130
}, "gatos");
addItem({
    'name': 'Razcador',
    'img': './src/img/imgProductos/rascador1.png',
    'description': "Torre Razcador café", 'precio': 2500
}, "gatos");

addItem({
    'name': 'Adorno de Tesoro',
    'img': './src/img/imgProductos/adorno1.png',
    'description': 'Figura de decoración ideal peceras', 'precio': '45'
}, "peces");

addItem({
    'name': 'Acuario Lego',
    'img': './src/img/imgProductos/acuario1.png',
    'description': 'Acuario en forma de lego tamaño pequeño', 'precio': '325'
}, "peces");

addItem({
    'name': 'Alimento Spirulina',
    'img': './src/img/imgProductos/comidaPeces1.png',
    'description': 'Alimento Spirulina Boost para peces hervívoros pequeños', 'precio': '75'
}, "peces")

addItem({
    'name': 'Alimento TetraColor',
    'img': './src/img/imgProductos/comidaPeces2.png',
    'description': 'Alimento TetraColor en forma granular para peces', 'precio': '84'
}, "peces")

addItem({
    'name': 'Casa para aves',
    'img': './src/img/imgProductos/casaAve1.png',
    'description': 'Casa de acero inoxidable', 'precio': 999.99
}, "aves");

addItem({
    'name': 'Comida para aves',
    'img': './src/img/imgProductos/comidaAve1.png',
    'description': 'Comida Red kite para aves', 'precio': 349.00
}, "aves");

addItem({
    'name': 'Comedero para aves',
    'img': './src/img/imgProductos/comidaAve2.png',
    'description': 'Todo tipo de aves', 'precio': 189.00
}, "aves");

addItem({
    'name': 'Kit de juguetes para aves',
    'img': './src/img/imgProductos/juguetesAve1.png',
    'description': 'Juguetes de madera para aves', 'precio': 259.50
}, "aves");
 */

