import {
  faEnvelope,
  faLocationDot,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../logo/Logo";
import LogoAmatu from "../../assets/img/logo/amatu-logo.png";
import React from "react";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <header id="header" className="site-header">
      <div className="wrapper d-flex justify-content-between align-items-center">
        {/* Logo */}
        <div className="align-self-center">
          <a href="/" aria-label="Ir a la página de inicio">
            <Logo
              image={LogoAmatu}
              alt="Amatu Psicología - Terapia en Donostia y online"
            />
          </a>
        </div>

        {/* Iconos en fila */}
        <nav
          className="d-flex flex-row align-items-center"
          aria-label="Enlaces de contacto y redes sociales"
        >
          <div className="px-3">
            <a
              href="tel:+34608485881"
              aria-label="Llamar al teléfono 608 48 58 81"
              title="Llamar al 608 48 58 81"
            >
              <FontAwesomeIcon icon={faPhoneAlt} size="lg" color="#a1544d" />
            </a>
          </div>

          <div className="px-3">
            <a
              href="https://maps.app.goo.gl/b2oadT7H1tfV8gyD7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver ubicación en Google Maps"
              title="Ver ubicación en Google Maps"
            >
              <FontAwesomeIcon icon={faLocationDot} size="lg" color="#a1544d" />
            </a>
          </div>

          <div className="px-3">
            <a
              href="https://instagram.com/psicologia.amatu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ir al perfil de Instagram de Amatu Psicología"
              title="Instagram Amatu Psicología"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" color="#a1544d" />
            </a>
          </div>

          <div className="px-3">
            <a
              href="mailto:psicologia.amatu@gmail.com"
              aria-label="Enviar un correo a psicologia.amatu@gmail.com"
              title="Enviar correo"
            >
              <FontAwesomeIcon icon={faEnvelope} size="lg" color="#a1544d" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
