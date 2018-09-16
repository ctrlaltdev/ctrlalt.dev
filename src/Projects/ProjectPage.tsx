import * as React from 'react'
import './ProjectPage.css'
import * as jsonProjects from './Projects.json'

interface InterfaceProjectPageComponent {
  location: {
    pathname: string,
    search: string,
    hash: string
  }
}

class ProjectPage extends React.Component<InterfaceProjectPageComponent, {}> {
  public state: {
    path: string,
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

  constructor(props: any) {
    super(props)

    const project = jsonProjects.filter((proj: any) => ("/" + proj.id === this.props.location.pathname) ? true : false)

    this.state = {
      path: this.props.location.pathname,
      project: project[0]
    }

    this.backgroundColor.bind(this)
  }

  public componentWillReceiveProps(nextProps: any) {
    const {location: {pathname}} = nextProps
    if(pathname !== this.props.location.pathname){
      const project = jsonProjects.filter((proj: any) => ("/" + proj.id === pathname) ? true : false)
      this.setState({path: pathname, project: project[0]})
    }
  }

  public shouldComponentUpdate(nextProps: any) {
    if(nextProps.location.pathname !== this.props.location.pathname){
      return true
    }
    return false
  }

  public render() {
    return (
      <div className="ProjectPage">
        <header>
          <h2>{this.state.project.name}</h2>
        </header>
        <section>
          <article>
            {this.getDescription()}
          </article>
          <footer>
            <ul>
              {this.getLinks()}
            </ul>
          </footer>
        </section>
        <section>
          <img src="https://placekitten.com/1600/1000" />
        </section>
      </div>
    )
  }

  private getDescription(descs = this.state.project.content) {
    const descList: JSX.Element[] = []

    descs.map(desc => {
      descList.push(<p key={desc}>{desc}</p>)
    })

    return descList
  }

  private getLinks(links = this.state.project.links) {
    const linkList: JSX.Element[] = []

    links.map(link => {
      linkList.push(<li key={link.name}><a href={link.target} onMouseOver={this.backgroundColor}>{link.name}</a></li>)
    })

    return linkList
  }

  private backgroundColor(e: any) {
    const colors: string[] = ['Turquoise', 'Aquamarine', 'SteelBlue', 'Chartreuse', 'SpringGreen', 'ForestGreen', 'OliveDrab', 'Gold', 'Khaki', 'Coral', 'OrangeRed', 'DarkOrange', 'IndianRed', 'Salmon', 'FireBrick', 'Crimson', 'MediumVioletRed', 'HotPink', 'DeepPink', 'Orchid']

    e.target.className = colors[Math.floor(Math.random() * colors.length)]
  }
}

export default ProjectPage