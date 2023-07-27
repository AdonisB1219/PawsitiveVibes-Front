
//Agregar navbar y footer
let main = document.getElementsByTagName("main")[0];

main.insertAdjacentHTML("afterbegin", `      <nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
  <a class="navbar-brand" href="#"><img src="./src/img/logo.png" alt="" width="100px"></a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">Nosotros</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">Productos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active"  href="#">Contáctanos</a>
          </li>
    </ul>
    <span class="navbar-text">
        <li class="nav-item">
            <a class="nav-link active"  href="#"><i class="bi bi-cart"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link active"  href="#"><i class="bi bi-person"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link active"  href="#"><i class="bi bi-search"></i></a>
          </li>
    </span>
  </div>
</div>
</nav>
`)

main.insertAdjacentHTML("beforeend", `<footer class="py-5">
<div class="row">
  <div class="col-6 col-md-2 mb-3">
    
    <ul class="nav flex-column">
      <li class="nav-item mb-2"><a href="./index.html" class="nav-link p-0 text-body-secondary"><img src="./src/img/logo.png" alt="" width="100px"></a></li>
      <li class="nav-item mb-2">Siguenos en:</li>
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
      <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Productos</a></li>
      <li class="nav-item mb-2"><a href="./contacto.html" class="nav-link p-0 text-body-secondary">Contáctanos</a></li>
      
    </ul>
  </div>

  <div class="col-6 col-md-2 mb-3">
    <h5>Categorías</h5>
    <ul class="nav flex-column">
      <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Perros</a></li>
      <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Gatos</a></li>
      <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Aves</a></li>
      <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Peces</a></li>
      
    </ul>
  </div>

  <div class="col-6 col-md-2 mb-3">
    <h5>Mi Cuenta</h5>
    <ul class="nav flex-column">
      <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Carrito</a></li>
      <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Mis pedidos</a></li>

      
    </ul>
  </div>

  <div class="col-md-1  ">
    <ul class="nav flex-row">
        <li class="nav-item mb-2"><button>Regístrate</button></li>
       
    </ul>
  </div>
  <div class="col-md-2  ">
    <ul class="nav flex-row">
        
        <li class="nav-item mb-2"><button>Inicia Sesión</button></li>
    </ul>
  </div>
</div>
</footer>`)

