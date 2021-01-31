import React from 'react'

import './header.sass'

const Header = ({ path, pathname }) => {
  return (
    <header className='header'>
      <a href='/'>
        <img src='/img/logo.svg' alt='' />
      </a>
      <span className='start_path'>~</span>
      <span className='path'>{ path && pathname }</span>
    </header>
  )
}

export default Header
