
//Agregar navbar y footer
let header = document.getElementsByTagName("header")[0];
let footer = document.getElementsByTagName("footer")[0];
let imgPerfilNav = `<i class="bi bi-person" id="icono-cuenta"></i>`;
let iconoPerfil = `          <li class="nav-item dropdown dropstart">
<a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
${imgPerfilNav}
</a>
<ul class="dropdown-menu dropdown-menu-start">
  <li><a class="dropdown-item" href="./registro.html"><button id="registrate">Regístrate</button></a></li>
  <li><a class="dropdown-item" href="./inicioSesion.html"><button id="inicia-sesion">Inicia Sesión</button></a></li>
</ul> </li>`;

if(JSON.parse(window.localStorage.getItem("usuario-logeado") != null)){
  let idImg = JSON.parse(window.localStorage.getItem("usuario-logeado")).imagen;
  imgPerfilNav = `<img style="width:40px; heigth: auto;" src="./src/img/perfil${idImg}.png" alt="">`;
  iconoPerfil = `          <li class="nav-item dropdown dropstart">
  <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  ${imgPerfilNav}
  </a>
  <ul class="dropdown-menu dropdown-menu-start">
    <li><a class="dropdown-item"><button id="cerrar-sesion">Cerrar sesión</button></a></li>
  </ul> </li>`;

  setTimeout(()=>{
    const cerrarSesion = document.getElementById("cerrar-sesion");

  cerrarSesion.addEventListener("click", function(event){
    event.preventDefault();
    window.localStorage.removeItem("usuario-logeado");
    location.reload();
  });
  }, 1000);
  
  
}



header.insertAdjacentHTML("afterbegin", `<nav class="navbar navbar-expand-xl">
<div class="div-nav container-fluid">
  <a class="navbar-brand" href="./index.html"><img id="logo" src="./src/img/logo.png" alt=""></a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class=" menu collapse navbar-collapse" id="navbarText">
    <ul class="texto-nav navbar-nav me-auto mb-2 mb-lg-0">
        <li class="text nav-item mx-4 p-2">
            <a class="p-2 nav-link" aria-current="page" href="./index.html">Inicio</a>
          </li>
          <li class="text nav-item mx-4 p-2">
            <a class="p-2 nav-link" href="./nosotros.html">Nosotros</a>
          </li>
          <li class="text nav-item mx-4 p-2">
            <a class="p-2 nav-link" href="./productos.html">Productos</a>
          </li>
          <li class="text nav-item mx-4 p-2">
            <a class="p-2 nav-link"  href="./contacto.html">Contáctanos</a>
          </li>
    </ul>
    <span class="iconos navbar-text d-flex flex-row-reverse">
    <li class="nav-item">
    <a class="nav-link active"  href="./agregarProducto.html"><i class="bi bi-search"></i></a>
  </li>
          ${iconoPerfil}

          <li class="nav-item">
          <a class="nav-link active"  href="./agregarProducto.html"><i class="bi bi-cart"></i></a>
        </li>
    </span>
  </div>
</nav>
`);

footer.insertAdjacentHTML("beforeend", `<footer class="py-5">
<div class="row" style="margin-right:0;">
  <div class="col-6 col-md-2 mb-3">
    <ul class="nav flex-column">
      <li class="nav-item mb-2"><a href="./agregarProducto.html" class="nav-link p-0 text-body-secondary"><img src="./src/img/logo.png" alt="" width="100px"></a></li>
      <li class="nav-item mb-2">Síguenos en:</li>
      <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary"><i class="bi bi-tiktok"></i>
        <i class="bi bi-instagram"></i>
        <i class="bi bi-facebook"></i>
        <i class="bi bi-twitter"></i></a></li>

    </ul>
  </div>

  <div class="col-6 col-md-2 mb-3">
    <h5>Menú</h5>
    <ul class="nav flex-column">

      <li class="nav-item mb-2"><a href="./index.html" class="nav-link p-0 text-body-secondary">Inicio</a></li>
      <li class="nav-item mb-2"><a href="./nosotros.html" class="nav-link p-0 text-body-secondary">Nosotros</a></li>
      <li class="nav-item mb-2"><a href="./productos.html" class="nav-link p-0 text-body-secondary">Productos</a></li>
      <li class="nav-item mb-2"><a href="./contacto.html" class="nav-link p-0 text-body-secondary">Contáctanos</a></li>
      
    </ul>
  </div>

  <div class="col-6 col-md-2 mb-3">
    <h5>Categorías</h5>
    <ul class="nav flex-column">
      <li class="nav-item mb-2"><a href="./productos.html#perros" class="nav-link p-0 text-body-secondary">Perros</a></li>
      <li class="nav-item mb-2"><a href="./productos.html#gatos" class="nav-link p-0 text-body-secondary">Gatos</a></li>
      <li class="nav-item mb-2"><a href="./productos.html#aves" class="nav-link p-0 text-body-secondary">Aves</a></li>
      <li class="nav-item mb-2"><a href="./productos.html#peces" class="nav-link p-0 text-body-secondary">Peces</a></li>
      
    </ul>
  </div>

  <div class="col-6 col-md-2 mb-3">
    <h5>Mi Cuenta</h5>
    <ul class="nav flex-column">
      <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Carrito</a></li>
      <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Mis pedidos</a></li>

      
    </ul>
  </div>

  <div class="col-md-1">
    <ul class="nav flex-row">
    <a class="nav-link active"  href="./registro.html"><li class="nav-item mb-2"><button id="registrate">Regístrate</button></li></a>
    <a class="nav-link active"  href="./inicioSesion.html"><li class="nav-item mb-2"><button id="inicia-sesion">Inicia Sesión</button></li></a>

    </ul>
  </div>
</div>
</footer>`);
