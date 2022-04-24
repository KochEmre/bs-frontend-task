import React, { useState } from "react";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "./carousel.scss"
import CaroselBottom from "./carouselBottom";
import ProjectCard from "../card";

function Carousel({ projectList }) {
  const [activeCard, setActiveCard] = useState(0);

  return (
    // carousel bottom component
    <Splide
      onActive={(slide) => {
        setActiveCard(slide.index+1);
      }}
      hasTrack={false}
      options={{
        type: "loop",
        perPage: 4,
        focus: "center",
        gap: "1%",
        pagination: false,
      }}
    >
      <div className='custom-wrapper'>
        <SplideTrack>
          {projectList.map((project) => {
            return (
              <SplideSlide>
                <ProjectCard key={project?.id} imageUrl={project.imageUrl} />
              </SplideSlide>
            )
          })}
        </SplideTrack>

        <div className='splide__arrows'>
          <CaroselBottom details={projectList.filter(project=>project.id === activeCard)}/>
        </div>
      </div>
    </Splide>
  );
}

export default Carousel;