import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../button'
import "./footer.scss"

const Footer = () => {
    return (
        <div className="footer-container">
            <div className='footer-title-container'>
                <div className="footer-title-wrapper">
                    <h1>ARE YOU READY TO BE BLOWN AWAY?</h1>
                    <Button >CLICK HERE TO FIND OUT</Button>
                </div>

            </div>
            <div className="footer-bottom-container">
                <small>Copyright 2013 Display. All Rights Reserved.</small>
                <div className='navigation-container'>
                    <Link to="/">
                        HOME
                    </Link>
                    <Link to="/about">
                        ABOUT
                    </Link>
                    <Link to="/work">
                        WORK
                    </Link>
                    <Link to="/contact">
                        CONTACT
                    </Link>
                </div>
            </div>

        </div>

    )
}

export default Footer