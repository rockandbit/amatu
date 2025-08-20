// Copyright.jsx
import React from "react";

const Copyright = () => {
  const year = new Date().getFullYear();
  return (
    <div className="copyright text-center py-3">
      <p className="m-0">
        <small>{year} © Amatu. Todos los derechos reservados</small>
      </p>
    </div>
  );
};

export default Copyright;
