import * as React from 'react'
import './ProjectItem.css'
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
}

export default Project