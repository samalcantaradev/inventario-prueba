import React from "react";
import "../styles/Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <small>© {year} Samuel Alcántara. Todos los derechos reservados.</small>
    </footer>
  );
}

export default Footer;
