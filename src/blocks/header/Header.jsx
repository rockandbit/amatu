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
      <div className="wrapper d-flex justify-content-between">
        <div className="align-self-center">
          <Logo image={LogoAmatu} />
        </div>
        <div className="row align-items-center">
          <div className="px-3">
            <a href="tel:+34608485881">
              <FontAwesomeIcon
                icon={faPhoneAlt}
                size="lg"
                className=""
                color="#a1544d"
              />
            </a>
          </div>
          <div className="px-3">
            <p>
              <a
                href="https://maps.app.goo.gl/b2oadT7H1tfV8gyD7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLocationDot}
                  size="lg"
                  className=""
                  color="#a1544d"
                />
              </a>
            </p>
          </div>
          <div className="px-3">
            <a href="https://instagram.com/psicologia.amatu" target={`_blank`}>
              <FontAwesomeIcon
                icon={faInstagram}
                size="lg"
                className=""
                color="#a1544d"
              />
            </a>
          </div>
          <div className="px-3">
            <p>
              <a href="mailto:psicologia.amatu@gmail.com">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="lg"
                  className=""
                  color="#a1544d"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
