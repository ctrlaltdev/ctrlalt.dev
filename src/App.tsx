import * as React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './Header/Header'
import Projects from './Projects/Projects'
import ProjectPage from './Projects/ProjectPage'

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Projects} />
            <Route path="/:projectID" component={ProjectPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
