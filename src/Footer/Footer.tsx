import * as React from 'react'
import './Footer.css'
import { Link, HashRouter as Router } from 'react-router-dom'
import LinkFile from '../Links/LinkFile'
import ExtLink from '../Links/ExtLink'
import codepen from '../img/codepen.svg'
import github from '../img/github.svg'
import linkedin from '../img/linkedin.svg'

class Footer extends React.Component {
  public render() {
    return(
      <Router>
        <footer className="Footer">
          <ul>
            <li><Link to="/about">about me</Link></li>
            <li><LinkFile to="/PGPKEY.txt">PGPKEY</LinkFile></li>
          </ul>
          <nav>
            <ul>
              <li><ExtLink to="https://github.com/ctrlaltdev">
                <img src={github} alt="GitHub" />
              </ExtLink></li>
              <li><ExtLink to="https://codepen.io/ctrlaltdev">
                <img src={codepen} alt="CodePen" />
              </ExtLink></li>
              <li><ExtLink to="https://linkedin.com/in/yorickdemichelis">
                <img src={linkedin} alt="LinkedIn" />
              </ExtLink></li>
            </ul>
          </nav>
        </footer>
      </Router>
    )
  }
}

export default Footer