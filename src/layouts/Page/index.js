import React from 'react'
import { Helmet } from 'react-helmet'

import Header from '../../components/Header/'
import Footer from '../../components/Footer/'

import './reset.css'
import './fonts.sass'
import './global.sass'
import './page.sass'

const PageLayout = ({ title, children }) => {
  return (
    <>
      <Helmet title={ title ? `${title} - CTRL ALT DEV` : 'CTRL ALT DEV - Yorick Demichelis' } />
      <div className='project'>
        <Header />
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

export default PageLayout
