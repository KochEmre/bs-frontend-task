import React from 'react'
import "./carousel.scss"
import { ReactComponent as ArrowLeft } from '../../assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/icons/arrow-right.svg';
import Card from '../card';
import cardData from "../../data/news-mock-data.json"


const Carousel = () => {

    const slideLeft = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    return (
        <div id="main-slider-container">
            <ArrowLeft onClick={slideLeft} />
            <div id="slider">
                {
                    cardData.map((data) => {
                        return (
                            <div className="slider-card-container">
                                <Card key={data.id} cardData={data} />
                            </div>
                        )
                    })
                }
            </div>
            <ArrowRight onClick={slideRight} />
        </div>
    )
}

export default Carousel