import React, { Fragment, useEffect, useState } from 'react'
import Carousel from '../carousel'
import "./sliderSection.scss"
import * as API from "../../api/index";

const SliderSection = () => {
    const [projectList, setProjectList] = useState([]);

    const getData = () => {
        //API.getAllProject()
        API.getProjects(0, 9)
            .then((result) => {
                if (result?.data.length > 0)
                    setProjectList(projectList.concat(result.data));
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => { });
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <Fragment>
            <div className="slider-container">
                <h3> A Couple of Our Featured Projects </h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                    eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu
                    sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis
                    tincidunt eros.
                </p>
            </div>
            {projectList.length > 0 ? (
            <Carousel projectList={projectList} />) :
            (
                <span className='no-data'>Couldn't found project data</span>
            )}
            
        </Fragment>

    )
}

export default SliderSection