// src/pages/Crianza.jsx
import React, { Fragment, useEffect, useMemo } from "react";

import Footer from "../blocks/footer/Footer";
import Gallery from "../blocks/gallery/Gallery";
import Header from "../blocks/header/Header.jsx";
import { Helmet } from "react-helmet-async";
import ItemsData from "../data/crianza/crianzaItems.json";
import Loading from "../blocks/loading/Loading";
import LocalBusinessLD from "../seo/LocalBusinessLD.jsx";
import PageTitle from "../blocks/page-title/PageTitle";

const SITE_URL = "https://psicologiamatu.com"; // ← cámbialo por tu dominio real
const PAGE_URL = `${SITE_URL}/crianza`;
const OG_IMAGE = `${SITE_URL}/assets/img/og/crianza-og.jpg`; // ← sube una imagen 1200x630

const Crianza = () => {
  // Mantén las clases del <body> fuera del render para evitar trabajo extra
  useEffect(() => {
    document.body.classList.add("archive", "bg-fixed", "bg-line");
    return () => {
      document.body.classList.remove("archive", "bg-fixed", "bg-line");
    };
  }, []);

  // JSON‑LD: Service + migas
  const serviceLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Acompañamiento en crianza respetuosa",
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
      description:
        "Sesiones para acompañarte en la crianza desde el apego y el vínculo seguro. Presencial en Donostia y online.",
    }),
    []
  );

  const breadcrumbsLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Crianza", item: PAGE_URL },
      ],
    }),
    []
  );

  return (
    <Fragment>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>
          Crianza respetuosa en Donostia y online | Amatu Psicología
        </title>
        <meta
          name="description"
          content="Crianza respetuosa basada en la teoría del apego. Acompañamiento para fortalecer el vínculo y el bienestar familiar. Sesiones en Donostia y online."
        />
        <link rel="canonical" href={PAGE_URL} />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Crianza respetuosa | Amatu Psicología"
        />
        <meta
          property="og:description"
          content="Acompañamiento en crianza desde el apego y la regulación emocional. Donostia y online."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:locale" content="es_ES" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Crianza respetuosa | Amatu Psicología"
        />
        <meta
          name="twitter:description"
          content="Sesiones para fortalecer el vínculo y el apego seguro en familia."
        />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* JSON‑LD */}
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
          title="Crianza"
          quote="Otro mundo es posible, ahora tú eres su mundo"
        />

        <section id="page-content" className="spacer p-top-xl">
          <div className="wrapper">
            <Gallery data={ItemsData} service="crianza" menu />

            {/* ————— Texto original conservado y pulido para SEO ————— */}
            <div className="block mt-0 pt-0" id="crianza-texto">
              <div className="row gutter-width-lg with-pb-lg">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 text-justify">
                  <div className="card border-0">
                    <div className="card-body p-0">
                      <h2 className="h4">
                        Vínculo y apego: una base para el bienestar
                      </h2>
                      <p className="p-large">
                        La literatura científica muestra que una buena calidad
                        del <strong>apego</strong> se asocia a una mejor calidad
                        de vida en la infancia. En estas sesiones trabajamos
                        para <strong>facilitar y mejorar el vínculo</strong>{" "}
                        entre cuidadores e hijos/as, revisando vuestras propias
                        experiencias de infancia y estilos de apego para
                        comprender cómo influyen hoy en vuestra manera de
                        acompañar.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 text-justify">
                  <div className="card border-0">
                    <div className="card-body p-0">
                      <h2 className="h4">
                        Crianza respetuosa y teoría del apego
                      </h2>
                      <p className="p-large">
                        La <strong>crianza respetuosa</strong> se apoya, en gran
                        parte, en la teoría del apego desarrollada por{" "}
                        <strong>Bowlby</strong> (1969; 1988). Los cuidados y la
                        atención que los niños y niñas reciben desde el
                        nacimiento y durante la primera infancia configuran sus
                        expectativas sobre el cuidado que merecen. Esto orienta
                        su desarrollo y, en cierta medida,{" "}
                        <strong>moldea sus conductas</strong> en relaciones
                        futuras.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 text-justify">
                  <div className="card border-0">
                    <div className="card-body p-0">
                      <h2 className="h4">Preguntas habituales</h2>
                      <p className="p-large">
                        ¿Quiere decir que todo lo que haga con mi bebé los
                        primeros 3 años es determinante al 100%?
                        <strong> No.</strong>
                        <br />
                        ¿Existe una única forma “buena” y otra “mala” de criar?
                        <strong> No.</strong>
                        <br />
                        ¿Hay una guía de instrucciones universal?
                        <strong> No.</strong>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 text-justify">
                  <div className="card border-0">
                    <div className="card-body p-0">
                      <h2 className="h4">Acompañar desde una mirada amorosa</h2>
                      <p className="p-large">
                        La crianza respetuosa consiste en{" "}
                        <strong>acompañar</strong> al niño o la niña desde una
                        mirada amorosa y clara, <strong>validando</strong>
                        el ser completo que ya es. Aunque parece sencillo,
                        nuestras “mochilas” y la propia crianza recibida pueden
                        interferir, dando lugar a situaciones en las que el{" "}
                        <strong>automático</strong> toma el mando. Trabajamos
                        para ganar consciencia y regularnos, alineando lo que
                        sentimos con lo que queremos hacer en el día a día.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* (Sin CTA: se ha retirado “Reserva una sesión” como pediste) */}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </Fragment>
  );
};

export default Crianza;
