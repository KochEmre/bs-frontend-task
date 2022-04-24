import React, { Fragment } from 'react'
import "./homePage.scss"
import Button from "../../components/button/index"
import DevicesImage from "./../../assets/images/slider-overimage.png"
import VideoSection from '../../components/videoSection'
import SliderSection from '../../components/sliderSection'
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Home - Display</title>
        <meta name="description" content="Find all the best quality products you may need" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@user" />
        <meta name="twitter:creator" content="@user" />
        <meta name="twitter:title" content="Twitter - Display" />
        <meta name="twitter:description" content="Best Products for your job" />
        <meta name="twitter:image" content="url_to_image" />
        <meta property="og:title" content="Home - Display" />
        <meta property="og:description" content="Best Products for your job" />
        <meta property="og:image" content="url_to_image" />
        <meta property="og:url" content="display.abc" />
        <meta property="og:site_name" content="Display" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
      </Helmet>
      <div className="home-container">
        <div className="banner-container">
          <div className="content-container">
            <img src={DevicesImage} alt="Banner" className='devices' />

            <div className="callout-container">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eratiuy lacus, vel congue mauris. Fusce velitaria justo, faucibus eu.</p>
              <Button>Browse Portfolio</Button>
            </div>

          </div>

        </div>

      </div>
      <VideoSection />
      <SliderSection />
    </Fragment>
  )
}

export default HomePage