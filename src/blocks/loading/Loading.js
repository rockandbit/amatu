import React, { Component } from "react";
import logo from "../../assets/img/logo/amatu-loading.png";

class Loading extends Component {
  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve("result");
      }, 1000)
    );
  };

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();
    var loading = document.getElementsByClassName("loading");

    if (data !== null) {
      loading[0].classList.add("animated");
      loading[0].classList.add("slideOutRight");

      // Android check
      var ua = navigator.userAgent.toLowerCase();
      var isAndroid = ua.indexOf("android") > -1;

      // if (isAndroid) {
      //   loading[0].style.display("none");
      // }
    }
  }

  render() {
    return (
      <div className="loading">
        <div className="wrapper h-100">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="loading-content">
              <div className="logo-primary">
                <img
                  className="animated zoomin"
                  src={logo}
                  alt="Amatu logo"
                  width="100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loading;
