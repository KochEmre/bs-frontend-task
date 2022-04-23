import React, { useEffect, useState } from 'react'
import "./portfolioViewer.scss"
import { ReactComponent as GridView } from '../../assets/icons/grid-view.svg';
import { ReactComponent as ListView } from '../../assets/icons/list-view.svg';

import * as API from "../../api/index";
import ProjectCard from '../card';

const PortFolioViewer = () => {
    const [viewType, setViewType] = useState('grid');
    const [filterType, setFilterType] = useState('all');
    const [pageSize] = useState(9);
    const [projectList, setProjectList] = useState([]);
    const [projects, setProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    const getData = () => {
        //API.getAllProject()
        API.getProjects(currentPage, pageSize)
            .then((result) => {
                setProjectList([...result.data]);
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => { });
    };

    const handleLoadMore = () => { /* Set raw data part depend on scroll */
        setCurrentPage((previous) => previous + 1);
    };
   
    useEffect(() => { /* Set raw data depend on scroll */
        getData();
    }, [currentPage]);

    useEffect(() => { /* Set Filter data depend on choice */
        debugger;
        if (filterType === "all") {
            setProjects(projectList);
          return;
        }
        const filteredData = projectList.filter((item) => {
          return item.categories.includes(filterType);
        });
        setProjects(filteredData);
      }, [projectList, filterType]);

    return (
        <div className="portfolio-container">
            <div className="filter-viewtype-container">
                <div className="filter-container">
                    <span onClick={() => setFilterType('all')} className={`${filterType === "all" ? "active" : ""}`}>All</span>
                    <span className="backslash">/</span>
                    <span onClick={() => setFilterType('print')} className={`${filterType === "print" ? "active" : ""}`}>Print</span>
                    <span className="backslash">/</span>
                    <span onClick={() => setFilterType('photography')} className={`${filterType === "photography" ? "active" : ""}`}>Photography</span>
                    <span className="backslash">/</span>
                    <span onClick={() => setFilterType('web')} className={`${filterType === "web" ? "active" : ""}`}>Web</span>
                    <span className="backslash">/</span>
                    <span onClick={() => setFilterType('applications')} className={`${filterType === "applications" ? "active" : ""}`}>Applications</span>
                </div>
                <div className="viewtype-container">
                    <GridView title='Grid View' onClick={() => setViewType('grid')} className={`${viewType === "grid" ? "active" : ""}`} />
                    <ListView title='List View' onClick={() => setViewType('list')} className={`${viewType === "list" ? "active" : ""}`} />
                </div>
            </div>
            {projects.length > 0 ? (
            <div className={`${viewType}-wrapper`}>
                {projects.map((project)=>{
                    return (
                        <ProjectCard imageUrl={project.imageUrl}/>
                    )               
                })}
            </div>
            ):
            (
                <span>No Result</span>
            )}
        </div>
    )
}

export default PortFolioViewer