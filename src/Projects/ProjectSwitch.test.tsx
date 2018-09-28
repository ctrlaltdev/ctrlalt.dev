import * as React from 'react'
import * as ReactDOM from 'react-dom'
import ProjectSwitch from './ProjectSwitch'

it('Projects renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ProjectSwitch />, div)
  ReactDOM.unmountComponentAtNode(div)
})
