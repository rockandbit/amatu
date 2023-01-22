import React from "react";
import { Link } from "react-scroll";
import portada from "../../assets/img/portadaElisa.png";
import { isMobile } from "react-device-detect";

const PageTitleHome = () => {
  return (
    <section id="page-title" className="block">
      <div className="wrapper">
        <div className="row">
          <div className="col col-1 position-relative">
            <div className="title">
              <h2 className="h">
                Amatu<span className="dot">.</span>
              </h2>

              <div className="title-clone">Amatu</div>
            </div>

            <div className="spacer p-top-lg d-flex">
              <p className="p-large w-75 text-justify">
                Es probable que, si has llegado aquí sea porque has sentido que
                hay maneras más amables y respetuosas de estar en el mundo.
                <br />
                Déjame felicitarte por querer darte una <b>oportunidad</b>,{" "}
                <b>invertir en ti</b>, en tu <b>bienestar emocional</b> y en tu{" "}
                <b>potencial</b>.
                <br />
                <br />
                Si sientes que ha llegado el momento, puedo acompañarte en tu
                proceso de vida.
              </p>
            </div>
          </div>

          <div className={`col col-2 ${isMobile ? `ml-2` : ``}`}>
            <div className="d-flex">
              <div className="align-self-start w-100">
                <div className="img object-fit">
                  <div className="object-fit-cover">
                    <img
                      src={portada}
                      className="img-fluid"
                      alt="Elisa Valenzuela Mendoza"
                    />
                  </div>
                </div>
                <div className={isMobile ? `wrapper` : ``}>
                  <p className="p-medium mt-4">
                    Soy <b>psicoterapeuta</b> por vocación y por herencia.
                    <br />
                    Formada en terapias <b>humanistas</b>,{" "}
                    <b>cognitivo-conductuales</b> y <b>corporales</b> desde hace
                    más de 20 años y especializada hoy en día en{" "}
                    <b>psicología</b>, terapia psicocorporal y{" "}
                    <b>salud mental perinatal</b>.
                    <br />
                  </p>
                  <blockquote className="text-right">
                    Elisa Valenzuela Mendoza
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitleHome;
