import React from 'react'
import { Helmet } from 'react-helmet'

import './reset.css'
import './fonts.sass'
import './global.sass'
import './page.sass'

const PageLayout = ({ title, children }) => {
  return (
    <>
      <Helmet title={ title ? `${title} - CTRL ALT DEV` : 'CTRL ALT DEV - Yorick Demichelis' } />
      <div className='page'>
        <header>
        </header>
        <main>
          { children }
        </main>
      </div>
    </>
  )
}

export default PageLayout
