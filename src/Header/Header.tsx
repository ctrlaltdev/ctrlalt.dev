import * as React from 'react'
import logo from '../img/logo.svg'
import './Header.css'
import { HashRouter as Router, Link, Route } from 'react-router-dom'
import * as jsonProjects from '../Projects/Projects.json'

class Header extends React.Component {

  public state: {
    cli?: string,
    placeholder?: string
  }
  private cmds: any[]

  constructor (props: any) {
    super(props)
    this.state = {cli: "", placeholder: "awaiting user input"}

    this.changeCLI = this.changeCLI.bind(this)
    this.keyDown = this.keyDown.bind(this)
    this.submitCLI = this.submitCLI.bind(this)

    this.cmds = ['sudo', 'cd', 'rm', 'shutdown']
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
            <input type="text" className="path" data-enable-grammarly="false" autoCorrect="off" autoCapitalize="off" autoFocus spellCheck={false} placeholder={this.state.placeholder} value={this.state.cli} onKeyDown={this.keyDown} onChange={this.changeCLI} />
          </form>
        </header>
      </Router>
    )
  }

  private changeCLI(e: any) {
    this.setState({cli: e.target.value})
  }

  private keyDown(e: any) {
    if(e.key === 'Tab') {
      e.preventDefault()
      
      const cmd: string[] | string = this.state.cli!.split(" ")
      const lastcmd: string = cmd[cmd.length - 1]

      if (cmd.length === 1) {
        const autocomplete = this.autoComplete(this.cmds, lastcmd)
      
        if (autocomplete.length === 1) {
          this.setState({cli: autocomplete[0], placeholder: 'awaiting user input'})
        }
      } else if (cmd.length === 2) {
        if (cmd[0] === 'cd') {
          const projList = jsonProjects.map((proj: {id: string}) => proj.id)
          const autocomplete = this.autoComplete(projList, lastcmd)

          if (autocomplete.length === 1) {
            this.setState({cli: cmd[0] + ' ' + autocomplete[0], placeholder: 'awaiting user input'})
          }
        }
      }
    }
  }

  private submitCLI(e: any) {
    e.preventDefault()
    
    const cmd: string[] | string = this.state.cli!.split(" ")

    if(this.isCMD(cmd[0])) {
      if (cmd.length === 2 && cmd[0] === 'cd') {
        if (this.isHomePath(cmd[1])) {
          location.hash = '/'
          this.setState({cli: '', placeholder: 'awaiting user input'})
        } else {
          location.hash = '/' + cmd[1]
          this.setState({cli: '', placeholder: 'awaiting user input'})
        }
      } else if (cmd[0] === 'sudo') {
        this.setState({cli: '', placeholder: "user is not sudoers - admin will be notified"})
      } else if (cmd[0] === 'rm') {
        this.setState({cli: '', placeholder: "unsuficient priviledges"})
      } else if (cmd[0] === 'shutdown') {
        this.setState({cli: '', placeholder: "user must be admin"})
      }
    }
  }

  private autoComplete(arraysrc: string[], match: string): string[] {
    const array = arraysrc.slice(0)
    const matches: string[] = []

    while (array.findIndex((elem) => elem.startsWith(match)) !== -1) {
      const matchIndex = array.findIndex((elem) => elem.startsWith(match))

      matches.push(array[matchIndex])
      array.splice(matchIndex, 1)
    }

    return matches
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
