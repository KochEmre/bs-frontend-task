import React, { Fragment } from 'react'
import ContactForm from '../../components/contactForm'
import MarkedLocationMap from '../../components/googleMap'
import PageTitle from '../../components/pageTitle'
import "./contactPage.scss"

const ContactPage = () => {
  return (
    <Fragment>
      <PageTitle title="Got a Question Or Inquiry?" />
      <div className="map-wrapper">
        <MarkedLocationMap />
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11780.461821395507!2d19.2388991!3d42.4252773!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x896347752287c4b2!2sBild%20Studio!5e0!3m2!1str!2str!4v1650552201698!5m2!1str!2str"  width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
      </div>
      <div className="contact-page-container">
        <div className="contact-form-container">
          <h3>Contact Form</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tincidunt dolor et tristique bibendum. Aenean sollicitudin vitae
            dolor ut posuere.
          </p>
          <div className="form-wrapper">
            <ContactForm />
          </div>
        </div>
        <div className="all-contact-info">
          <div className="contant-info">
            <h3>Contact Info</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit velit justo.</p>
            <p className='dates'>
              <span className="bold">
                email:
              </span>
              <a href="mailto:info@display.com" className="text-green text-sm ">
                info@display.com
              </a>
            </p>
            <p>
              <span>
                phone:
              </span>
              1.306.222.4545
            </p>
            <p>
              222 2nd Ave South
              <br /> Saskabush, SK S7M 1T6
            </p>
          </div>

          <div className="store-hours">
            <h3>Store Hours</h3>
            <div className="date-container">
              <div className="days-container">
                <p className="dates">
                  Monday - Thursday
                </p>
                <p className="dates">
                  Friday
                </p>
                <p className="dates">
                  Saturday
                </p>
                <p className="dates">
                  Sunday & Holidays
                </p>
              </div>
              <div className="hours-container">
                <p className="dates">
                  8 am - 5 pm
                </p>
                <p className="dates">
                  8 am - 6 pm
                </p>
                <p className="dates">
                  9 am - 5 pm
                </p>
                <p className="dates">
                  Closed
                </p>
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </Fragment>
  )
}

export default ContactPage