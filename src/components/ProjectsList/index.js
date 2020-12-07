import React from 'react'
import projects from '../../../static/projects.json'

import './projectslist.sass'

const colorScale = int => {
  let r, g, b = 0

  if (int >= 0 && int <= 20) {
    r = 255
    g = Math.round(12.75 * int)
    b = 0
  }
  else if (int > 20 && int <= 40) {
    r = Math.round(-12.75 * int + 510)
    g = 255
    b = 0
  }
  else if (int > 40 && int <= 60) {
    r = 0
    g = 255
    b = Math.round(12.75 * int) - 510
  }
  else if (int > 60 && int <= 80) {
    r = 0
    g = Math.round(-12.75 * int + 1020)
    b = 255
  }
  else {
    r = Math.round(12.75 * int - 1020)
    g = 0
    b = 255
  }

  let h = r * 0x10000 + g * 0x100 + b * 0x1
  return '#' + ('000000' + h.toString(16)).slice(-6)
}

export const ProjectItem = ({ project, color }) => {
  return (
    <li style={color}>
      <a href={ `/${project.id}/` }>{ project.name }</a>
    </li>
  )
}

const ProjectsList = () => {
  return (
    <ul className='projectslist'>
      {
        projects.map((p, i) => {
          const color = { backgroundColor: colorScale(i * 100 / projects.length)  }
          return (
            <ProjectItem key={ p.id } project={ p } color={ color } />
          )
        })
      }
    </ul>
  )
}

export default ProjectsList