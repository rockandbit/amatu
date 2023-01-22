import React from "react";
import servicio from "../../assets/img/servicio1.png";

const HowTo = () => {
  return (
    <>
      <section id="services" className="block spacer p-top-xl">
        <div className="wrapper">
          <h3>
            <a
              title="Blogging"
              className="transform-scale-h"
              href={process.env.PUBLIC_URL + "/journal"}
            >
              <span className="line">¿Cómo lo hacemos?</span>
            </a>
          </h3>
        </div>

        <div className="ptb-services">
          <div className="wrapper">
            <div className="row gutter-width-lg justify-content-center widget-area">
              <div
                key={1}
                className="col-xl-4 col-lg-4 col-md-4 col-sm-4 widget"
              >
                <div className="card card-post">
                  <div className="card-top position-relative">
                    <a title="Consulta online" href={process.env.PUBLIC_URL}>
                      <p className="p-large">Sesión Online</p>
                      <div className="img object-fit overflow-hidden">
                        <div className="object-fit-cover">
                          <p className="p-large">
                            Que lo físico no separe el acompañamiento
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                key={2}
                className="col-xl-4 col-lg-4 col-md-4 col-sm-4 widget"
              >
                <div className="card card-post">
                  <div className="card-top position-relative">
                    <a title="Consulta online" href={process.env.PUBLIC_URL}>
                      <p className="p-large">Sesión Presencial</p>
                      <div className="img object-fit overflow-hidden">
                        <div className="object-fit-cover">
                          <p className="p-large">Presencial....</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowTo;
