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
    <footer id="footer" className="site-footer">
      <div className="">
        <div className="row py-5 px-3" style={{ backgroundColor: "#f5e1dc" }}>
          <div className="col-2 d-flex justify-content-center align-items-center">
            <Logo image={LogoAmatu} />
          </div>
          <div className="col-10 text-center align-items-center py-2">
            <div className="row justify-content-between">
              <div className="mb-3 col-5">
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  size="lg"
                  className="mr-2"
                  style={{ color: "#a1544d" }}
                />
                <span style={{ color: "#a1544d", fontSize: "10px" }}>
                  +34 608 48 58 81
                </span>
              </div>
              <div className="mb-3 col-7">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  size="lg"
                  className="mr-1"
                  style={{ color: "#a1544d" }}
                />
                <span style={{ color: "#a1544d", fontSize: "8px" }}>
                  Plaza del centenario 2, 1º Izq, 20006, Donostia
                </span>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-5">
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="lg"
                  className="mr-2"
                  style={{ color: "#a1544d" }}
                />
                <a
                  href="https://instagram.com/psicologia.amatu"
                  target={`_blank`}
                  className=""
                  style={{ color: "#a1544d" }}
                >
                  <span style={{ color: "#a1544d", fontSize: "9px" }}>
                    psicologia.amatu
                  </span>
                </a>
              </div>
              <div className="col-7">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="lg"
                  className="mr-2"
                  style={{ color: "#a1544d" }}
                />
                <a
                  href="mailto:psicologia.amatu@gmail.com"
                  className=""
                  style={{ color: "#a1544d", fontSize: "9px" }}
                >
                  psicologia.amatu@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="row justify-content-center">
          <Copyright />

          {/* <div className="col-xl-8 col-lg-8 align-self-center">
                        <div className="menu float-xl-right float-lg-right">
                            <FooterMenu />
                        </div>
                    </div> */}
        </div>
      </div>
    </footer>
  );
};

export default FooterCell;
