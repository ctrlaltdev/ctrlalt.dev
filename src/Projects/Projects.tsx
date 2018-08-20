import * as React from 'react'
import Project from './Project'
import './Projects.css'

interface InterfaceProjects {
  list: object[]
}

class Projects extends React.Component<InterfaceProjects, {}> {
  private projList: object[]
  constructor (list: any) {
    super(list)

    this.projList = this.props.list.map((project: any, index: any) => {
        return <Project key={project.id} project={project} />
      }  
    )
  }
  public render() {
    return (
      <ul className="Projects">
        {this.projList}
      </ul>
    )
  }
}

export default Projects