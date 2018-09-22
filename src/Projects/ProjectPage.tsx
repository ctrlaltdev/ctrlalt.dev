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
    id: string,
    name: string,
    img: string,
    github?: string,
    npm?: string,
    codepen?: string,
    content: string,
    links?: [{
      href: string,
      txt: string
    }]
  }

  private project: {
    id: string,
    name: string,
    img: string,
    github?: string,
    npm?: string,
    codepen?: string,
    content: string,
    links?: [{
      href: string,
      txt: string
    }]
  }

  constructor(props: any) {
    super(props)

    this.project = jsonProjects.filter((proj: any) => ("/" + proj.id === this.props.location.pathname) ? true : false)[0]

    this.state = {
      path: this.props.location.pathname,
      id: this.project.id,
      name: this.project.name,
      img: this.project.img,
      content: '`Loading...`'
    }

    this.backgroundColor.bind(this)
  }

  public componentWillReceiveProps(nextProps: any) {
    const {location: {pathname}} = nextProps
    if(pathname !== this.props.location.pathname){
      this.project = jsonProjects.filter((proj: any) => ("/" + proj.id === pathname) ? true : false)[0]
      this.setState({
        path: pathname,
        id: this.project.id,
        name: this.project.name,
        img: this.project.img,
        content: '`Loading...`'
      })

      this.getContent()
      this.getLinks()
    }
  }

  public componentWillMount() {
    this.getContent()
    this.getLinks()
  }
 
  public render() {
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

  private getContent() {
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

  private getLinks() {
    if (this.project.links) {

      const links = this.project.links
      const linkList: JSX.Element[] = []
  
      links.map(link => {
        linkList.push(<li key={link.txt}><a href={link.href} target="_blank" onMouseOver={this.backgroundColor}>{link.txt}</a></li>)
      })
  
      this.setState({links: linkList})

    } else {

      const linkList: JSX.Element[] = []
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

  private backgroundColor(e: any) {
    const colors: string[] = ['Turquoise', 'Aquamarine', 'SteelBlue', 'Chartreuse', 'SpringGreen', 'ForestGreen', 'OliveDrab', 'Gold', 'Khaki', 'Coral', 'OrangeRed', 'DarkOrange', 'IndianRed', 'Salmon', 'FireBrick', 'Crimson', 'MediumVioletRed', 'HotPink', 'DeepPink', 'Orchid']

    e.target.className = colors[Math.floor(Math.random() * colors.length)]
  }
}

export default ProjectPage