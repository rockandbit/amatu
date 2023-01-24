import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";

import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";

import PageTitleHome from "../blocks/page-title/PageTitleHome";
import Services from "../blocks/services/Services";
import Location from "../blocks/location/location";
import Loading from "../blocks/loading/Loading";
import ItemsServices from "../data/services/services.json";
import HowTo from "../blocks/howTo/HowTo";

const Home = () => {
  document.body.classList.add("home");
  document.body.classList.add("bg-fixed");
  document.body.classList.add("bg-line");

  return (
    <Fragment>
      <MetaTags>
        <meta charSet="UTF-8" />
        <title>Inicio | Amatu</title>

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
        <PageTitleHome />
        <Services data={ItemsServices} />

        <HowTo />
        {/* <div className="col-md-6">
            <ContactForm />
          </div> */}
        {/* <div className="">
            <Location />
          </div> */}
        {/* <Contacts /> */}
      </main>
      <Footer />
    </Fragment>
  );
};

export default Home;
