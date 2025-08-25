import React, { Component } from "react";

class Services extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
    this.imageModules = import.meta.glob("../../assets/img/services/*.jpg", {
      eager: true,
    });
  }

  // Preferir imagen subida desde CMS (item.image). Si no hay, usar el patrón antiguo con imgLink.
  getImageSrc = (item) => {
    if (
      item.image &&
      typeof item.image === "string" &&
      item.image.trim() !== ""
    ) {
      return item.image; // p.ej. "/uploads/perinatal-card.jpg"
    }
    const key = `../../assets/img/services/${item.imgLink}.jpg`;
    const mod = this.imageModules[key];
    if (mod) return mod.default || mod;
    // Placeholder público por si falta
    return "/assets/img/placeholder/service-card.jpg";
  };

  render() {
    return (
      <>
        <section id="services" className="block spacer p-top-xl">
          <div className="wrapper">
            <h3 className="text-right">
              <span className="line">Servicios</span>
            </h3>
          </div>

          <div className="bg-gray-light ptb-services">
            <div className="wrapper">
              <div className="row gutter-width-lg">
                {this.data &&
                  this.data.map((item, key) => {
                    const src = this.getImageSrc(item);
                    return (
                      <div
                        key={key}
                        className="col-xl-4 col-lg-4 col-md-6 col-sm-6"
                      >
                        <div className="card card-post">
                          <div className="card-top position-relative">
                            <a title={item.title} href={item.link}>
                              <div className="img object-fit overflow-hidden">
                                <div className="object-fit-cover transform-scale-h">
                                  <img
                                    className=""
                                    src={src}
                                    alt={item.imgAlt}
                                  />
                                </div>
                              </div>
                            </a>
                            <div className="card-category">
                              <a
                                title={item.categoryTitle}
                                className="btn btn-sm btn-light transform-scale-h border-0"
                                href={item.link}
                              >
                                {item.categoryTitle}
                              </a>
                            </div>
                          </div>

                          <div className="card-body">
                            <h5 className="card-title">
                              <a title={item.title} href={item.link}>
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
