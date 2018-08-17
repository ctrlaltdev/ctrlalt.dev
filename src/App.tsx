import * as React from 'react';
import './styles/App.css';

import logo from './img/logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="" />
          <h1 className="App-title">CTRL ALT DEV</h1>
        </header>
        <p className="App-intro">
          <code>hello world</code>
        </p>
      </div>
    );
  }
}

export default App;
