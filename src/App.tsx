import * as React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Header from './Header/Header'
import Projects from './Projects/Projects'

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Projects} />
        </div>
      </Router>
    )
  }
}

export default App
