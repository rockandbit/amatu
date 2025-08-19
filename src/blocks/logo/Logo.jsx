import { Link } from "react-router-dom";
import React from "react";

const Logo = ({ image }) => {
  return (
    <div className="logo">
      <Link to={"/"}>
        <img
          src={image}
          alt="Logo"
          height="auto"
          className="logo primary-logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
