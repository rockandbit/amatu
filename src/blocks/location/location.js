import React, { Component } from "react";
import locationImage from "../../assets/img/location.png";

class Location extends Component {
  render() {
    return (
      <>
        <h3>
          <span className="line">Ubicación</span>
        </h3>
        <a href="https://goo.gl/maps/YZLaPWUUNi42WFUGA" target="_blank">
          <img src={locationImage} alt="Psicología Amatu ubicación" />
        </a>
      </>
    );
  }
}

export default Location;
