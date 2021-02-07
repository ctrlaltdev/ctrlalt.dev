import React from 'react'

import ThemeToggle from '../ThemeToggle/'

import './header.sass'

const Header = ({ path, pathname }) => {
  return (
    <header className='header'>
      <a href='/'>
        <figure />
      </a>
      <span className='start_path'>~</span>
      <span className='path'>{ path && pathname }</span>
      <ThemeToggle />
    </header>
  )
}

export default Header
