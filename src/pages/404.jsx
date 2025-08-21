import React, { Fragment, useEffect } from "react";

import BackToHome from "../components/button/BackToHome";
import Footer from "../blocks/footer/Footer";
import Header from "../blocks/header/Header.jsx";
import { Helmet } from "react-helmet-async";
import Loading from "../blocks/loading/Loading";
import PageTitle404 from "../blocks/page-title/PageTitle404";

const Page404 = () => {
  useEffect(() => {
    document.body.classList.add("error404", "bg-fixed", "bg-line");
    return () => {
      document.body.classList.remove("error404", "bg-fixed", "bg-line");
    };
  }, []);

  return (
    <Fragment>
      <Helmet>
        {/* Si ya están en public/index.html, puedes borrar estas 3 líneas */}
        {/* <meta charSet="UTF-8" /> */}
        {/* <meta httpEquiv="x-ua-compatible" content="ie=edge" /> */}
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}

        <title>404 | Amatu - Página no encontrada</title>
        <meta
          name="description"
          content="La página que buscas no existe o pudo haber sido eliminada."
        />
        <meta name="robots" content="noindex, follow" />
        <meta name="googlebot" content="noindex, follow" />
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />
        {/* Evita usar keywords: ya no se usan para SEO en la mayoría de buscadores */}
        {/* <meta name="keywords" content="" /> */}
      </Helmet>

      <Loading />
      <Header />

      <main id="main" className="site-main bg-half-ring-up">
        <PageTitle404 />
        <div id="page-content" className="block">
          <div className="wrapper">
            <p className="spacer p-top-lg w-50 m-0 mb-4">
              No se ha podido encontrar la página que buscabas. Es posible que
              haya sido eliminada.
            </p>
            <div>
              <BackToHome />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </Fragment>
  );
};

export default Page404;
