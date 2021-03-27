import React from 'react'

import classNames from 'classnames'

import './techlist.sass'

import skills from '../../../static/skills.json'

const list = skills.filter(s => s.enabled)

const TechList = ({ select, selected }) => {
  return (
    <ul className='techlist'>
      {
        list.map(tech => {
          const style = {
            color: tech.c,
            borderColor: tech.c
          }
          return (
            <li key={tech.n} className={classNames('techlist__item', { 'techlist__item--selected': selected.indexOf(tech.k) > -1 })} role='button' tabIndex={0} onKeyPress={() => select(tech.k)} onClick={() => select(tech.k)} style={style}>
              { tech.n }
            </li>
          )
        })
      }
    </ul>
  )
}

export default TechList
