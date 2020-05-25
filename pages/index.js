import React from 'react'
import { withRouter } from 'next/router'
import Main from '../layouts/Main'

import About from '../components/About'
import Projects from '../components/Projects'

const index = () => (
  <Main title='Yorick Demichelis'>
    <About />
    <Projects />
  </Main>
)

export default withRouter(index)
