import React, { useState } from 'react'

import classNames from 'classnames'

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
    <li>
      <a href={ `/${project.id}/` }>{ project.name }</a>
    </li>
  )
}

const ProjectsList = ({ techs }) => {

  const [inactives, toggleInactives] = useState(false)

  const active = projects.filter((p) => {
    if (techs.length > 0) {
      return p.active && p.keywords.some((e) => techs.indexOf(e) > -1)
    } else {
      return p.active
    }
  })
  const unmaintained = projects.filter((p) => {
    if (techs.length > 0) {
      return !p.active && p.keywords.some((e) => techs.indexOf(e) > -1)
    } else {
      return !p.active
    }
  })

  return (
    <>
      {
        active.length > 0 &&
        <>
          <h2 className={ classNames('projectslist__title', 'projectslist__title__active') }>Active Projects</h2>
          <ul className='projectslist'>
            {
              active.map((p, i) => {
                return (
                  <ProjectItem key={ p.id } project={ p } />
                )
              })
            }
          </ul>
        </>
      }
      {
        unmaintained.length > 0 &&
        <>
          <h2 className={ classNames('projectslist__title', 'projectslist__title__inactive', inactives && 'projectslist__title__inactive--open') } onClick={ () => toggleInactives(!inactives) }>Unmaintained Projects</h2>
          {
            inactives &&
              <ul className='projectslist'>
                {
                  unmaintained.map((p, i) => {
                    return (
                      <ProjectItem key={ p.id } project={ p } />
                    )
                  })
                }
              </ul>
          }
        </>
      }
    </>
  )
}

export default ProjectsList