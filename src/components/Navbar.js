import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar__logo">Mi Inventario</h1>
      <ul className="navbar__links">
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/products">Productos</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
