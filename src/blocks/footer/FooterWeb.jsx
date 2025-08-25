// FooterWeb.jsx
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

const FooterWeb = () => {
  return (
    <footer id="footer" className="site-footer" role="contentinfo">
      <div
        className="container-fluid p-0"
        itemScope
        itemType="https://schema.org/LocalBusiness"
        aria-label="Información de contacto"
        style={{ overflowX: "hidden" }} // 🔑 evita scroll horizontal
      >
        <meta itemProp="name" content="Amatu Psicología" />
        <link itemProp="url" href="https://psicologiaamatu.com/" />

        {/* Franja principal */}
        <div
          className="row w-100 m-0 py-5 px-2"
          style={{ backgroundColor: "#f5e1dc" }}
        >
          {/* 1) Logotipo */}
          <div className="col-12 col-md-3 d-flex justify-content-center align-items-center mb-4 mb-md-0">
            <a href="/" aria-label="Ir a la página de inicio">
              <Logo image={LogoAmatu} alt="Amatu Psicología - Donostia" />
            </a>
          </div>

          {/* 2) Servicios */}
          <div className="col-12 col-md-3 text-center mb-4 mb-md-0">
            <h3 className="h6 mb-3" style={{ color: "#a1544d" }}>
              Servicios
            </h3>
            <ul className="list-unstyled m-0 p-0">
              <li className="mb-2">
                <a
                  href="/perinatal"
                  style={{ color: "#a1544d", textDecoration: "none" }}
                >
                  Perinatal
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/crianza"
                  style={{ color: "#a1544d", textDecoration: "none" }}
                >
                  Crianza
                </a>
              </li>
              <li>
                <a
                  href="/bienestar"
                  style={{ color: "#a1544d", textDecoration: "none" }}
                >
                  Bienestar
                </a>
              </li>
            </ul>
          </div>

          {/* 3) Contacta con Elisa */}
          <div className="col-12 col-md-3 text-center mb-4 mb-md-0">
            <h3 className="h6 mb-3" style={{ color: "#a1544d" }}>
              Contacta con Elisa
            </h3>
            <div className="d-flex align-items-center justify-content-center mb-2 flex-wrap">
              <FontAwesomeIcon
                icon={faPhoneAlt}
                style={{ color: "#a1544d", marginRight: "5px" }}
              />
              <a
                href="tel:+34608485881"
                style={{
                  color: "#a1544d",
                  wordBreak: "break-word",
                  textDecoration: "none",
                }}
              >
                +34 608 48 58 81
              </a>
            </div>

            <div className="d-flex align-items-center justify-content-center mb-2 flex-wrap">
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ color: "#a1544d", marginRight: "5px" }}
              />
              <a
                href="mailto:psicologia.amatu@gmail.com"
                style={{
                  color: "#a1544d",
                  wordBreak: "break-word",
                  textDecoration: "none",
                }}
              >
                psicologia.amatu@gmail.com
              </a>
            </div>

            <div className="d-flex align-items-center justify-content-center flex-wrap">
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "#a1544d", marginRight: "5px" }}
              />
              <a
                href="https://instagram.com/psicologia.amatu"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#a1544d",
                  wordBreak: "break-word",
                  textDecoration: "none",
                }}
              >
                psicologia.amatu
              </a>
            </div>
          </div>

          {/* 4) Dirección */}
          <div className="col-12 col-md-3 text-center">
            <h3 className="h6 mb-3" style={{ color: "#a1544d" }}>
              Dirección
            </h3>
            <div className="d-flex align-items-start justify-content-center flex-wrap">
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{
                  color: "#a1544d",
                  marginTop: "2px",
                  marginRight: "5px",
                }}
              />
              <a
                href="https://maps.app.goo.gl/b2oadT7H1tfV8gyD7"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#a1544d",
                  wordBreak: "break-word",
                  textAlign: "center",
                  textDecoration: "none",
                }}
              >
                <address className="m-0 d-inline">
                  Plaza del Centenario 2, 1º Izq,
                  <br />
                  20006 Donostia
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

export default FooterWeb;
