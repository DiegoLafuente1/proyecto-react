import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <div className='Imagen-nav d-flex align-items-center justify-content-center'>
          <img src="https://cdn-icons-png.flaticon.com/512/2589/2589903.png" alt="logo" height="100px" width="100px" />
        </div>
        <Link className="navbar-brand text-white" to="/">Zapas Online</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-white" to="/">Menu</Link>
            </li>
          </ul>
        </div>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar; 

