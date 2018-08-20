import * as React from 'react'
import burgerCross from '../img/burger.svg'
import './Project.css'

interface InterfaceProjectComponent {
  project: {
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
      <li className="Project">
        <article>
          <header className="ProjectName">
            <h3>{this.props.project.name}</h3>
          </header>
          <button onClick={this.readMore}>
            <img src={burgerCross} />
          </button>
          <div className="ProjectInfo">
            <div className="ProjectDesc">
              {this.createDescription()}
            </div>
            <footer>
              <ul className="Links">
                {this.createLinks()}
              </ul>
            </footer>
          </div>
        </article>
      </li>
    )
  }

  public readMore(e: any) {
    e.target.parentNode.classList.toggle('active')
  }

  private createDescription(descs = this.props.project.content) {
    const descList: JSX.Element[] = []

    descs.map(desc => {
      descList.push(<p key={desc}>{desc}</p>)
    })

    return descList
  }

  private createLinks(links = this.props.project.links) {
    const linkList: JSX.Element[] = []

    links.map(link => {
      linkList.push(<li key={link.name}><a href={link.target}>{link.name}</a></li>)
    })

    return linkList
  }
}

export default Project