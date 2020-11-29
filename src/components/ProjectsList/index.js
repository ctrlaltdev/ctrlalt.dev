import React from 'react'
import projects from '../../../static/projects.json'

import './projectslist.sass'

const getOffset = () => Math.round(Math.random() * 10000 + new Date().getTime())

const colors = ['Turquoise', 'Aquamarine', 'SteelBlue', 'Chartreuse', 'SpringGreen', 'ForestGreen', 'OliveDrab', 'Gold', 'Khaki', 'Coral', 'OrangeRed', 'DarkOrange', 'IndianRed', 'Salmon', 'FireBrick', 'Crimson', 'MediumVioletRed', 'HotPink', 'DeepPink', 'Orchid']

export const ProjectItem = ({ project, color }) => {
  return (
    <li className={ color }>
      <a href={ `/${project.id}/` }>{ project.name }</a>
    </li>
  )
}

const ProjectsList = () => {
  return (
    <ul className='projectslist'>
      {
        projects.map((p, i) => {
          const offset = getOffset()
          return (
            <ProjectItem key={ p.id } project={ p } color={ colors[(offset + i) % colors.length] } />
          )
        })
      }
    </ul>
  )
}

export default ProjectsList