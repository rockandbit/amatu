import React, { Fragment, useEffect } from "react";

import Footer from "../blocks/footer/Footer";
import Header from "../blocks/header/Header.jsx";
import { Helmet } from "react-helmet-async";
import ItemsServices from "../data/services/services.json";
import Loading from "../blocks/loading/Loading";
import LocalBusinessLD from "../seo/LocalBusinessLD.jsx";
import PageTitleHome from "../blocks/page-title/PageTitleHome";
import Services from "../blocks/services/Services";

const Home = () => {
  useEffect(() => {
    document.body.classList.add("home", "bg-fixed", "bg-line");
  }, []);

  return (
    <Fragment>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Psicología en Donostia | Amatu</title>
        <meta
          name="description"
          content="Psicoterapia para bienestar emocional, crianza y maternidad perinatal en Donostia y online. Acompañamiento cercano, profesional y humano."
        />
        <meta
          name="keywords"
          content="psicología Donostia, terapia online, maternidad, crianza, perinatal, bienestar"
        />
        <link rel="canonical" href="https://psicologiamatu.com/" />

        {/* SEO Robots */}
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Social */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Psicología en Donostia | Amatu" />
        <meta
          property="og:description"
          content="Acompañamiento en bienestar, crianza y maternidad. Terapia presencial en Donostia y online."
        />
        <meta property="og:url" content="https://psicologiamatu.com/" />
        <meta
          property="og:image"
          content="https://psicologiamatu.com/img/og-image-home.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Psicología en Donostia | Amatu" />
        <meta
          name="twitter:description"
          content="Acompañamiento en bienestar, crianza y maternidad. Terapia presencial en Donostia y online."
        />
        <meta
          name="twitter:image"
          content="https://psicologiamatu.com/img/og-image-home.jpg"
        />
      </Helmet>

      <Loading />
      <LocalBusinessLD />
      <Header />

      <main id="main" className="site-main">
        <PageTitleHome />
        <Services data={ItemsServices} />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Home;
