import React from 'react'

import './footer.sass'

const Footer = () => {
  return (
    <footer className='footer'>
      <nav>
        <ul>
          <li><a target='_blank' href='https://github.com/ctrlaltdev' rel='noreferrer'>
            <img src='/img/github.svg' alt='GitHub' />
          </a></li>
          <li><a target='_blank' href='https://codepen.io/ctrlaltdev' rel='noreferrer'>
            <img src='/img/codepen.svg' alt='CodePen' />
          </a></li>
          <li><a target='_blank' href='https://linkedin.com/in/yorickdemichelis' rel='noreferrer'>
            <img src='/img/linkedin.svg' alt='LinkedIn' />
          </a></li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
