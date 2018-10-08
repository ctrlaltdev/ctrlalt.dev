import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Projects from './Projects'
import ProjectItem from './ProjectItem'

it('Projects renders without crashing', () => {
  const div = document.createElement('div')
  const testProjects = [
    {
      content: [
        "This is a test"
      ],
      id: "test1",
      img: "https://placekitten.com/1920/1080",
      links: [
        {
          name: "Test link",
          target: "https://localhost:3000"
        }
      ],
      name: "Test 1"
    },
    {
      content: [
        "This is another test",
        "This is again another test"
      ],
      id: "test2",
      img: "https://placekitten.com/1920/1080",
      links: [
        {
          name: "Test link 2",
          target: "https://localhost"
        },
        {
          name: "Website",
          target: "https://ctrlaltdev.xyz/"
        }
      ],
      name: "Test 2"
    }
  ]
  ReactDOM.render(<Projects list={testProjects} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('ProjectItem renders without crashing', () => {
  const div = document.createElement('div')
  const testProject = {
    id: "test2",
    name: "Test 2",
    img: "https://placekitten.com/1920/1080",
    content: [
      "This is another test",
      "This is again another test"
    ],
    links: [
      {
        target: "https://localhost",
        name: "Test link 2"
      },
      {
        target: "https://ctrlaltdev.xyz/",
        name: "Website"
      }
    ]
  }
  ReactDOM.render(<ProjectItem project={testProject} />, div)
  ReactDOM.unmountComponentAtNode(div)
})