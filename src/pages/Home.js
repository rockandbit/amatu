import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";

import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";

import PageTitleHome from "../blocks/page-title/PageTitleHome";
// import Contacts from '../blocks/contacts/Contacts';
import Services from "../blocks/services/Services";
import ContactForm from "../components/form/ContactForm";
import Location from "../blocks/location/location";

const Home = () => {
  document.body.classList.add("home");
  document.body.classList.add("bg-fixed");
  document.body.classList.add("bg-line");

  return (
    <Fragment>
      <MetaTags>
        <meta charSet="UTF-8" />
        <title>Home | Amatu</title>

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
        <PageTitleHome />
        <Services />
        <section id="how" className="block spacer p-top-xl">
          <div className="wrapper">
            <h3>
              ¿Cómo<span className="line">lo hacemos?.</span>
            </h3>

            <div className="row gutter-width-lg">
              <div className="col-sm-6 col-6">
                <div className="card border-0">
                  <div className="card-body p-0">
                    <h4>Presencial</h4>
                    <p className="p-large">La consulta se realizará en....</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-6">
                <div className="card border-0">
                  <div className="card-body p-0">
                    <h4>Online</h4>
                    <p className="p-large">
                      Que el espacio físico no sea un inconveniente para empezar
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="wrapper row">
          <div className="col-md-6">
            <ContactForm />
          </div>
          <div className="col-md-6">
            <Location />
          </div>
        </div>
        {/* <Contacts /> */}
      </main>

      <Footer />
    </Fragment>
  );
};

export default Home;
