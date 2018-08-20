import * as React from 'react'
import logo from '../img/logo.svg'
import './Header.css'

class Header extends React.Component {
  public render() {
    return (
      <header className="Header">
        <h1>
          <img src={logo} alt="" />
          CTRL ALT DEV
        </h1>
      </header>
    )
  }
}

export default Header
