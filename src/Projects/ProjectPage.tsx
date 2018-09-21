import * as React from 'react'
import * as Markdown from 'react-markdown'
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
      img: string,
      github?: string,
      npm?: string,
      content?: string[],
      links?: [{
        href: string,
        txt: string
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
          <img src={this.state.project.img} />
        </section>
      </div>
    )
  }

  private getDescription() {
    if (this.state.project.github) {

      return <Markdown>{fetch(`https://raw.githubusercontent.com/${this.state.project.github}/master/README.md`)
      .then(response => response.body!)
      })}</Markdown>

    } else {

      const descs = this.state.project.content!
      const descList: JSX.Element[] = []
  
      descs.map(desc => {
        descList.push(<p key={desc}>{desc}</p>)
      })

      return descList

    }
  }

  private getLinks() {
    if (this.state.project.links) {
      const links = this.state.project.links
      const linkList: JSX.Element[] = []
  
      links.map(link => {
        linkList.push(<li key={link.txt}><a href={link.href} target="_blank" onMouseOver={this.backgroundColor}>{link.txt}</a></li>)
      })
  
      return linkList
    } else {
      const links: JSX.Element[] = []
      if (this.state.project.github) {
        links.push(<li key="github"><a href={`https://github.com/${this.state.project.github}`} target="_blank" onMouseOver={this.backgroundColor}>view on github</a></li>)
      }
      if (this.state.project.npm) {
        links.push(<li key="npm"><a href={`https://npmjs.com/package/${this.state.project.npm}`} target="_blank" onMouseOver={this.backgroundColor}>view on npm</a></li>)
      }

      return links
    }
  }

  private backgroundColor(e: any) {
    const colors: string[] = ['Turquoise', 'Aquamarine', 'SteelBlue', 'Chartreuse', 'SpringGreen', 'ForestGreen', 'OliveDrab', 'Gold', 'Khaki', 'Coral', 'OrangeRed', 'DarkOrange', 'IndianRed', 'Salmon', 'FireBrick', 'Crimson', 'MediumVioletRed', 'HotPink', 'DeepPink', 'Orchid']

    e.target.className = colors[Math.floor(Math.random() * colors.length)]
  }
}

export default ProjectPage