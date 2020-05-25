import React from 'react'
import PropTypes from 'prop-types'

import MainHead from '../components/Head'
import Header from '../components/Header'
import Footer from '../components/Footer'

import '../style/fonts.sass'
import '../style/main.sass'

const Main = ({ title, children }) => (
  <div className='App'>
    <MainHead title={title} />
    <Header />
    <main>
      { children }
      <Footer />
    </main>
  </div>
)

Main.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any
}

export default Main
