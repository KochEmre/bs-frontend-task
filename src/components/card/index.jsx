import { Fragment, useEffect } from 'react';
import './card.scss';
import MockImage from "./../../assets/images/portfolio-1.png"
import LinkButton from "./../../assets/images/link-button.png"

const Card = ({ cardData }) => {
  const { imageUrl } = cardData;
  return (
    <div className="card-wrapper">
      {/* <img className='background-image' src={imageUrl} alt="Image"  /> */}
      <img className='background-image' src={MockImage} alt="Image" />
      <img className='link-button' src={LinkButton} alt="Link" onClick={() => window.open("https://www.bild-studio.com/")} />

    </div>
  );
};

export default Card;
