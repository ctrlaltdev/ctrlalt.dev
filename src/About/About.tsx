import * as React from 'react'
import './About.css'
import TechList from './TechList'

class About extends React.Component {
  public state: {
    techs: JSX.Element[]
  }
  constructor(props: any) {
    super(props)

    this.state = {
      techs: []
    }
  }

  public componentWillMount() {
    this.setState({techs: TechList})
  }

  public render() {
    return(
      <main className="About">
        <h2>Yorick Demichelis</h2>
        <p className="intro">I'm a tech enthusiast, front and back end developer, occasional tinkerer and infosec amateur.</p>
        <ul className="techs">
          {this.state.techs}
        </ul>
      </main>
    )
  }
}

export default About