import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          SRAM
        </Link>
        <CartWidget />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to={`/category/mountain`}>
                MOUNTAIN
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={`/category/gravel`}>
                GRAVEL
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={`/category/road`}>
                ROAD
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
