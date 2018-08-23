import * as React from 'react'
import logo from '../img/logo.svg'
import './Header.css'
import { HashRouter as Router, Link, Route } from 'react-router-dom'

class Header extends React.Component {

  public state: {
    cli?: string
  }
  private cmds: any[]

  constructor (props: any) {
    super(props)
    this.state = {cli: ""}

    this.changeCLI = this.changeCLI.bind(this)
    this.submitCLI = this.submitCLI.bind(this)

    this.cmds = ['sudo', 'cd', 'rm']
  }

  public render() {
    return (
      <Router>
        <header className="Header">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <span className="startPath">~</span>
          <Route component={Title} />

          <form onSubmit={this.submitCLI}>
            <input type="text" className="path" data-enable-grammarly="false" autoCorrect="off" autoCapitalize="off" autoFocus spellCheck={false} placeholder="awaiting user input" value={this.state.cli} onChange={this.changeCLI} />
          </form>
        </header>
      </Router>
    )
  }

  private changeCLI(e: any) {
    this.setState({cli: e.target.value})
  }

  private submitCLI(e: any) {
    e.preventDefault()
    
    const cmd: string[] | string = this.state.cli!.split(" ")

    if(this.isCMD(cmd[0])) {
      if (cmd.length === 2 && cmd[0] === 'cd') {
        if (this.isHomePath(cmd[1])) {
          location.hash = '/'
          this.setState({cli: ''})
        } else {
          location.hash = '/' + cmd[1]
          this.setState({cli: ''})
        }
      }
    }
  }

  private isCMD(cmd: string): boolean {
    if (this.cmds.includes(cmd)) {
      return true
    } else {
      return false
    }
  }

  private isHomePath(path: string): boolean {
    if (path === '../' || path === '~' || path === '~/')  {
      return true
    } else {
      return false
    }
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
