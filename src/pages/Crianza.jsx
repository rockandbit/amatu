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
import ReactMarkdown from "react-markdown";
import data from "../data/crianza.json"; // 👈 nuevo JSON con el texto

const SITE_URL = "https://psicologiamatu.com";
const PAGE_URL = `${SITE_URL}/crianza`;
const OG_IMAGE = `${SITE_URL}${
  data.ogImage || "/assets/img/og/crianza-og.jpg"
}`;

const Crianza = () => {
  useEffect(() => {
    document.body.classList.add("archive", "bg-fixed", "bg-line");
    return () => {
      document.body.classList.remove("archive", "bg-fixed", "bg-line");
    };
  }, []);

  // JSON-LD: Service + migas
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
      description: data.seoDescription,
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
        <title>{data.seoTitle}</title>
        <meta name="description" content={data.seoDescription} />
        <link rel="canonical" href={PAGE_URL} />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={data.pageTitle} />
        <meta property="og:description" content={data.seoDescription} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:locale" content="es_ES" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.pageTitle} />
        <meta name="twitter:description" content={data.seoDescription} />
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
        <PageTitle title={data.pageTitle} quote={data.quote} />

        <section id="page-content" className="spacer p-top-xl">
          <div className="wrapper">
            <Gallery
              data={ItemsData}
              service="crianza"
              heroImage={data.heroImage}
            />

            <div className="block mt-0 pt-0" id="crianza-texto">
              <div className="row gutter-width-lg with-pb-lg">
                {data.sections.map((s, i) => (
                  <div
                    key={i}
                    className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 text-justify"
                  >
                    <div className="card border-0">
                      <div className="card-body p-0">
                        {s.heading && <h2 className="h4">{s.heading}</h2>}
                        <div className="p-large">
                          <ReactMarkdown>{s.body}</ReactMarkdown>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </Fragment>
  );
};

export default Crianza;
