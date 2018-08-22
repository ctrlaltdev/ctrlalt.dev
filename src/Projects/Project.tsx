import * as React from 'react'
import './Project.css'
import { Link, HashRouter as Router } from 'react-router-dom'

interface InterfaceProjectComponent {
  project: {
    id: string,
    name: string,
    content: [string],
    links: [{
      target: string,
      name: string
    }]
  }
}

class Project extends React.Component<InterfaceProjectComponent, {}> {
  constructor (project: any) {
    super(project)
  }

  public render() {
    return (
      <Router>
        <li className="Project">
          <article>
            <Link to={this.props.project.id}>
              <h3>{this.props.project.name}</h3>
            </Link>
          </article>
        </li>
      </Router>
    )
  }

  public readMore(e: any) {
    e.target.parentNode.classList.toggle('active')
  }

  // private createDescription(descs = this.props.project.content) {
  //   const descList: JSX.Element[] = []

  //   descs.map(desc => {
  //     descList.push(<p key={desc}>{desc}</p>)
  //   })

  //   return descList
  // }

  // private createLinks(links = this.props.project.links) {
  //   const linkList: JSX.Element[] = []

  //   links.map(link => {
  //     linkList.push(<li key={link.name}><a href={link.target}>{link.name}</a></li>)
  //   })

  //   return linkList
  // }
}

export default Project