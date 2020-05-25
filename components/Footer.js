import React from 'react'

import '../style/Footer.sass'
import ExtLink from './Links/ExtLink'

const Footer = () => (
  <footer className="Footer">
    <ul>
      <li><ExtLink to="/PGPKEY.txt">PGPKEY</ExtLink></li>
    </ul>
    <nav>
      <ul>
        <li><ExtLink to="https://github.com/ctrlaltdev">
          <img src="/img/github.svg" alt="GitHub" />
        </ExtLink></li>
        <li><ExtLink to="https://codepen.io/ctrlaltdev">
          <img src="/img/codepen.svg" alt="CodePen" />
        </ExtLink></li>
        <li><ExtLink to="https://linkedin.com/in/yorickdemichelis">
          <img src="/img/linkedin.svg" alt="LinkedIn" />
        </ExtLink></li>
      </ul>
    </nav>
  </footer>
)

export default Footer
