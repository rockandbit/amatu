import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";

import Loading from "../blocks/loading/Loading";
import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";

import Gallery from "../blocks/gallery/Gallery";
import ItemsData from "../data/crianza/crianzaItems.json";
import PageTitle from "../blocks/page-title/PageTitle";

const Crianza = () => {
  document.body.classList.add("archive");
  document.body.classList.add("bg-fixed");
  document.body.classList.add("bg-line");

  return (
    <Fragment>
      <MetaTags>
        <meta charSet="UTF-8" />
        <title>Crianza | Amatu</title>

        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="robots" content="index, follow, noodp" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />
      </MetaTags>

      <Loading />

      <Header />

      <main id="main" className="site-main">
        <PageTitle
          title={`Crianza`}
          quote={`Otro mundo es posible, ahora tú eres su mundo`}
        />

        <section id="page-content" className="spacer p-top-xl">
          <div className="wrapper">
            <Gallery data={ItemsData} service={`crianza`} menu />

            <div className="block spacer p-top-xl" id="crianza-texto">
              <div className="row gutter-width-lg with-pb-lg">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 text-justify">
                  <div className="card border-0">
                    <div className="card-body p-0">
                      <p className="p-large">
                        Debido a que la literatura ha demostrado que una buena
                        calidad del apego se relaciona con una mejor calidad de
                        vida del niño o niña, estas sesiones se desarrollarán
                        con el propósito de facilitar y mejorar el proceso de
                        apego entre los cuidadores e hijos/as, haciendo una
                        revisión en vuestras propias infancias y estilos de
                        apego.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 text-justify">
                  <div className="card border-0">
                    <div className="card-body p-0">
                      <p className="p-large">
                        La crianza respetuosa se basa en gran parte en la teoría
                        del apego desarrollada por Browlby (1969). Según esta
                        teoría, los cuidados y la atención que los niños y niñas
                        reciben desde su nacimiento y en su primera infancia por
                        parte de sus cuidadores, creará expectativas sobre el
                        tipo de cuidado que recibirá y que merece, lo que guiará
                        su desarrollo y probablemente, en cierta medida,
                        moldeará su conductas en sus relaciones futuras
                        (Browlby, 1988).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 text-justify">
                  <div className="card border-0">
                    <div className="card-body p-0">
                      <p className="p-large">
                        ¿Esto quiere decir que todo lo que haga con mi bebé los
                        primeros 3 años es determinante al 100%? NO
                        <br /> ¿Esto quiere decir que hay una forma buena y otra
                        mala de criar? NO <br />
                        ¿Esto quiere decir que hay una guía de instrucciones? NO{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 text-justify">
                  <div className="card border-0">
                    <div className="card-body p-0">
                      <p className="p-large">
                        La crianza respetuosa se trata de aprender acompañar al
                        niño o la niña desde una mirada amorosa y limpia,
                        validando al ser completo que ya es. Aunque parece
                        fácil, nuestras mochilas y nuestra propia crianza
                        interfieren en estas habilidades. Llegando situaciones
                        incómodas dónde parece que nuestro inconsciente gobierne
                        sobre nuestro consciente y nuestra razón.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </Fragment>
  );
};

export default Crianza;
