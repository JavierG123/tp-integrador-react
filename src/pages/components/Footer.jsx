import React from "react";
import { Container } from "react-bootstrap";
/* IMPORTANDO ICONOS BOOTSTRAP*/
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <Container className="footer">
      <div className="footer__icons">
        <i class="bi bi-facebook"></i>
        <i class="bi bi-instagram"></i>
        <i class="bi bi-twitter"></i>
        <i class="bi bi-youtube"></i>
      </div>

      <div class="footer__links">
        <div class="row">
          <div class="col-sm">
            <li>
              <ul>
                <a href="#">Audio descriptivo</a>
              </ul>
              <ul>
                <a href="#">Relaciones con inversionistas</a>
              </ul>
              <ul>
                <a href="#">Avisos legales</a>
              </ul>
            </li>
          </div>
          <div class="col-sm">
            <li>
              <ul>
                <a href="#">Centro de ayuda</a>
              </ul>
              <ul>
                <a href="#">Empleo</a>
              </ul>
              <ul>
                <a href="#">Preferencias de cookies</a>
              </ul>
            </li>
          </div>
          <div class="col-sm">
            <li>
              <ul>
                <a href="#">Tarjetas de regalo</a>
              </ul>
              <ul>
                <a href="#">Términos de uso</a>
              </ul>
              <ul>
                <a href="#">Información corporativa</a>
              </ul>
            </li>
          </div>
          <div class="col-sm">
            <li>
              <ul>
                <a href="#">Prensa</a>
              </ul>
              <ul>
                <a href="#">Privacidad</a>
              </ul>
              <ul>
                <a href="#">Contáctanos</a>
              </ul>
            </li>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <p>© 1997-2023 Netlfix, Inc.</p>
      </div>
    </Container>
  );
};

export default Footer;
