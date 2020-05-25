import React from 'react'
import PropTypes from 'prop-types'

import '../style/ProjectItem.sass'

const Project = props => (
  <li className="Project">
    <a href={props.project.id}>
      <h3 className={props.color}>{props.project.name}</h3>
    </a>
  </li>
)

Project.propTypes = {
  project: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired
}

export default Project
