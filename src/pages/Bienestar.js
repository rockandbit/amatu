import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";

import Loading from "../blocks/loading/Loading";
import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";

import Gallery from "../blocks/gallery/Gallery";
import ItemsData from "../data/bienestar/bienestarItems.json";
import PageTitle from "../blocks/page-title/PageTitle";

const Bienestar = () => {
  document.body.classList.add("archive");
  document.body.classList.add("bg-fixed");
  document.body.classList.add("bg-line");

  return (
    <Fragment>
      <MetaTags>
        <meta charSet="UTF-8" />
        <title>Bienestar | Amatu</title>

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
          title={`Bienestar`}
          quote={`Hasta en las aguas más oscuras existen los colores más bellos`}
        />

        <section id="page-content" className="spacer p-top-xl">
          <div className="wrapper">
            <Gallery data={ItemsData} service={`bienestar`} />

            <div className="block spacer p-top-xl" id="crianza-texto">
              <div className="row gutter-width-lg with-pb-lg">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 text-justify">
                  <div className="card border-0">
                    <div className="card-body p-0">
                      <p className="p-large">
                        A veces, en la vida nos perdemos; perdemos ese sentido y
                        esa guía. En ocasiones, paramos a tiempo y en otras
                        seguimos caminando, esperando una señal. A veces esas
                        señales se han convertido en un ovillo enredado, o en un
                        concierto malsonante de sonidos. A veces necesitamos
                        ayuda para desenredar y para volver a diferenciar
                        nuestra voz interna de todo el ruido de alrededor.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 text-justify">
                  <div className="card border-0">
                    <div className="card-body p-0">
                      <p className="p-large">
                        Es probable también que hayas tenido que lidiar con la
                        resistencia y esas “perezas” de mirar el enredo de tu
                        ovillo, pero parece que los intentos de dejarlo atrás no
                        acaban de funcionar porque se enreda de nuevo y aparece
                        el estruendo.
                        <br />
                        Déjame <b>felicitarte por querer invertir en ti</b>, en
                        tu bienestar emocional y en tu potencial.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 text-justify">
                  <div className="card border-0">
                    <div className="card-body p-0">
                      <p className="p-large">
                        Es probable que si has llegado a esta página sientas que
                        hay <b>formas más amables de estar en el mundo</b> y que
                        quieres volver a sentir que la vida es algo más fácil.
                        No sabes muy bien cuándo, pero hay algo en ti que te
                        dice qué <b>quieres darte otra oportunidad</b>, que
                        quieres invertir en estar bien, en reencontrar tu paz y
                        poder seguir con los conciertos desde otro lugar más
                        armonioso para ti.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 text-justify">
                  <div className="card border-0">
                    <div className="card-body p-0">
                      <p className="p-large">
                        Puedo acompañarte a desenredar esos nudos, a mirarlos
                        con amor, a redescubrir tu voz interna, tus señales, a
                        despedir y cerrar ciclos y a explorar nuevas maneras de
                        enfrentarte a “lo de siempre”, así como a sostener tus
                        pasos cuando sientas el vértigo de nuevos caminos. Puedo
                        acompañarte a <b>reconstruir un “yo”</b> más funcional e
                        útil en estos momentos de tu vida, pero sobre todo{" "}
                        <b>más feliz</b>.
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

export default Bienestar;
