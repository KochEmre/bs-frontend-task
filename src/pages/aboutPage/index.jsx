import React, { Fragment } from 'react'
import PageTitle from '../../components/pageTitle'
import Services from '../../components/services'
import AboutImage from "./../../assets/images/about.png"
import "./aboutPage.scss"
import { Helmet } from "react-helmet";


const AboutPage = () => {
  return (
    <Fragment>
      <PageTitle title="ABOUT MY BUSINESS" />
      <div className="about-container">
        <Helmet>
          <title>About - Display</title>
          <meta name="description" content="Find all the best quality products you may need" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@user" />
          <meta name="twitter:creator" content="@user" />
          <meta name="twitter:title" content="Twitter - Display" />
          <meta name="twitter:description" content="Best Products for your job" />
          <meta name="twitter:image" content="url_to_image" />
          <meta property="og:title" content="About - Display" />
          <meta property="og:description" content="Best Products for your job" />
          <meta property="og:image" content="url_to_image" />
          <meta property="og:url" content="display.abc" />
          <meta property="og:site_name" content="Display" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
        </Helmet>
        <div className="flex-container">
          <img src={AboutImage} alt="About" className='about-image' />
          <div className="column-container">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque eu erat lacus, vel congue mauris. Fusce velit
              justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse
              non urna mi, quis tincidunt eros. Nullam tellus turpis,
              fringilla sit amet congue ut, luctus a nulla. Donec sit amet
              sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque
              pellentesque arcu a elit congue lacinia.
            </p>
            <p>
              Nullam tellus turpis, fringilla sit amet congue ut, luctus a
              nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla
              facilisi. Pellentesque pellentesque arcu a elit congue lacinia.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque eu erat lacus, vel congue mauris. Fusce velit
              justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse
              non urna mi, quis tincidunt eros. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>

        </div>

        <div className="flex-container">
          <div>
            <h3>Mission Statement</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque eu erat lacus, vel congue mauris. Fusce velit
              justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse
              non urna mi, quis tincidunt eros. Nullam tellus turpis,
              fringilla sit amet congue ut, luctus a nulla. Donec sit amet
              sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque
              pellentesque arcu a elit congue lacinia.
            </p>
          </div>
          <div>
            <h3>Fun FActs</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque eu erat lacus, vel congue mauris. Fusce velit
              justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse
              non urna mi, quis tincidunt eros. Nullam tellus turpis,
              fringilla sit amet congue ut, luctus a nulla. Donec sit amet
              sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque
              pellentesque arcu a elit congue lacinia.
            </p>
          </div>
        </div>
        <div className="service-container">
          <h3>Services</h3>
          <Services />
        </div>

      </div>
    </Fragment>
  )
}

export default AboutPage