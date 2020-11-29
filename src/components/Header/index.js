import React from 'react'

import './header.sass'

const Header = ({ path }) => {
  return (
    <header className='header'>
      <a href='/'>
        <img src='/img/logo.svg' alt='' />
      </a>
      <span className='start_path'>~</span>
      <span className='path'>{ path && window.location.pathname }</span>
    </header>
  )
}

export default Header
