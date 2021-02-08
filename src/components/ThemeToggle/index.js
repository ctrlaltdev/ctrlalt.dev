import React, { useState, useEffect } from 'react'

import { handler, get } from '../../utils/theme'

import './themetoggle.sass'

const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    handler(get())
  }, [])

  const themeHandler = (e) => {
    handler(e.target.checked ? 'dark' : 'light')
    setTheme(get())
  }

  const icon = theme === 'light' ? '☾' : '☼'

  return (
    <div className='theme-toggle' checked={theme === 'light'} role='button' tabIndex={0} onKeyPress={themeHandler} onClick={themeHandler}>{ icon }</div>
  )
}

export default ThemeToggle
