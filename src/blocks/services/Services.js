import React from "react";
import { Component } from "react";

class Services extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const data = this.props.data;
    return (
      <>
        <section id="services" className="block spacer p-top-xl">
          <div className="wrapper">
            <h3 className="text-right">
              <a
                title="Blogging"
                className="transform-scale-h"
                href={process.env.PUBLIC_URL + "/journal"}
              >
                <span className="line">Servicios</span>
              </a>
            </h3>
          </div>

          <div className="bg-gray-light ptb-services">
            <div className="wrapper">
              <div className="row gutter-width-lg">
                {data &&
                  data.map((item, key) => {
                    return (
                      <div
                        key={key}
                        className="col-xl-4 col-lg-4 col-md-6 col-sm-6"
                      >
                        <div className="card card-post">
                          <div className="card-top position-relative">
                            <a
                              title={item.title}
                              href={process.env.PUBLIC_URL + item.link}
                            >
                              <div className="img object-fit overflow-hidden">
                                <div className="object-fit-cover transform-scale-h">
                                  <img
                                    className=""
                                    src={require(`../../assets/img/placeholder/${item.imgLink}.jpg`)}
                                    alt={item.imgAlt}
                                  />
                                </div>
                              </div>
                            </a>
                            <div className="card-category">
                              <a
                                title={item.categoryTitle}
                                className="btn btn-sm btn-light transform-scale-h border-0"
                                href={
                                  process.env.PUBLIC_URL + item.categoryLink
                                }
                              >
                                {item.categoryTitle}
                              </a>
                            </div>
                          </div>

                          <div className="card-body">
                            <h5 className="card-title">
                              <a
                                title={item.title}
                                href={process.env.PUBLIC_URL + item.link}
                              >
                                {item.title}
                              </a>
                            </h5>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Services;
