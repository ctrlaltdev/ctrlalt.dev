import React from 'react'
import { Helmet } from 'react-helmet'

import BeSVG from '../../components/BeSVG/'
import ThemeToggle from '../../components/ThemeToggle/'
import Footer from '../../components/Footer/'

import './reset.css'
import './fonts.sass'
import './global.sass'
import './page.sass'

const PageLayout = ({ title, children }) => {
  return (
    <>
      <Helmet title={ title ? `${title} - CTRL ALT DEV` : 'CTRL ALT DEV - Yorick Demichelis' }>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Helmet>
      <BeSVG />
      <ThemeToggle />
      <div className='page'>
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
