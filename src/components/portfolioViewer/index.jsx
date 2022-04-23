import React, { useEffect, useState } from 'react'
import "./portfolioViewer.scss"
import { ReactComponent as GridView } from '../../assets/icons/grid-view.svg';
import { ReactComponent as ListView } from '../../assets/icons/list-view.svg';
import * as API from "../../api/index";


const PortFolioViewer = () => {
    const [viewType, setViewType] = useState('grid');
    const [typeFilter, setTypeFilter] = useState('All');
    const [projectList, setProjectList] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(9);

    const getData = () => {
        //API.getAllProject()
        API.getProjects(1, 9)
            .then((result) => {
                setProjectList([...result.data]);
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => { });
    };

    useEffect(() => {
        getData();
    }, []);

    const handleLoadMore = () => {
        setCurrentPage((prev) => prev + 1);
    };

    useEffect(() => {
        getData();
    }, [currentPage]);

    useEffect(() => {
        console.log(projectList);
    }, [projectList]);

    return (
        <div className="portfolio-container">
            <div className="filter-viewtype-container">
                <div className="filter-container">
                    <span onClick={() => setTypeFilter('All')} className={`${typeFilter === "All" ? "active" : ""}`}>All</span>
                    <span className="backslash">/</span>
                    <span onClick={() => setTypeFilter('Print')} className={`${typeFilter === "Print" ? "active" : ""}`}>Print</span>
                    <span className="backslash">/</span>
                    <span onClick={() => setTypeFilter('Photography')} className={`${typeFilter === "Photography" ? "active" : ""}`}>Photography</span>
                    <span className="backslash">/</span>
                    <span onClick={() => setTypeFilter('Web')} className={`${typeFilter === "Web" ? "active" : ""}`}>Web</span>
                    <span className="backslash">/</span>
                    <span onClick={() => setTypeFilter('Applications')} className={`${typeFilter === "Applications" ? "active" : ""}`}>Applications</span>
                </div>
                <div className="viewtype-container">
                    <GridView title='Grid View' onClick={() => setViewType('grid')} className={`${viewType === "grid" ? "active" : ""}`} />
                    <ListView title='List View' onClick={() => setViewType('list')} className={`${viewType === "list" ? "active" : ""}`} />
                </div>
            </div>
            <div className={`${viewType}-wrapper`}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default PortFolioViewer