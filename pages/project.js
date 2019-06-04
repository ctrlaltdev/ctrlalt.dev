import { withRouter } from 'next/router'
import Main from '../layouts/Main'

import Project from '../components/ProjectPage'

const project = props => (
  <Main title={props.router.query.id}>
    <Project />
  </Main>
)

export default withRouter(project)
