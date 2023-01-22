import React from "react";
import Logo from "../../blocks/logo/Logo";
import LogoAmatu from "../../assets/img/logo/amatu-logo.png";
import { isMobile } from "react-device-detect";
import {
  faMobileAlt,
  faEnvelope,
  faLocationDot,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header id="header" className="site-header">
      <div className="wrapper d-flex justify-content-between">
        <div className="align-self-center">
          <Logo image={LogoAmatu} />
        </div>
        <div className="row align-items-center">
          {isMobile ? (
            <div className="d-flex flex-column align-items-end mr-4">
              <div className="gt3_header_builder_component gt3_header_builder_text_component align-items-center mb-2">
                <a href="tel:+34608485881">
                  <FontAwesomeIcon
                    icon={faPhoneAlt}
                    size="sm"
                    className="mr-2"
                    color="#B1978D"
                  />
                  +34 608 48 58 81
                </a>
              </div>
              <div className="gt3_header_builder_component gt3_header_builder_text_component">
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="sm"
                  className="mr-2 ml-4"
                  color="#B1978D"
                />
                <a
                  href="https://instagram.com/psicologia.amatu"
                  target={`_blank`}
                >
                  psicologia.amatu
                </a>
              </div>
            </div>
          ) : (
            <>
              <div className="gt3_header_builder_component gt3_header_builder_text_component">
                <p>
                  <a
                    href="https://goo.gl/maps/eAmQxNNSaeBnqJYX8"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      size="sm"
                      className="mr-2 ml-4"
                      color="#B1978D"
                    />
                  </a>
                  {/* Plaza Biteri 1, 1ºD, 20001, Donostia */}
                </p>
              </div>
              <div className="gt3_header_builder_component gt3_header_builder_text_component">
                <p>
                  <a href="mailto:psicologia.amatu@gmail.com">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size="sm"
                      className="mr-2 ml-4"
                      color="#B1978D"
                    />
                  </a>
                </p>
              </div>
              <div className="gt3_header_builder_component gt3_header_builder_text_component align-items-center">
                <a href="#footer">
                  <FontAwesomeIcon
                    icon={faPhoneAlt}
                    size="sm"
                    className="mr-2 ml-4"
                    color="#B1978D"
                  />
                </a>
                {/* Llama +34 608 48 58 81 */}
              </div>
              <div className="gt3_header_builder_component gt3_header_builder_text_component">
                <a
                  href="https://instagram.com/psicologia.amatu"
                  target={`_blank`}
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="sm"
                    className="mr-2 ml-4"
                    color="#B1978D"
                  />
                </a>
              </div>
            </>
          )}
        </div>
        {/* <div className="row align-items-center">
          <FontAwesomeIcon icon={faMobileAlt} size="sm" className="mr-2" />
          <span>+34 608 48 58 81 |</span>
          <FontAwesomeIcon icon={faEnvelope} size="sm" className="mr-2 ml-2" />
          <div className="pb-1">psicologia.amatu@gmail.com |</div>
          <FontAwesomeIcon icon={faLocationDot} size="sm" className="mr-2" />
          <span>Plaza Biteri N |</span>
          <a href="https://instagram.com/psicologia_amatu" target={`_blank`}>
            <FontAwesomeIcon
              icon={faInstagram}
              size="sm"
              className="mr-2 ml-2"
            />
          </a>
        </div> */}

        {/* <SearchModal /> */}

        {/* <MenuModal /> */}
      </div>
    </header>
  );
};

export default Header;
