import React from "react";
import Footer from "./Footer";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="column">
          <h3>Prueba técnica</h3>
          <h1>Gestión de inventario</h1>
          <div className="paragraph-container">
            <p>
              Esta aplicación te permite gestionar tu inventario de una manera
              fácil y eficiente. Aquí puedes crear, leer, actualizar y eliminar
              productos en tu inventario.
            </p>
          </div>
          <button>
            <a href="https://nelmix.com/" target="_blank" rel="noreferrer">
              Explora
            </a>
          </button>
        </div>
        <div className="column">
          <div className="card">
            <h2>Acerca del desarrollador</h2>
            <p>
              Esta aplicación fue desarrollada por{" "}
              <span className="highlight">Samuel Alcántara</span>, estudiante
              del Instituto Tecnológico de Las Américas (ITLA), como parte de la
              prueba técnica de Nelmix Solutions.
            </p>
            <p>
              Puedes encontrar más de mi trabajo y ponerse en contacto conmigo a
              través de:
            </p>
            <div className="contact-links">
              <a href="mailto:samalcantaradev@gmail.com">
                <FaEnvelope />
              </a>
              <a href="https://www.linkedin.com/in/sam-alcántara/">
                <FaLinkedin />
              </a>
              <a href="https://github.com/samalcantaradev">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
