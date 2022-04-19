import React, { Fragment } from 'react'
import PageTitle from '../../components/pageTitle'
import PortFolioViewer from '../../components/portfolioViewer'
import "./workPage.scss"


const WorkPage = () => {

    return (
        <Fragment>
            <PageTitle title="Check Out What I can Do" />
            <div className="work-container">
                <PortFolioViewer/>
            </div>
        </Fragment>
    )
}

export default WorkPage