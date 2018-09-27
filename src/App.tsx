import * as React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import About from './About/About'
import Header from './Header/Header'
import Projects from './Projects/Projects'
import ProjectPage from './Projects/ProjectPage'
import Footer from './Footer/Footer'

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Projects} />
            <Route exact path="/about" component={About} />
            <Route path="/:projectID" component={ProjectPage} />
          </Switch>
          <Footer />
          <div className="beta"><span>Beta</span></div>
        </div>
      </Router>
    )
  }
}

export default App
