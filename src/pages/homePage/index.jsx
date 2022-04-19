import React from 'react'
import "./homePage.scss"
import BannerBackgroundImage from "./../../assets/images/banner-background.png"
import DevicesImage from "./../../assets/images/slider-overimage.png"
import Button from "../../components/button/index"

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="banner-container">
        <div className="content-container">
          <img src={DevicesImage} alt="Banner" className='devices'/>

          <div className="callout-container">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eratiuy lacus, vel congue mauris. Fusce velitaria justo, faucibus eu.</p>
            <Button>Browse Portfolio</Button>
          </div>

        </div>
        <div className="video-section-container">

        </div>
      </div>
    </div>

  )
}

export default HomePage