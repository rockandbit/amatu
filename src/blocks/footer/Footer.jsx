import React from "react";
import { isMobile } from "react-device-detect";
import FooterCell from "./FooterCell";
import FooterWeb from "./FooterWeb";

const Footer = () => (isMobile ? <FooterCell /> : <FooterWeb />);

export default Footer;
