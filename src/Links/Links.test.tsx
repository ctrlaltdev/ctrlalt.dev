import * as React from 'react'
import * as ReactDOM from 'react-dom'
import LinkFile from './LinkFile'
import ExtLink from './ExtLink'
import DownloadFile from './DownloadFile'

it('LinkFile renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LinkFile to="/test">Test</LinkFile>, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('ExtLink renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ExtLink to="/test">Test</ExtLink>, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('DownloadFile renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DownloadFile src="/test">Test</DownloadFile>, div)
  ReactDOM.unmountComponentAtNode(div)
})
