import React, { useState } from 'react'
import "./portfolioViewer.scss"
import { ReactComponent as GridView } from '../../assets/icons/grid-view.svg';
import { ReactComponent as ListView } from '../../assets/icons/list-view.svg';

const PortFolioViewer = () => {
    const [viewType, setViewType] = useState('grid');
    const [typeFilter, setTypeFilter] = useState('All');

    return (
        <div className="portfolio-container">
            <div className="filter-viewtype-container">
                <div className="filter-container">
                    <span onClick={() => setTypeFilter('All')} className={`${typeFilter === "All" ? "active" : ""}`}>All</span>
                    <span onClick={() => setTypeFilter('Print')} className={`${typeFilter === "Print" ? "active" : ""}`}>Print</span>
                    <span onClick={() => setTypeFilter('Photography')} className={`${typeFilter === "Photography" ? "active" : ""}`}>Photography</span>
                    <span onClick={() => setTypeFilter('Web')} className={`${typeFilter === "Web" ? "active" : ""}`}>Web</span>
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