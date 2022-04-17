import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Dribbble } from '../../assets/icons/dribbble.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as GooglePlus } from '../../assets/icons/google-plus.svg';
import { ReactComponent as Pinterest } from '../../assets/icons/pinterest.svg';
import { ReactComponent as RSS } from '../../assets/icons/rss.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';

import "./header.scss"

const Header = () => {
    const { pathname } = useLocation();

    return (
        <div className="header-container">
            <div className="logo-icon-container">
                <Link className='logo-container' to='/'>
                    <Logo className='logo' />
                </Link>
                <div className="icon-container">
                    <div className="icon-wrapper twitter">
                        <Twitter title='Twitter'/>
                    </div>
                    <div className="icon-wrapper facebook">
                        <Facebook title='Facebook'/>
                    </div>
                    <div className="icon-wrapper rss">
                        <RSS title='RSS'/>
                    </div>
                    <div className="icon-wrapper pinterest">
                        <Pinterest title='Pinterest'/>
                    </div>
                    <div className="icon-wrapper googleplus">
                        <GooglePlus title='GooglePlus'/>
                    </div>
                    <div className="icon-wrapper dribbble">
                        <Dribbble title='Dribbble'/>
                    </div>

                </div>
            </div>
            <div className='tab-container'>
                <div className="link-wrapper">
                    <Link to="/" className={`${pathname === "/" ? "active" : ""}`}>
                        HOME
                    </Link>
                </div>
                <div className="link-wrapper">
                    <Link to="/about" className={pathname === "/about" ? "active" : ""}>
                        ABOUT
                    </Link>
                </div>
                <div className="link-wrapper">
                    <Link to="/work" className={`${pathname === "/work" ? "active" : ""}`}>
                        WORK
                    </Link>
                </div>
                <div className="link-wrapper">
                    <Link to="/contact" className={`${pathname === "/contact" ? "active" : ""}`}>
                        CONTACT
                    </Link>
                </div>
            </div>

        </div>

    )
}

export default Header