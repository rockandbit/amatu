import { Helmet } from "react-helmet-async";
import React from "react";

const SITE_URL = "https://psicologiamatu.com"; // cámbialo
const NAME = "Amatu Psicología";
const TELEPHONE = "+34608485881";

export default function LocalBusinessLD() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness", // o "ProfessionalService"
    name: NAME,
    url: SITE_URL,
    telephone: TELEPHONE,
    image: `${SITE_URL}/assets/img/og/og-default.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plaza del Centenario 2, 1º Izq",
      addressLocality: "Donostia",
      postalCode: "20006",
      addressCountry: "ES",
    },
    areaServed: ["Donostia", "Gipuzkoa", "Online"],
    sameAs: [
      "https://instagram.com/psicologia.amatu",
      "https://maps.app.goo.gl/b2oadT7H1tfV8gyD7",
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(ld)}</script>
    </Helmet>
  );
}
