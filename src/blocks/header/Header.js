import React from 'react';
import Logo from '../../blocks/logo/Logo';
// import SearchModal from '../../components/modal/SearchModal';
import MenuModal from '../../components/modal/MenuModal';
import LogoAmatu from '../../assets/img/logo/amatu.png'
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = () => {
    return (
        <header id="header" className="site-header">
            <div className="wrapper d-flex justify-content-between">
                <div className="align-self-center">
                    <Logo image={ LogoAmatu } />
                </div>
            <div className="search-toggle align-self-center">
                    <span><FontAwesomeIcon icon={faPhone} size="sm" className='mr-1'/>+34 608 48 58 81 / <FontAwesomeIcon icon={faEnvelope} size="sm" className='mr-1' />elis.mvl@gmail.com</span>
                    </div>

                {/* <SearchModal /> */}

                <MenuModal />
            </div>
        </header>
    );
};

export default Header;
