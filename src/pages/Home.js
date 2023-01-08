import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitleHome from '../blocks/page-title/PageTitleHome';
// import Contacts from '../blocks/contacts/Contacts';
import Services from '../blocks/services/Services';
import ContactForm from '../components/form/ContactForm';
import mapsImage from '../assets/img/maps.png';

const Home = () => {
    document.body.classList.add( 'home' );
    document.body.classList.add( 'bg-fixed' );
    document.body.classList.add( 'bg-line' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Home | Amatu</title>

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
                <PageTitleHome />
                <Services />
                <div className="wrapper row">
                    <div className='col-md-6'>
                        <h3>Cuéntame <span className="line">tu caso</span></h3>
                            <ContactForm />
                        </div>
                        <div className='col-md-6'>
                            <h3><span className="line">Ubicación</span></h3>
                            <img src={mapsImage} alt="Psicología Amatu ubicación"/>
                        </div>
                    </div>
                {/* <Contacts /> */}
            </main>

            <Footer />
        </Fragment>
    );
};

export default Home;
