import React from 'react'

import Certifications from '../Certifications/'
import Social from '../Social/'

import certs from '../../../static/certifications.json'
import socials from '../../../static/socials.json'

import './footer.sass'

const Footer = () => {
  return (
    <footer className='footer'>
      <Certifications certs={ certs } />
      <Social links={ socials } />
    </footer>
  )
}

export default Footer
