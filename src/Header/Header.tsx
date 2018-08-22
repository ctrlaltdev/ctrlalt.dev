import * as React from 'react'
import logo from '../img/logo.svg'
import './Header.css'
import { HashRouter as Router, Route } from 'react-router-dom'

class Header extends React.Component {
  public render() {
    return (
      <Router>
        <header className="Header">
          <img src={logo} alt="" />
          <span className="startPath">~</span>
          <Route component={Title} />
          <input type="text" className="path" data-enable-grammarly="false" autoCorrect="off" autoCapitalize="off" autoFocus spellCheck={false} />
        </header>
      </Router>
    )
  }
}

const Title = ({location}: any) => {
  if (location.pathname === "/") {
    return <h1 className="hidden">CTRL_ALT_DEV</h1>
  } else {
    return <h1>{location.pathname}</h1>
  }
  
}

export default Header
