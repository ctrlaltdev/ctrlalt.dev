import { withRouter } from 'next/router'
import * as Markdown from 'react-markdown'

import fetch from 'isomorphic-unfetch'

import '../style/ProjectPage.sass'
import jsonProjects from './Projects.json'

class ProjectPage extends React.Component {
  constructor(props) {
    super(props)

    this.project = jsonProjects.filter((proj) => (proj.id === this.props.router.query.id) ? true : false)[0]

    this.state = {
      path: this.props.router.asPath,
      id: this.project.id,
      name: this.project.name,
      img: this.project.img,
      content: '`Loading...`'
    }

    this.backgroundColor.bind(this)
  }

  componentWillMount() {
    this.getContent()
    this.getLinks()
  }
 
  render() {
    return (
      <div className="ProjectPage">
        <header>
          <h2>{this.state.name}</h2>
        </header>
        <section>
          <article>
            <Markdown>
              {this.state.content}
            </Markdown>
          </article>
        </section>
        <section>
          <img src={this.state.img} />
          <footer>
            <ul>
              {this.state.links}
            </ul>
          </footer>
        </section>
      </div>
    )
  }

  getContent() {
    if (this.project.github) {

      fetch(`https://raw.githubusercontent.com/${this.project.github}/master/README.md`)
      .then(r => r.text())
      .then(r => {
        this.setState({content: r})
      })

    } else {
      this.setState({content: this.project.content})
    }
  }

  getLinks() {
    if (this.project.links) {

      const links = this.project.links
      const linkList = []
  
      links.map(link => {
        linkList.push(<li key={link.txt}><a href={link.href} target="_blank" onMouseOver={this.backgroundColor}>{link.txt}</a></li>)
      })
  
      this.setState({links: linkList})

    } else {

      const linkList = []
      if (this.project.github) {
        linkList.push(<li key="github"><a href={`https://github.com/${this.project.github}`} target="_blank" onMouseOver={this.backgroundColor}>view on github</a></li>)
      }
      if (this.project.npm) {
        linkList.push(<li key="npm"><a href={`https://npmjs.com/package/${this.project.npm}`} target="_blank" onMouseOver={this.backgroundColor}>view on npm</a></li>)
      }
      if (this.project.codepen) {
        linkList.push(<li key="codepen"><a href={`https://codepen.io/${this.project.codepen}`} target="_blank" onMouseOver={this.backgroundColor}>view on codepen</a></li>)
      }

      this.setState({links: linkList})

    }
  }

  backgroundColor(e) {
    const colors = ['Turquoise', 'Aquamarine', 'SteelBlue', 'Chartreuse', 'SpringGreen', 'ForestGreen', 'OliveDrab', 'Gold', 'Khaki', 'Coral', 'OrangeRed', 'DarkOrange', 'IndianRed', 'Salmon', 'FireBrick', 'Crimson', 'MediumVioletRed', 'HotPink', 'DeepPink', 'Orchid']

    e.target.className = colors[Math.floor(Math.random() * colors.length)]
  }
}

export default withRouter(ProjectPage)