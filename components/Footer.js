import '../style/Footer.sass'
import LinkFile from './Links/LinkFile'
import ExtLink from './Links/ExtLink'

const Footer = () => (
  <footer className="Footer">
    <ul>
      <li><LinkFile to="/static/PGPKEY.txt">PGPKEY</LinkFile></li>
    </ul>
    <nav>
      <ul>
        <li><ExtLink to="https://github.com/ctrlaltdev">
          <img src="/static/img/github.svg" alt="GitHub" />
        </ExtLink></li>
        <li><ExtLink to="https://codepen.io/ctrlaltdev">
          <img src="/static/img/codepen.svg" alt="CodePen" />
        </ExtLink></li>
        <li><ExtLink to="https://linkedin.com/in/yorickdemichelis">
          <img src="/static/img/linkedin.svg" alt="LinkedIn" />
        </ExtLink></li>
      </ul>
    </nav>
  </footer>
)

export default Footer