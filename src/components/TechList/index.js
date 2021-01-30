import React from 'react'

import classNames from 'classnames'

import './techlist.sass'

const list = [
  { n: 'Golang', c: '#7FD5EA', k: 'go' },
  { n: 'JavaScript', c: '#F0DB4F', k: 'js' },
  { n: 'Python', c: '#4B8BBE', k: 'py' },
  // { n: 'PHP', c: '#8892BE', k: 'php' },
  { n: 'SH', c: '#4EAA25', k: 'sh' },
  { n: 'React', c: '#61DBFB', k: 'react' },
  { n: 'GraphQL', c: '#E535AB', k: 'gql' },
  { n: 'Docker', c: '#0DB7ED', k: 'docker' },
  { n: 'K8s', c: '#3371E3', k: 'k8s' },
  { n: 'AWS', c: '#FF9900', k: 'aws' },
  { n: 'Terraform', c: '#623CE4', k: 'tf' }
]

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
            <li key={tech.n} className={classNames('techlist__item', { 'techlist__item--selected': selected.indexOf(tech.k) > -1 })} onClick={() => select(tech.k)} style={style}>
              { tech.n }
            </li>
          )
        })
      }
    </ul>
  )
}

export default TechList
