import React from 'react';
import Logo from '../../blocks/logo/Logo';
// import SearchModal from '../../components/modal/SearchModal';
import MenuModal from '../../components/modal/MenuModal';
import LogoAmatu from '../../assets/img/logo/amatu-logo.png'
import { faMobileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = () => {
    return (
        <header id="header" className="site-header">
            <div className="wrapper d-flex justify-content-between">
                <div className="align-self-center">
                    <Logo image={ LogoAmatu } />
                </div>
            <div className="row align-items-center">
                <FontAwesomeIcon icon={faMobileAlt} size="sm" className='mr-2'/>
                <span>+34 608 48 58 81 |</span>
                <FontAwesomeIcon icon={faEnvelope} size="sm" className='mr-2 ml-2' />
                <div className='pb-1'>psicologia.amatu@gmail.com |</div>
                <a href='https://instagram.com/psicologia_amatu' target={`_blank`}>
                    <FontAwesomeIcon icon={faInstagram} size="sm" className='mr-2 ml-2' />
                </a>
            </div>

                {/* <SearchModal /> */}

                {/* <MenuModal /> */}
            </div>
        </header>
    );
};

export default Header;
