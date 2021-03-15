import React from 'react'

const renderLinks = (links) => {
  return links.filter(l => l.enabled).map(l => (
    <li key={ l.name }>
      <a href={ l.url } target='_blank' rel='noreferrer'>
        <img src={ l.img } alt={ l.name } />
      </a>
    </li>
  ))
}

const Social = ({ links }) => {
  if (!links || links.length < 1) return null

  return (
    <nav className='SocialLinks'>
      <ul>{ renderLinks(links) }</ul>
    </nav>
  )
}

export default Social
