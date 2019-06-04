import { withRouter } from 'next/router'

import '../style/Header.sass'
import jsonProjects from './Projects.json'

const mainPages = []

class Header extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      cli: "",
      history: [],
      placeholder: ""
    }

    this.changeCLI = this.changeCLI.bind(this)
    this.keyDown = this.keyDown.bind(this)
    this.submitCLI = this.submitCLI.bind(this)

    this.cmds = ['sudo', 'cd', 'ls', 'help', 'rm', 'shutdown']
  }

  render() {
    return (
      <header className="Header">
        <a href="/">
          <img src="/static/img/logo.svg" alt="" />
        </a>
        <span className="startPath">~</span>

        <Title location={this.props.router.asPath || this.props.router.route} />

        <form onSubmit={this.submitCLI}>
          <input type="text" className="path" data-enable-grammarly="false" autoCorrect="off" autoCapitalize="off" autoFocus spellCheck={false} placeholder={this.state.placeholder} value={this.state.cli} onKeyDown={this.keyDown} onChange={this.changeCLI} />
        </form>
      </header>
    )
  }

  componentDidMount() {
    const userhistory = localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')).slice(-100) : []
    this.setState({ userhistory: userhistory })
  }

  changeCLI(e) {
    this.setState({cli: e.target.value})
  }

  keyDown(e) {
    if(e.key === 'Tab') {
      e.preventDefault()
      
      const cmd = this.state.cli.split(" ")
      const lastcmd = cmd[cmd.length - 1]

      if (cmd.length === 1) {
        const autocomplete = this.autoComplete(this.cmds, lastcmd)
      
        if (autocomplete.length === 1) {
          this.setState({cli: autocomplete[0], placeholder: ''})
        }
      } else if (cmd.length === 2) {
        if (cmd[0] === 'cd') {
          const projList = jsonProjects.map((proj) => proj.id)
          const directories = projList.concat(mainPages)
          const autocomplete = this.autoComplete(directories, lastcmd)

          if (autocomplete.length === 1) {
            this.setState({cli: cmd[0] + ' ' + autocomplete[0], placeholder: ''})
          }
        }
      }
    } else if (e.key === 'ArrowUp') {
      if (this.state.historyIndex && this.state.historyIndex !== null) {
        this.setState({cli: this.state.history[this.state.historyIndex-1], historyIndex: this.state.historyIndex-1})
      } else {
        this.setState({cli: this.state.history[this.state.history.length-1], historyIndex: this.state.history.length-1})
      }
    } else if (e.key === 'ArrowDown') {
      if (this.state.historyIndex && this.state.historyIndex !== null) {     
        this.setState({cli: this.state.history[this.state.historyIndex+1], historyIndex: this.state.historyIndex+1})
        if (this.state.historyIndex === this.state.history.length-1) {
          this.setState({cli: '', historyIndex: null})
        }
      }
    }
  }

  submitCLI(e) {
    e.preventDefault()

    const userhistory = this.state.history
    userhistory.push(this.state.cli)
    this.setState({history: userhistory})
    localStorage.setItem('history', JSON.stringify(userhistory))
    
    const cmd = this.state.cli.split(" ")

    if(this.isCMD(cmd[0])) {
      if (cmd.length === 2 && cmd[0] === 'cd') {
        if (this.isHomePath(cmd[1])) {
          this.setState({cli: '', placeholder: ''})
          location.assign(`${window.location.origin}/`)
        } else {
          const projList = jsonProjects.map((proj) => proj.id)
          const directories = projList.concat(mainPages)
          const autocomplete = this.autoComplete(directories, cmd[cmd.length-1])

          if (autocomplete.length === 1) {
            this.setState({cli: '', placeholder: ''})
            location.assign(`${window.location.origin}/${cmd[1]}`)
          } else {
            this.setState({cli: '', placeholder: cmd[1] + ' is not a directory'})
          }
        }
      } else if (cmd[0] === 'ls') {
        this.setState({cli: '', placeholder: "with big powers come big lsponsabilities"})
      } else if (cmd[0] === 'help') {
        this.setState({cli: '', placeholder: "i really shouldn't do all that here"})
      } else if (cmd[0] === 'sudo') {
        this.setState({cli: '', placeholder: "user is not sudoers - admin will be notified"})
      } else if (cmd[0] === 'rm') {
        this.setState({cli: '', placeholder: "unsuficient priviledges"})
      } else if (cmd[0] === 'shutdown') {
        this.setState({cli: '', placeholder: "user must be admin"})
      }
    }
  }

  autoComplete(arraysrc, match) {
    const array = arraysrc.slice(0)
    const matches = []

    while (array.findIndex((elem) => elem.toLowerCase().startsWith(match.toLowerCase())) !== -1) {
      const matchIndex = array.findIndex((elem) => elem.toLowerCase().startsWith(match.toLowerCase()))

      matches.push(array[matchIndex])
      array.splice(matchIndex, 1)
    }

    return matches
  }

  isCMD(cmd) {
    if (this.cmds.includes(cmd)) {
      return true
    } else {
      return false
    }
  }

  isHomePath(path) {
    if (path === '../' || path === '..' || path === '~' || path === '~/' || path === '/')  {
      return true
    } else {
      return false
    }
  }
}

const Title = ({ location }) => {
  if (location === "/") {
    return <h1 className="hidden">CTRL_ALT_DEV</h1>
  } else {
    return <h1>{location}</h1>
  }
  
}

export default withRouter(Header)
