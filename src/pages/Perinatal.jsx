import React, { Fragment, useEffect, useMemo } from "react";

import Footer from "../blocks/footer/Footer";
import Gallery from "../blocks/gallery/Gallery";
import Header from "../blocks/header/Header.jsx";
import { Helmet } from "react-helmet-async";
import ItemsData from "../data/perinatal/perinatalItems.json"; // 👈 lista de secciones
import Loading from "../blocks/loading/Loading";
import LocalBusinessLD from "../seo/LocalBusinessLD.jsx";
import PageTitle from "../blocks/page-title/PageTitle";
import data from "../data/perinatal.json"; // 👈 SEO + heroImage
import parse from "html-react-parser";

const SITE_URL = "https://psicologiamatu.com";
const PAGE_URL = `${SITE_URL}/perinatal`;
const OG_IMAGE = `${SITE_URL}/assets/img/og/perinatal-og.jpg`;

const Perinatal = () => {
  useEffect(() => {
    document.body.classList.add("archive", "bg-fixed", "bg-line");
    return () => {
      document.body.classList.remove("archive", "bg-fixed", "bg-line");
    };
  }, []);

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
        <title>{data.seoTitle}</title>
        <meta name="description" content={data.seoDescription} />
        <link rel="canonical" href={PAGE_URL} />

        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={data.pageTitle} />
        <meta property="og:description" content={data.seoDescription} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:locale" content="es_ES" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.pageTitle} />
        <meta name="twitter:description" content={data.seoDescription} />
        <meta name="twitter:image" content={OG_IMAGE} />

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
            {/* Imagen principal + tabs */}
            <Gallery
              data={ItemsData}
              service="perinatal"
              heroImage={data.heroImage}
              menu
            />

            {/* Render de textos SEO-friendly */}
            <div className="block mt-0 pt-0" id="perinatal-texto">
              <div className="row gutter-width-lg with-pb-lg">
                {ItemsData.map((item, i) => (
                  <div
                    key={i}
                    id={item.anchor}
                    className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 text-justify"
                  >
                    <div className="card border-0">
                      <div className="card-body p-0">
                        <h2 className="h4">{item.title}</h2>
                        <p className="p-large">{parse(item.description)}</p>
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

export default Perinatal;
