import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import About from '../About/About'
import Projects from './Projects'
import ProjectPage from './ProjectPage'

class ProjectSwitch extends React.Component {
  public render() {
    return (
      <Router>
        <div className="ProjectSwitch">
          <Switch>
            <Route exact path="/" component={Projects} />
            <Route exact path="/about" component={About} />
            <Route path="/:projectID" component={Project} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const Project = ({location}: any) => <ProjectPage location={location} />

export default ProjectSwitch
