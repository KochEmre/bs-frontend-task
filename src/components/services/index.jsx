import React, { useState } from 'react'
import "./services.scss"
import { ReactComponent as Websites } from '../../assets/icons/service-websites.svg';
import { ReactComponent as Photography } from '../../assets/icons/service-photography.svg';
import { ReactComponent as Seo } from '../../assets/icons/service-seo.svg';
import { ReactComponent as Applications } from '../../assets/icons/service-applications.svg';


const Services = () => {
    const [selectedTab, setselectedTab] = useState('websites');

    return (
        <div>
            <div className="tab-background"></div>
            <div className="service-tab-container">
                <div onClick={() => setselectedTab('websites')} className={`${selectedTab === "websites" ? "service-tab-item active" : "service-tab-item"}`}>
                    <div className="icon-wrapper">
                        <Websites />
                    </div>
                    <span>websites</span>
                </div>
                <div onClick={() => setselectedTab('photography')} className={`${selectedTab === "photography" ? "service-tab-item active" : "service-tab-item"}`}>
                    <div className="icon-wrapper">
                        <Photography />
                    </div>
                    <span>photography</span>
                </div>
                <div onClick={() => setselectedTab('seo')} className={`${selectedTab === "seo" ? "service-tab-item active" : "service-tab-item"}`}>
                    <div className="icon-wrapper">
                        <Seo />
                    </div>
                    <span>seo</span>
                </div>
                <div onClick={() => setselectedTab('applications')} className={`${selectedTab === "applications" ? "service-tab-item active" : "service-tab-item"}`}>
                    <div className="icon-wrapper">
                        <Applications />
                    </div>
                    <span>applications</span>
                </div>
            </div>
            <div className="tab-description">
                <p><span>{selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)} Service:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit tab1. Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.</p>
                <p className='list-text'><span className="arrow-span">{"›"}</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. - {selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)}</p>
                <p className='list-text'><span className="arrow-span">{"›"}</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. - {selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)}</p>
                <p className='list-text'><span className="arrow-span">{"›"}</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. - {selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)}</p>
            </div>
        </div>

    )
}

export default Services