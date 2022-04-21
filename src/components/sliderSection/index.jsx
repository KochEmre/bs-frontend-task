import React from 'react'
import Carousel from '../carousel'
import "./sliderSection.scss"

const SliderSection = () => {
    return (
        <div className="slider-container">
            <h3> A Couple of Our Featured Projects </h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu
                sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis
                tincidunt eros.
            </p>
            <Carousel />
        </div>
    )
}

export default SliderSection