import React from 'react'
import "./pageTitle.scss"

const PageTitle = ({title}) => {
  return (
    <div className='title-container'>
        <div className="title-wrapper">
            <h1>{title}</h1>
        </div>
    </div>
  )
}

export default PageTitle