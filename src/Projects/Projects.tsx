import * as React from 'react'
import * as jsonProjects from './Projects.json'
import ProjectItem from './ProjectItem'
import './Projects.css'

interface InterfaceProjects {
  list: object[]
}
class Projects extends React.Component<InterfaceProjects, {}> {
  private imgs: string[]
  private list: object[]
  private projList: object[]
  constructor (props: any) {
    super(props)

    this.imgs = this.shuffleArray(["DTS1.jpg", "DTS2.jpg", "DTS3.jpg", "DTS4.jpg", "DTS5.jpg", "DTS6.jpg", "DTS7.jpg", "DTS8.jpg", "DTS9.jpg", "DTS10.jpg", "DTS11.jpg", "DTS12.jpg", "DTS13.jpg", "DTS14.jpg", "DTS15.jpg", "DTS16.jpg", "DTS17.jpg", "DTS18.jpg", "DTS19.jpg", "DTS20.jpg"])

    this.list = jsonProjects
    this.projList = this.list.map((project: any, index: any) => {
        return <ProjectItem key={project.id} img={this.imgs[index]} project={project} />
      }
    )
  }

  public render() {
    return (
      <section>
        <ul className="Projects">
          {this.projList}
        </ul>
      </section>
    )
  }

  private shuffleArray(array: any[]) {
    let currentIndex = array.length
    let temporaryValue
    let randomIndex

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }

    return array
  }
}

export default Projects