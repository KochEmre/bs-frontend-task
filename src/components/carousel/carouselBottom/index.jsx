import React from "react";
import "./carouselBottom.scss"
function CaroselBottom({details}) {
  // debugger;
  return (
    // carousel bottom component
    <div className='carousel-bottom'>
      <svg xmlns="http://www.w3.org/2000/svg"
        className='h-6 w-6 arrow splide__arrow splide__arrow--prev'
        viewBox="0 0 21 31" width="21" height="31"
        fill='currentColor'

        id='prev'
      ><path d="m21 5.7l-9.7 9.8 9.7 9.8-5.7 5.7-15.3-15.5 15.3-15.5z" /></svg>
      <div className='carousel-text-container'>
        <h3 className='carousel-text-header'>{details[0]?.title}</h3>
        <p className='carousel-text-paragraph'>
          {details[0]?.text}
        </p>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg"
        className='h-6 w-6 arrow splide__arrow splide__arrow--next'
        viewBox="0 0 21 31" width="21" height="31"
        fill='currentColor'
        id='next'
      >
        <path d="m0 25.3l9.7-9.8-9.7-9.8 5.7-5.7 15.3 15.5-15.3 15.5z" />
      </svg>
    </div>
  );
}

export default CaroselBottom;
