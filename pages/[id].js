import Main from '../layouts/Main'
import { E404 } from '../components/Errors'

import Project from '../components/ProjectPage'
import jsonProjects from '../components/Projects.json'

const project = props => {
  const projectExists = jsonProjects.filter(proj => (proj.id === props.id)).length === 1

  if (!projectExists) {
    return (
      <Main title={`404 ¯\\_(ツ)_/¯`}>
        <E404 />
      </Main>
    )
  }

  return (
    <Main title={props.id}>
      <Project project={ jsonProjects.filter(proj => (proj.id === props.id))[0] } {...props} />
    </Main>
  )
}

project.getInitialProps = async ({ query }) => {
  return { id: query.id }
}

export default project
