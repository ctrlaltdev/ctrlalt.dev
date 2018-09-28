import * as React from 'react'
import './ProjectItem.css'
import { BrowserRouter as Router } from 'react-router-dom'

interface InterfaceProjectComponent {
  project: {
    id: string,
    name: string,
    content: string[],
    links: Array<{target: string, name: string}>
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
            <a href={this.props.project.id}>
              <h3>{this.props.project.name}</h3>
            </a>
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