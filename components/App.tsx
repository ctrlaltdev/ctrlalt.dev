import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './Header/Header'
import About from './About/About'
import Projects from './Projects/Projects'
import ProjectPage from './Projects/ProjectPage'
import Footer from './Footer/Footer'

import 'normalize.css'

class App extends React.Component {

  public render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <main>
            <Route exact path="/" component={About} />
            <Route exact path="/" component={Projects} />
            <Route path="/:projectID" component={Project} />
          </main>
          <Footer />
          <div className="beta"><span>Beta</span></div>
        </div>
      </Router>
    )
  }
}

const Project = ({location}: any) => <ProjectPage location={location} />

export default App
