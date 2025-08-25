// FooterCell.jsx
import {
  faEnvelope,
  faLocationDot,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

import Copyright from "./Copyright";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../logo/Logo";
import LogoAmatu from "../../assets/img/logo/amatu-logo-texto.png";
import React from "react";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const FooterCell = () => {
  return (
    <footer id="footer" className="site-footer" role="contentinfo">
      <div
        className="container-fluid p-0"
        itemScope
        itemType="https://schema.org/LocalBusiness"
        aria-label="Información de contacto"
        style={{ overflowX: "hidden" }} // evita scroll horizontal
      >
        <meta itemProp="name" content="Amatu Psicología" />
        <link itemProp="url" href="https://psicologiaamatu.com/" />

        {/* Franja principal */}
        <div
          className="row w-100 m-0 py-4 px-3"
          style={{ backgroundColor: "#f5e1dc" }}
        >
          {/* 1) Logotipo */}
          <div className="col-12 d-flex justify-content-center align-items-center mb-3">
            <a href="/" aria-label="Ir a la página de inicio">
              <Logo image={LogoAmatu} alt="Amatu Psicología - Donostia" />
            </a>
          </div>

          {/* 2) Servicios */}
          <div className="col-12 text-center mb-3">
            <h3 className="h6 mb-2" style={{ color: "#a1544d" }}>
              Servicios
            </h3>
            <nav aria-label="Servicios principales">
              <ul className="list-inline m-0 p-0">
                <li className="list-inline-item mx-2 my-1">
                  <a
                    href="/perinatal"
                    style={{ color: "#a1544d", fontSize: "12px" }}
                  >
                    Perinatal
                  </a>
                </li>
                <li className="list-inline-item mx-2 my-1">
                  <a
                    href="/crianza"
                    style={{ color: "#a1544d", fontSize: "12px" }}
                  >
                    Crianza
                  </a>
                </li>
                <li className="list-inline-item mx-2 my-1">
                  <a
                    href="/bienestar"
                    style={{ color: "#a1544d", fontSize: "12px" }}
                  >
                    Bienestar
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* 3) Contacta con Elisa */}
          <div className="col-12 text-center mb-3">
            <h3 className="h6 mb-2" style={{ color: "#a1544d" }}>
              Contacta con Elisa
            </h3>

            <div className="d-flex align-items-center justify-content-center mb-2 flex-wrap">
              <FontAwesomeIcon
                icon={faPhoneAlt}
                className="mr-2"
                style={{ color: "#a1544d" }}
              />
              <a
                href="tel:+34608485881"
                itemProp="telephone"
                aria-label="Llamar al 608 48 58 81"
                style={{
                  color: "#a1544d",
                  fontSize: "12px",
                  wordBreak: "break-word",
                }}
              >
                +34 608 48 58 81
              </a>
            </div>

            <div className="d-flex align-items-center justify-content-center mb-2 flex-wrap">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="mr-2"
                style={{ color: "#a1544d" }}
              />
              <a
                href="mailto:psicologia.amatu@gmail.com"
                itemProp="email"
                aria-label="Enviar correo a psicologia.amatu@gmail.com"
                style={{
                  color: "#a1544d",
                  fontSize: "12px",
                  wordBreak: "break-word",
                }}
              >
                psicologia.amatu@gmail.com
              </a>
            </div>

            <div className="d-flex align-items-center justify-content-center flex-wrap">
              <FontAwesomeIcon
                icon={faInstagram}
                className="mr-2"
                style={{ color: "#a1544d" }}
              />
              <a
                href="https://instagram.com/psicologia.amatu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil de Instagram de Amatu Psicología"
                style={{
                  color: "#a1544d",
                  fontSize: "12px",
                  wordBreak: "break-word",
                }}
              >
                psicologia.amatu
              </a>
            </div>
          </div>

          {/* 4) Dirección */}
          <div className="col-12 text-center">
            <h3 className="h6 mb-2" style={{ color: "#a1544d" }}>
              Dirección
            </h3>
            <div className="d-flex align-items-start justify-content-center flex-wrap">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="mr-2"
                style={{ color: "#a1544d", marginTop: "2px" }}
              />
              <a
                href="https://maps.app.goo.gl/b2oadT7H1tfV8gyD7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver ubicación en Google Maps"
                style={{
                  color: "#a1544d",
                  fontSize: "10px",
                  textDecoration: "none",
                }}
              >
                <address
                  className="m-0 d-inline"
                  itemProp="address"
                  itemScope
                  itemType="https://schema.org/PostalAddress"
                  style={{
                    color: "#a1544d",
                    fontSize: "11px",
                    wordBreak: "break-word",
                    textAlign: "center",
                  }}
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
        </div>

        {/* Franja inferior */}
        <div className="wrapper w-100 m-0">
          <div className="row justify-content-center m-0">
            <Copyright />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCell;
