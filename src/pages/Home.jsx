import React, { Fragment, useEffect } from "react";

import Footer from "../blocks/footer/Footer";
import Header from "../blocks/header/Header.jsx";
import { Helmet } from "react-helmet-async";
// 🔹 Todo editable desde Decap
import HomeData from "../data/home.json";
import ItemsServices from "../data/services/services.json";
import Loading from "../blocks/loading/Loading";
import LocalBusinessLD from "../seo/LocalBusinessLD.jsx";
import PageTitleHome from "../blocks/page-title/PageTitleHome";
import Services from "../blocks/services/Services";

const SITE_URL = "https://psicologiamatu.com";
const PAGE_URL = `${SITE_URL}/`;

const Home = () => {
  useEffect(() => {
    document.body.classList.add("home", "bg-fixed", "bg-line");
    return () => {
      document.body.classList.remove("home", "bg-fixed", "bg-line");
    };
  }, []);

  const {
    seoTitle = "Psicología en Donostia | Amatu",
    seoDescription = "Psicoterapia para bienestar emocional, crianza y maternidad perinatal en Donostia y online. Acompañamiento cercano, profesional y humano.",
    seoKeywords = "psicología Donostia, terapia online, maternidad, crianza, perinatal, bienestar",
    ogImage = "/assets/img/og/home-og.jpg",
    pageTitle = "Amatu",
    heroImage,
    introHtml, // párrafo largo (HTML)
    authorName, // firma
  } = HomeData || {};

  return (
    <Fragment>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        <link rel="canonical" href={PAGE_URL} />

        {/* SEO Robots */}
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Social */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>

      <Loading />
      <LocalBusinessLD />
      <Header />

      <main id="main" className="site-main">
        {/* Mantiene el mismo layout/clases; solo pasamos props editables */}
        <PageTitleHome
          title={pageTitle}
          heroImage={heroImage}
          introHtml={introHtml}
          authorName={authorName}
        />
        <Services data={ItemsServices} />
      </main>

      <Footer />
    </Fragment>
  );
};

export default Home;
