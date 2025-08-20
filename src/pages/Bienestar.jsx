// src/pages/Bienestar.jsx
import React, { Fragment, useEffect, useMemo } from "react";

import Footer from "../blocks/footer/Footer";
import Gallery from "../blocks/gallery/Gallery";
import Header from "../blocks/header/Header.jsx";
import { Helmet } from "react-helmet-async";
import ItemsData from "../data/bienestar/bienestarItems.json";
import Loading from "../blocks/loading/Loading";
import LocalBusinessLD from "../seo/LocalBusinessLD.jsx";
import PageTitle from "../blocks/page-title/PageTitle";

const SITE_URL = "https://psicologiamatu.com"; // ← cámbialo por tu dominio real
const PAGE_URL = `${SITE_URL}/bienestar`;
const OG_IMAGE = `${SITE_URL}/assets/img/og/bienestar-og.jpg`; // ← sube una imagen 1200x630

const Bienestar = () => {
  // Mueve y limpia clases del <body> para evitar side-effects en render
  useEffect(() => {
    document.body.classList.add("archive", "bg-fixed", "bg-line");
    return () => {
      document.body.classList.remove("archive", "bg-fixed", "bg-line");
    };
  }, []);

  // JSON-LD: Service + migas de pan
  const serviceLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Acompañamiento en bienestar emocional",
      description:
        "Psicoterapia para recuperar el equilibrio, clarificar señales internas y cerrar ciclos. Acompañamiento cercano en Donostia y online.",
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
        { "@type": "ListItem", position: 2, name: "Bienestar", item: PAGE_URL },
      ],
    }),
    []
  );

  return (
    <Fragment>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>
          Bienestar emocional en Donostia y online | Amatu Psicología
        </title>
        <meta
          name="description"
          content="Psicoterapia para reconectar contigo, ordenar el ruido interno y cerrar ciclos. Bienestar emocional en Donostia y online, en un espacio seguro y cercano."
        />
        <link rel="canonical" href={PAGE_URL} />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Bienestar emocional | Amatu Psicología"
        />
        <meta
          property="og:description"
          content="Acompañamiento para desenredar nudos, recuperar tu voz interna y avanzar con calma. Donostia y online."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:locale" content="es_ES" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Bienestar emocional | Amatu Psicología"
        />
        <meta
          name="twitter:description"
          content="Psicoterapia cercana para ordenar el ruido y encontrar equilibrio."
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
          title="Bienestar"
          quote="Hasta en las aguas más oscuras existen los colores más bellos"
        />

        <section id="page-content" className="spacer p-top-xl">
          <div className="wrapper">
            {/* Gallery optimizado (con aspect-ratio y margen inferior suave) */}
            <Gallery data={ItemsData} service="bienestar" />

            {/* Texto inmediatamente después de la imagen, con margen controlado */}
            <div className="block mt-4 pt-0" id="bienestar-texto">
              <div className="row gutter-width-lg with-pb-lg">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 text-justify">
                  <div className="card border-0">
                    <div className="card-body p-0">
                      <h2 className="h4">Cuando el rumbo se pierde</h2>
                      <p className="p-large">
                        A veces, en la vida nos perdemos; perdemos ese sentido y
                        esa guía. En ocasiones, paramos a tiempo y en otras
                        seguimos caminando esperando una señal. Es posible que
                        esas señales se hayan convertido en un ovillo enredado o
                        en un concierto malsonante de sonidos. En esos momentos,{" "}
                        <strong>pedir ayuda</strong> puede ser el primer paso
                        para desenredar y volver a diferenciar tu{" "}
                        <strong>voz interna</strong> del ruido de alrededor.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 text-justify">
                  <div className="card border-0">
                    <div className="card-body p-0">
                      <h2 className="h4">Resistencias y mérito de cuidarte</h2>
                      <p className="p-large">
                        Es probable que hayas lidiado con la resistencia y esa
                        pereza de mirar el enredo de tu ovillo; a veces
                        intentamos dejarlo atrás y vuelve a aparecer el
                        estruendo. <br />
                        Déjame <strong>felicitarte por invertir en ti</strong>,
                        en tu bienestar emocional y en tu potencial.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 text-justify">
                  <div className="card border-0">
                    <div className="card-body p-0">
                      <h2 className="h4">Darte otra oportunidad</h2>
                      <p className="p-large">
                        Si estás aquí, quizá sientes que hay{" "}
                        <strong>formas más amables de estar en el mundo</strong>{" "}
                        y quieres que la vida resulte más ligera. Tal vez no
                        sepas cuándo empezó, pero algo dentro de ti te dice que{" "}
                        <strong>quieres darte otra oportunidad</strong>:
                        reencontrar tu paz y seguir con los conciertos desde un
                        lugar más armónico para ti.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 text-justify">
                  <div className="card border-0">
                    <div className="card-body p-0">
                      <h2 className="h4">Acompañamiento para avanzar</h2>
                      <p className="p-large">
                        Puedo acompañarte a <strong>desenredar nudos</strong>,
                        mirarlos con amor, redescubrir tu voz y tus señales; a{" "}
                        <strong>cerrar ciclos</strong> y explorar nuevas formas
                        de afrontar “lo de siempre”. También a sostener tus
                        pasos cuando aparezca el vértigo de los caminos nuevos.
                        Juntas/os podemos <strong>reconstruir un “yo”</strong>{" "}
                        más funcional y útil para este momento de tu vida, y
                        sobre todo <strong>más feliz</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sin CTA: respetamos tu contenido original, solo estructurado con H2 para SEO */}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </Fragment>
  );
};

export default Bienestar;
