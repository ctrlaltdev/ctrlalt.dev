import * as React from 'react'
import Header from './Header/Header'
import * as jsonProjects from './projects.json'
import Projects from './Projects/Projects'


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header />
        <Projects list={jsonProjects} />
      </div>
    )
  }
}

export default App
