import React, { Fragment } from 'react'
import PageTitle from '../../components/pageTitle'
import PortFolioViewer from '../../components/portfolioViewer'
import "./workPage.scss"
import { Helmet } from "react-helmet";


const WorkPage = () => {

    return (
        <Fragment>
            <PageTitle title="Check Out What I can Do" />
            <div className="work-container">
                <Helmet>
                    <title>Work - Display</title>
                    <meta name="description" content="Find all the best quality products you may need" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="@user" />
                    <meta name="twitter:creator" content="@user" />
                    <meta name="twitter:title" content="Twitter - Display" />
                    <meta name="twitter:description" content="Best Products for your job" />
                    <meta name="twitter:image" content="url_to_image" />
                    <meta property="og:title" content="Work - Display" />
                    <meta property="og:description" content="Best Products for your job" />
                    <meta property="og:image" content="url_to_image" />
                    <meta property="og:url" content="display.abc" />
                    <meta property="og:site_name" content="Display" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="article" />
                    <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
                </Helmet>
                <PortFolioViewer />
            </div>
        </Fragment>
    )
}

export default WorkPage