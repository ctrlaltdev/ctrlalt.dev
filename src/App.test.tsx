import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import * as request from 'request'

it('App renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('Links are not 404', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)

  const links: NodeListOf<Element> = div.querySelectorAll('a[href^="http"]');
  [].forEach.call(links, (link: Element) => {

    const options: request.CoreOptions & request.UrlOptions = {
      url: link.getAttribute('href')!
    }
    request
      .get(options)
      .on('response', (res: any) => {
        expect(res.statusCode).not.toEqual(404)
      })
    
  })

  ReactDOM.unmountComponentAtNode(div)
})