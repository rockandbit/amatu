// src/pages/Perinatal.jsx
import React, { Fragment, useEffect, useMemo } from "react";

import Footer from "../blocks/footer/Footer";
import Gallery from "../blocks/gallery/Gallery";
import Header from "../blocks/header/Header.jsx";
import { Helmet } from "react-helmet-async";
import ItemsData from "../data/perinatal/perinatalItems.json";
import Loading from "../blocks/loading/Loading";
import LocalBusinessLD from "../seo/LocalBusinessLD.jsx";
import PageTitle from "../blocks/page-title/PageTitle";

const SITE_URL = "https://psicologiamatu.com"; // ← cámbialo por tu dominio real
const PAGE_URL = `${SITE_URL}/perinatal`;
const OG_IMAGE = `${SITE_URL}/assets/img/og/perinatal-og.jpg`; // ← sube una imagen 1200x630

const Perinatal = () => {
  // Mueve las clases del <body> a un efecto (mejor rendimiento)
  useEffect(() => {
    document.body.classList.add("archive", "bg-fixed", "bg-line");
    return () => {
      document.body.classList.remove("archive", "bg-fixed", "bg-line");
    };
  }, []);

  // JSON-LD: Service (Perinatal) + Breadcrumbs
  const serviceLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Acompañamiento perinatal",
      description:
        "Psicología perinatal: embarazo, parto, posparto y duelo gestacional. Acompañamiento emocional en Donostia y online.",
      provider: {
        "@type": "LocalBusiness",
        name: "Amatu Psicología",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Plaza del Centenario 2, 1º Izq",
          addressLocality: "Donostia",
          postalCode: "20006",
          addressCountry: "ES",
        },
        telephone: "+34608485881",
        url: SITE_URL,
      },
      areaServed: ["Donostia", "Gipuzkoa", "Online"],
      url: PAGE_URL,
    }),
    []
  );

  const breadcrumbsLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Perinatal", item: PAGE_URL },
      ],
    }),
    []
  );

  return (
    <Fragment>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Psicología perinatal en Donostia y online | Amatu</title>
        <meta
          name="description"
          content="Acompañamiento psicológico perinatal: embarazo, parto, posparto y duelo gestacional. Espacio seguro, cercano y profesional en Donostia y online."
        />
        <link rel="canonical" href={PAGE_URL} />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Psicología perinatal | Amatu Psicología"
        />
        <meta
          property="og:description"
          content="Acompañamiento emocional en embarazo, posparto y duelo. Donostia y online."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:locale" content="es_ES" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Psicología perinatal | Amatu Psicología"
        />
        <meta
          name="twitter:description"
          content="Embarazo, parto, posparto y duelo gestacional. Acompañamiento cercano y profesional."
        />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(serviceLd)}</script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbsLd)}
        </script>
      </Helmet>

      <Loading />
      <LocalBusinessLD />
      <Header />

      <main id="main" className="site-main">
        <PageTitle
          title="Perinatal"
          quote="La semilla no teme a la luz, ni a las tinieblas, usa ambas para crecer"
        />

        {/* Mantén tu layout; Gallery ya añade un margen inferior suave (mb-4) antes del texto */}
        <section id="page-content" className="spacer p-top-xl">
          <div className="wrapper">
            {/* Usa el Gallery que guardamos (con aspect-ratio y margen controlado) */}
            <Gallery data={ItemsData} service="perinatal" menu texts />
          </div>
        </section>
      </main>

      <Footer />
    </Fragment>
  );
};

export default Perinatal;
