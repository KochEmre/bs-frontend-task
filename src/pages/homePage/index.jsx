import React, { Fragment } from 'react'
import "./homePage.scss"
import Button from "../../components/button/index"
import DevicesImage from "./../../assets/images/slider-overimage.png"
import VideoSection from '../../components/videoSection'
import SliderSection from '../../components/sliderSection'

const HomePage = () => {
  return (
    <Fragment>
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
      {/* <SliderSection /> */}
    </Fragment>
  )
}

export default HomePage