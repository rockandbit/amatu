import {
  faEnvelope,
  faLocationDot,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

import Copyright from "./Copyright";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../logo/Logo";
import LogoAmatu from "../../assets/img/logo/amatu-logo-texto.png";
// FooterWeb.jsx
import React from "react";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

// import FooterMenu from "./FooterMenu"; // si lo activas, quedará perfecto en la franja inferior

const FooterWeb = () => {
  return (
    <footer id="footer" className="site-footer" role="contentinfo">
      <div
        className=""
        itemScope
        itemType="https://schema.org/LocalBusiness"
        aria-label="Información de contacto"
      >
        <meta itemProp="name" content="Amatu Psicología" />
        <link itemProp="url" href="https://psicologiaamatu.com/" />

        <div className="row py-5 px-2" style={{ backgroundColor: "#f5e1dc" }}>
          <div className="col-2 d-flex justify-content-center align-items-center">
            <a href="/" aria-label="Ir a la página de inicio">
              <Logo image={LogoAmatu} alt="Amatu Psicología - Donostia" />
            </a>
          </div>

          <div className="col-10 text-center align-items-center py-2">
            {/* Fila 1: teléfono + dirección */}
            <div className="row justify-content-between">
              <div className="mb-3 col-6 d-flex align-items-center justify-content-center">
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  size="lg"
                  className="mr-2"
                  style={{ color: "#a1544d" }}
                />
                <a
                  href="tel:+34608485881"
                  itemProp="telephone"
                  aria-label="Llamar al 608 48 58 81"
                  style={{ color: "#a1544d" }}
                >
                  +34 608 48 58 81
                </a>
              </div>

              <div className="mb-3 col-6 d-flex align-items-center justify-content-center">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  size="lg"
                  className="mr-2"
                  style={{ color: "#a1544d" }}
                />
                <a
                  href="https://maps.app.goo.gl/b2oadT7H1tfV8gyD7"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver ubicación en Google Maps"
                  style={{ color: "#a1544d" }}
                  title="Ver ubicación en Google Maps"
                >
                  <address
                    className="m-0 d-inline"
                    itemProp="address"
                    itemScope
                    itemType="https://schema.org/PostalAddress"
                  >
                    <span itemProp="streetAddress">
                      Plaza del Centenario 2, 1º Izq
                    </span>
                    , <span itemProp="postalCode">20006</span>,{" "}
                    <span itemProp="addressLocality">Donostia</span>
                  </address>
                </a>
              </div>
            </div>

            {/* Fila 2: Instagram + email */}
            <div className="row justify-content-between">
              <div className="col-6 d-flex align-items-center justify-content-center">
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="lg"
                  className="mr-2"
                  style={{ color: "#a1544d" }}
                />
                <a
                  href="https://instagram.com/psicologia.amatu"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Perfil de Instagram de Amatu Psicología"
                  style={{ color: "#a1544d" }}
                >
                  psicologia.amatu
                </a>
              </div>

              <div className="col-6 d-flex align-items-center justify-content-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="lg"
                  className="mr-2"
                  style={{ color: "#a1544d" }}
                />
                <a
                  href="mailto:psicologia.amatu@gmail.com"
                  itemProp="email"
                  aria-label="Enviar correo a psicologia.amatu@gmail.com"
                  style={{ color: "#a1544d" }}
                >
                  psicologia.amatu@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <div className="row justify-content-center">
            <Copyright />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterWeb;
