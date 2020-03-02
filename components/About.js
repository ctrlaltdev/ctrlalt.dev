import '../style/About.sass'
import TechList from './TechList'

const About = () => (
  <section className="About">
    <h2>Yorick Demichelis</h2>
    <p className="intro">code + curiosity + cats</p>
    <ul className="techs">
      {TechList}
    </ul>
  </section>
)

export default About
