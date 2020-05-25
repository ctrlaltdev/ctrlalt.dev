import React from 'react'

import jsonProjects from './Projects.json'
import ProjectItem from './ProjectItem'
import '../style/Projects.sass'

const getOffset = () => Math.round(Math.random() * 10000 + new Date().getTime())

const colors = ['Turquoise', 'Aquamarine', 'SteelBlue', 'Chartreuse', 'SpringGreen', 'ForestGreen', 'OliveDrab', 'Gold', 'Khaki', 'Coral', 'OrangeRed', 'DarkOrange', 'IndianRed', 'Salmon', 'FireBrick', 'Crimson', 'MediumVioletRed', 'HotPink', 'DeepPink', 'Orchid']

const getProjects = () => {
  const offset = getOffset()
  return jsonProjects.map((project, index) => (<ProjectItem key={project.id} color={colors[(offset + index) % colors.length]} project={project} />))
}

const Projects = () => (
  <section>
    <ul className="Projects">
      { getProjects() }
    </ul>
  </section>
)

export default Projects
