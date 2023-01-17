import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";

// import Loading from '../blocks/loading/Loading';
import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";

import Gallery from "../blocks/gallery/Gallery";
import PageTitlePerinatal from "../blocks/page-title/PageTitlePerinatal";
import ItemsData from "../data/perinatal/perinatalItems.json";
import PageTitle from "../blocks/page-title/PageTitle";

const Perinatal = () => {
  document.body.classList.add("archive");
  document.body.classList.add("bg-fixed");
  document.body.classList.add("bg-line");

  return (
    <Fragment>
      <MetaTags>
        <meta charSet="UTF-8" />
        <title>Perinatal | Amatu</title>

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
        <PageTitle title={`Perinatal`} />

        <section id="page-content" className="spacer p-top-xl">
          <div className="wrapper">
            <Gallery paddingBottomClass=" pb-0" data={ItemsData} />
          </div>
        </section>
      </main>

      <Footer />
    </Fragment>
  );
};

export default Perinatal;
