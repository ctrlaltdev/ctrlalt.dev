import * as React from 'react'
import * as ReactDOM from 'react-dom'
import ProjectPage from './ProjectPage'

it('Projects renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ProjectPage location={{pathname: "/pugserver", search: "?test=1", hash: "#/pugserver"}} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
