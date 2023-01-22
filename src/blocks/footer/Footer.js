import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Copyright from "../footer/Copyright";
import FooterMenu from "../footer/FooterMenu";

const Footer = () => {
  return (
    <footer id="footer" className="site-footer">
      <div className="">
        <div
          className="row justify-content-center p-5 text-white"
          style={{ backgroundColor: "#F2E3E0" }}
        >
          <div className="gt3_header_builder_component gt3_header_builder_text_component">
            <p>
              <FontAwesomeIcon
                icon={faLocationDot}
                size="sm"
                className="mr-2 ml-4"
                style={{ color: "#000000" }}
              />
              <span style={{ color: "#000000" }}>
                {" "}
                Plaza Biteri 1, 1ºD, 20001, Donostia
              </span>
            </p>
          </div>
          <div className="gt3_header_builder_component gt3_header_builder_text_component">
            <p>
              <FontAwesomeIcon
                icon={faEnvelope}
                size="sm"
                className="mr-2 ml-4"
                style={{ color: "#000000" }}
              />
              <a
                href="mailto:psicologia.amatu@gmail.com"
                className=""
                style={{ color: "#000000" }}
              >
                psicologia.amatu@gmail.com
              </a>
            </p>
          </div>
          <div className="gt3_header_builder_component gt3_header_builder_text_component">
            <FontAwesomeIcon
              icon={faPhoneAlt}
              size="sm"
              className="mr-2 ml-4"
              style={{ color: "#000000" }}
            />
            <span style={{ color: "#000000" }}>+34 608 48 58 81</span>
          </div>
          <div className="gt3_header_builder_component gt3_header_builder_text_component">
            <FontAwesomeIcon
              icon={faInstagram}
              size="sm"
              className="mr-2 ml-4"
              style={{ color: "#000000" }}
            />
            <a
              href="https://instagram.com/psicologia.amatu"
              target={`_blank`}
              className=""
              style={{ color: "#000000" }}
            >
              <span style={{ color: "#000000" }}>psicologia.amatu</span>
            </a>
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

export default Footer;
