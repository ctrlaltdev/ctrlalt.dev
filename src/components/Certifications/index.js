import React from 'react'

import './certifications.sass'

const renderCerts = (certs) => {
  return certs.filter(c => c.enabled).map(c => (
    <li key={ c.name } data-cert-id={ c.id }>
      <a href={ c.url } title={ c.title } target='_blank' rel='noreferrer'>
        <img src={ c.img } alt={ c.name } />
      </a>
    </li>
  ))
}

const Certifications = ({ certs }) => {
  if (!certs || certs.length < 1) return null

  return (
    <div className='Certifications'>
      <ul>{ renderCerts(certs) }</ul>
    </div>
  )
}

export default Certifications
