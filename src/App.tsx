import * as React from 'react'

import Header from './Header/Header'
import ProjectSwitch from './Projects/ProjectSwitch'
import Footer from './Footer/Footer'

class App extends React.Component {

  public render() {
    return (
      <div className="App">
        <Header />
        <ProjectSwitch />
        <Footer />
        <div className="beta"><span>Beta</span></div>
      </div>
    )
  }
}

export default App
