import '../style/About.sass'
import TechList from './TechList'

const About = () => (
  <section className="About">
    <h2>Yorick Demichelis</h2>
    <p className="intro">I'm a tech enthusiast, front and back end developer, occasional tinkerer and infosec amateur.</p>
    <ul className="techs">
      {TechList}
    </ul>
  </section>
)

export default About
