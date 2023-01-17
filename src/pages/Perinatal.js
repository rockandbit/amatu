import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";

// import Loading from '../blocks/loading/Loading';
import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";

import PageTitleWorks from "../blocks/page-title/PageTitleWorks";
import Gallery from "../blocks/gallery/Gallery";
import PageTitlePerinatal from "../blocks/page-title/PageTitlePerinatal";
import GalleryTexts from "../blocks/gallery/GalleryTexts";

const Perinatal = () => {
  document.body.classList.add("archive");
  document.body.classList.add("bg-fixed");
  document.body.classList.add("bg-line");

  return (
    <Fragment>
      <MetaTags>
        <meta charSet="UTF-8" />
        <title>Perinatal | Amatu</title>

        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="robots" content="index, follow, noodp" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />
      </MetaTags>

      {/* <Loading /> */}

      <Header />

      <main id="main" className="site-main">
        <PageTitlePerinatal />

        <section id="page-content" className="spacer p-top-xl">
          <div className="wrapper">
            <Gallery paddingBottomClass=" pb-0" />
            <GalleryTexts />
            {/* <div id="no-maternidad" className="block spacer p-top-xl">
              <div className="row gutter-width-lg with-pb-lg">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="card border-0">
                    <div className="card-body p-0">
                      <h4>La no maternidad</h4>
                      <p className="p-large">
                        No todas las mujeres hemos nacido para ser madres, a
                        veces toca decidirlo a contracorriente y otras la vida
                        decide por ti. Te acompaño en este camino de
                        frustraciones y de deseos. Aprende a colocar límites y a
                        descubrir tu decisión de cómo vivir tú vida.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="maternidad" className="block spacer p-top-xl">
              <div className="row gutter-width-lg with-pb-lg">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="card border-0">
                    <div className="card-body p-0">
                      <h4>La maternidad</h4>
                      <p className="p-large">
                        Es un cambio que atraviesa todos los ejes de la vida y
                        ésta sociedad cada día más desconectada y acelerada no
                        lo pone fácil. Si eres de las que desea sentirse
                        acompañada y transitar los cambios desde una mirada
                        consciente, estoy para ti desde la búsqueda del embarazo
                        hasta la crianza.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </section>
      </main>

      <Footer />
    </Fragment>
  );
};

export default Perinatal;
