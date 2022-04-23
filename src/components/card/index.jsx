import './card.scss';
import LinkButton from "./../../assets/images/link-button.png"

const ProjectCard = ({ imageUrl }) => {
  return (
    <div className="card-wrapper">
      {/* <img className='background-image' src={imageUrl} alt="Image"  /> */}
      <img className='background-image' src={imageUrl} alt="Project" />
      <img className='link-button' src={LinkButton} alt="Link" onClick={() => window.open("https://www.bild-studio.com/")} />

    </div>
  );
};

export default ProjectCard;
