function NavBar () {
    return (
      <nav>
        <ul>
          <li><a href=""><img src="https://static.vecteezy.com/system/resources/previews/005/439/330/non_2x/sneaker-store-logo-template-black-and-white-vector.jpg" alt="Icono Ecommerce" width="50px" height="50px" /></a></li>
          <li><a href="">MENU</a></li>
          <li><a href="">TIENDA</a></li>
          <li><a href="">CONTACTO</a></li>
        </ul>
        <div className="carrito">
          <a href="">
            <i class="bi bi-bag"></i>
            <span>0</span>
          </a>
        </div>
      </nav>
    )
  }

export default NavBar 