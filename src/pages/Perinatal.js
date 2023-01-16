import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";

<<<<<<< Updated upstream
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitleJournalSingle from '../blocks/page-title/PageTitleJournalSingle';
import JournalDescription from '../blocks/journal/JournalDescription';
import JournalMeta from '../blocks/journal/JournalMeta';
import JournalDate from '../blocks/journal/JournalDate';
import JournalComments from '../blocks/journal/JournalComments';
import JournalTags from '../blocks/journal/JournalTags';
import Widget from '../blocks/widget/Widget';

const Perinatal = () => {
    document.body.classList.add( 'single-post' );
    document.body.classList.add( 'bg-fixed' );
    document.body.classList.add( 'bg-line' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Acompañamiento perinatal | Amatu</title>

                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="robots" content="index, follow, noodp" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="notranslate" />
                <meta name="format-detection" content="telephone=no" />
            </MetaTags>

            <Header />

            <main id="main" className="site-main">
                <section id="page-title">
            <div className="wrapper">
                <div className="title position-relative">
                    <h2 className="small">Perinatal<span className="dot">.</span></h2>
                    <h3>"Otro mundo <span className="line">es posible</span>, ahora tú eres su mundo"</h3>
                    <p className='subtitle'>Elisa Valenzuela Mendoza</p>
                </div>
            </div>
        </section>

                <section id="page-content" className="spacer m-top-xl">
                    <div className="wrapper">
                        <div id="single">
                            <div className="row gutter-width-lg">
                                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 position-static single-content">
                                    <div className="img object-fit">
                                        <div className="object-fit-cover">
                                            <img src="assets/img/placeholder/1113x510.jpg" alt="What to do when holidays go wrong" />
                                        </div>
                                    </div>

                                    <div className="bg-half-ring-left"></div>

                                    <JournalDate />

                                    <JournalMeta />

                                    <JournalDescription />

                                    <JournalTags />

                                    <JournalComments />
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                    <Widget />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </Fragment>
    );
=======
// import Loading from '../blocks/loading/Loading';
import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";

import PageTitleWorks from "../blocks/page-title/PageTitleWorks";
import Gallery from "../blocks/gallery/Gallery";

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
        <PageTitleWorks />

        <section id="page-content" className="spacer p-top-xl">
          <div className="wrapper">
            <Gallery paddingBottomClass=" pb-0" />
            <div id="no-maternidad" className="block spacer p-top-xl">
              <div className="row gutter-width-lg with-pb-lg">
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="card border-0">
                    <div className="card-body p-0">
                      <h4>La no maternidad</h4>

                      <p>
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
          </div>
        </section>
      </main>

      <Footer />
    </Fragment>
  );
>>>>>>> Stashed changes
};

export default Perinatal;
