import React from 'react'
import { Helmet } from 'react-helmet'

import Header from '../../components/Header/'
import Footer from '../../components/Footer/'

import './project.sass'

const ProjectLayout = ({ title, children, location, color }) => {
  return (
    <>
      <Helmet title={ title ? `${title} - CTRL ALT DEV` : 'CTRL ALT DEV - Yorick Demichelis' }>
        <meta name="theme-color" content={color} />
      </Helmet>
      <div className='project'>
        <Header path pathname={ location.pathname } />
        <main>
          { title && <header>
            <h1>{ title }</h1>
          </header> }
          { children }
        </main>
        <Footer />
      </div>
    </>
  )
}

export default ProjectLayout
