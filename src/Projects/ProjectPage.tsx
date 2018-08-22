import * as React from 'react'
import './ProjectPage.css'
import * as jsonProjects from './Projects.json'

interface InterfaceProjectPageComponent {
  page: string,
  location: {
    pathname: string
  }
}

class ProjectPage extends React.Component<InterfaceProjectPageComponent, {}> {

  private project: {
    id: string,
    name: string,
    content: [string],
    links: [{
      target: string,
      name: string
    }]
  }

  constructor(props: any) {
    super(props)

    this.project = jsonProjects.filter((proj: any) => {
      if ("/" + proj.id === this.props.location.pathname) {
        return true
      } else {
        return false
      }
    })
    this.project = this.project[0]

  }

  public render() {
    return (
      <div>
        <header>
          <h2>{this.project.name}</h2>
        </header>
        <article>
          {this.getDescription()}
        </article>
        <footer>
          {this.getLinks()}
        </footer>
      </div>
    )
  }

  private getDescription(descs = this.project.content) {
    const descList: JSX.Element[] = []

    descs.map(desc => {
      descList.push(<p key={desc}>{desc}</p>)
    })

    return descList
  }

  private getLinks(links = this.project.links) {
    const linkList: JSX.Element[] = []

    links.map(link => {
      linkList.push(<li key={link.name}><a href={link.target}>{link.name}</a></li>)
    })

    return linkList
  }
}

export default ProjectPage