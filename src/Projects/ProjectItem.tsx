import * as React from 'react'
import './ProjectItem.css'

interface InterfaceProjectComponent {
  project: {
    id: string,
    name: string,
    img: string,
    content: string[],
    links: Array<{target: string, name: string}>
  }
}

class Project extends React.Component<InterfaceProjectComponent, {}> {
  private ref: any
  private colors: string[]
  constructor (project: any) {
    super(project)
    this.ref = React.createRef()
    this.colors = ["Turquoise", "Aquamarine", "SteelBlue", "Chartreuse", "SpringGreen", "ForestGreen", "OliveDrab", "Gold", "Khaki", "Coral", "OrangeRed", "DarkOrange", "IndianRed", "Salmon", "FireBrick", "Crimson", "MediumVioletRed", "HotPink", "DeepPink", "Orchid"]
  }

  public componentDidMount() {
    this.ref.current.style.backgroundImage = `url(${this.props.project.img})`
    this.ref.current.querySelector('h3').classList.add(this.colors[Math.floor(Math.random() * this.colors.length)])
  }

  public render() {
    return (
      <li className="Project" ref={this.ref}>
        <a href={this.props.project.id}>
          <h3>{this.props.project.name}</h3>
        </a>
      </li>
    )
  }
  
  public readMore(e: any) {
    e.target.parentNode.classList.toggle('active')
  }
}

export default Project
