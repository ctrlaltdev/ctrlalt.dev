import * as React from 'react'
import * as jsonProjects from './Projects.json'
import ProjectItem from './ProjectItem'
import './Projects.css'

interface InterfaceProjects {
  list: object[]
}
class Projects extends React.Component<InterfaceProjects, {}> {
  private list: object[]
  private projList: object[]
  constructor (props: any) {
    super(props)

    this.list = jsonProjects
    this.projList = this.list.map((project: any, index: any) => {
        return <ProjectItem key={project.id} project={project} />
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