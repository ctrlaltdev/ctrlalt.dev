import React from 'react'

import projects from '../../../static/projects.json'

import './projectslist.sass'

export const ProjectItem = ({ project, color }) => {
  return (
    <li>
      <a href={ `/${project.id}/` }>{ project.name }</a> { !project.active && <span className='projectslist__unmaintained'>Unmaintained</span> }
    </li>
  )
}

const renderProjectItemList = (p, i) => {
  return (
    <ProjectItem key={ p.id } project={ p } />
  )
}

const ProjectsList = ({ techs }) => {

  // const [actives, toggleActives] = useState(false)
  // const [inactives, toggleInactives] = useState(false)

  // const active = projects.filter((p) => {
  //   if (techs.length > 0) {
  //     return p.active && p.keywords.some((e) => techs.indexOf(e) > -1)
  //   } else {
  //     return p.active
  //   }
  // })
  // const unmaintained = projects.filter((p) => {
  //   if (techs.length > 0) {
  //     return !p.active && p.keywords.some((e) => techs.indexOf(e) > -1)
  //   } else {
  //     return !p.active
  //   }
  // })

  const filteredProjects = projects.filter((p) => {
    if (techs.length > 0) {
      return p.keywords.some((e) => techs.indexOf(e) > -1)
    }
    return true
  })

  return (
    <>
      <ul className='projectslist'>
        {
          filteredProjects.map(renderProjectItemList)
        }
      </ul>
      {
      //   active.length > 0 &&
      //   <>
      //     <h2 className={ classNames('projectslist__title', 'projectslist__title__active', actives && 'projectslist__title__active--open') }  role='button' tabIndex={0} onKeyPress={ () => toggleActives(!actives) } onClick={ () => toggleActives(!actives) }>Active Projects</h2>
      //     {
      //       actives &&
      //         <ul className='projectslist'>
      //           {
      //             active.map(renderProjectItemList)
      //           }
      //         </ul>
      //     }
      //   </>
      // }
      // {
      //   unmaintained.length > 0 &&
      //   <>
      //     <h2 className={ classNames('projectslist__title', 'projectslist__title__inactive', inactives && 'projectslist__title__inactive--open') } role='button' tabIndex={0} onKeyPress={ () => toggleInactives(!inactives) } onClick={ () => toggleInactives(!inactives) }>Unmaintained Projects</h2>
      //     {
      //       inactives &&
      //         <ul className='projectslist'>
      //           {
      //             unmaintained.map(renderProjectItemList)
      //           }
      //         </ul>
      //     }
      //   </>
      }
    </>
  )
}

export default ProjectsList
