import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import Markdown from 'react-markdown'

import ProjectLayout from '../layouts/Project/'
import GenSVG from '../components/GenSVG/'

const backgroundColor = (e) => {
  const colors = ['Turquoise', 'Aquamarine', 'SteelBlue', 'Chartreuse', 'SpringGreen', 'ForestGreen', 'OliveDrab', 'Gold', 'Khaki', 'Coral', 'OrangeRed', 'DarkOrange', 'IndianRed', 'Salmon', 'FireBrick', 'Crimson', 'MediumVioletRed', 'HotPink', 'DeepPink', 'Orchid']

  e.target.className = colors[Math.floor(Math.random() * colors.length)]
}

const GithubContent = ({ project }) => {
  const [ content, setContent ] = useState( 'Loading...' )

  const getContent = async () => {
    if (project.github) {
      const res = await fetch(`https://raw.githubusercontent.com/${project.github}/main/README.md`).then(r => r.text())
      if (res === '404: Not Found') {
        const res = await fetch(`https://raw.githubusercontent.com/${project.github}/master/README.md`).then(r => r.text())
        setContent(res)
      } else {
        setContent(res)
      }
    } else {
      setContent( project.content )
    }
  }

  useEffect(() => {
    getContent()
  })

  return (
    <Markdown className='project__content'>
      { content }
    </Markdown>
  )
}

const Links = ({ project }) => {
  const linkList = []

  if (project.github) {
    linkList.push(<li key='github'><a href={`https://github.com/${project.github}`} target='_blank' rel='noreferrer' onMouseOver={ backgroundColor } onFocus={ backgroundColor }>github</a></li>)
  }
  if (project.npm) {
    linkList.push(<li key='npm'><a href={`https://npmjs.com/package/${project.npm}`} target='_blank' rel='noreferrer' onMouseOver={ backgroundColor } onFocus={ backgroundColor }>npm</a></li>)
  }
  if (project.codepen) {
    linkList.push(<li key='codepen'><a href={`https://codepen.io/${project.codepen}`} target='_blank' rel='noreferrer' onMouseOver={ backgroundColor } onFocus={ backgroundColor }>codepen</a></li>)
  }
  if (project.links) {
    const links = project.links

    for (const link of links) {
      linkList.push(<li key={link.txt}><a href={link.href} target='_blank' rel='noreferrer' onMouseOver={backgroundColor}  onFocus={ backgroundColor }>{link.txt}</a></li>)
    }
  }

  return (
    <ul>
      { linkList }
    </ul>
  )
}

const Project = ({ pageContext: ctx, location }) => {
  const { project } = ctx

  return (
    <ProjectLayout title={ project.name } location={ location }>
      <div className='project'>
        <section>
          <header>
            <GenSVG id={ project.id } />
          </header>
          <footer>
            <Links project={ project } />
          </footer>
          <article>
            <GithubContent project={ project } />
          </article>
        </section>
      </div>
    </ProjectLayout>
  )
}

export default Project
