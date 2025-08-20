// src/pages/About.jsx
import React, { Fragment, useEffect, useMemo } from "react";

import AboutContent from "../blocks/about/AboutContent";
import Awards from "../blocks/about/Awards";
import Footer from "../blocks/footer/Footer";
import Header from "../blocks/header/Header.jsx";
import { Helmet } from "react-helmet-async";
import Loading from "../blocks/loading/Loading";
import LocalBusinessLD from "../seo/LocalBusinessLD";
import MyExperience from "../blocks/about/MyExperience";
import PageTitleAbout from "../blocks/page-title/PageTitleAbout";

const SITE_URL = "https://tudominio.com"; // ← cámbialo por tu dominio real
const PAGE_URL = `${SITE_URL}/sobre-mi`; // ← ajusta a tu slug real (p.ej. /sobre-mi)
const OG_IMAGE = `${SITE_URL}/assets/img/og/about-og.jpg`; // 1200x630 recomendado

const About = () => {
  // Mueve las clases de <body> a un efecto (evita trabajo en render y fugas)
  useEffect(() => {
    document.body.classList.add("page", "bg-fixed", "bg-line");
    return () => {
      document.body.classList.remove("page", "bg-fixed", "bg-line");
    };
  }, []);

  // JSON-LD: AboutPage + Breadcrumbs + (opcional) Person
  const aboutPageLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "Sobre mí",
      url: PAGE_URL,
      lastReviewed: new Date().toISOString().split("T")[0],
      isPartOf: {
        "@type": "WebSite",
        name: "Amatu Psicología",
        url: SITE_URL,
      },
    }),
    []
  );

  const breadcrumbsLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Sobre mí", item: PAGE_URL },
      ],
    }),
    []
  );

  // (Opcional) Si quieres mostrar datos de la terapeuta:
  const personLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Nombre y Apellidos", // ← pon tu nombre real
      jobTitle: "Psicóloga General Sanitaria", // ← ajusta
      worksFor: {
        "@type": "LocalBusiness",
        name: "Amatu Psicología",
        url: SITE_URL,
      },
      url: PAGE_URL,
      image: `${SITE_URL}/assets/img/og/terapeuta.jpg`, // opcional
      sameAs: [
        "https://instagram.com/psicologia.amatu",
        "https://maps.app.goo.gl/b2oadT7H1tfV8gyD7",
      ],
    }),
    []
  );

  return (
    <Fragment>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Sobre mí | Amatu Psicología en Donostia</title>
        <meta
          name="description"
          content="Conoce a la profesional detrás de Amatu Psicología. Acompañamiento cercano y basado en la evidencia para bienestar, perinatalidad y crianza respetuosa."
        />
        <link rel="canonical" href={PAGE_URL} />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Social */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sobre mí | Amatu Psicología" />
        <meta
          property="og:description"
          content="Formación, enfoque y experiencia profesional al servicio de tu bienestar emocional."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:locale" content="es_ES" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sobre mí | Amatu Psicología" />
        <meta
          name="twitter:description"
          content="Conoce mi enfoque y trayectoria en psicoterapia."
        />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(aboutPageLd)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbsLd)}
        </script>
        <script type="application/ld+json">{JSON.stringify(personLd)}</script>
      </Helmet>

      <Loading />
      {/* LocalBusiness global (dirección, teléfono, etc.) */}
      <LocalBusinessLD />

      <Header />

      <main id="main" className="site-main">
        {/* Asegúrate de que PageTitleAbout renderiza H1 único */}
        <PageTitleAbout />

        <section id="page-content" className="spacer p-top-xl">
          <div className="wrapper">
            {/* Contenido con headings jerárquicos dentro (H2/H3) para SEO */}
            <AboutContent />

            <MyExperience />

            <Awards />
          </div>
        </section>
      </main>

      <Footer />
    </Fragment>
  );
};

export default About;
