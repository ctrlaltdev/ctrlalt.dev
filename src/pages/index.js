import React from 'react'
import PageLayout from '../layouts/Page/'

import ProjectsList from '../components/ProjectsList/'

import './index.sass'

export default function Home() {
  return (
  <PageLayout>
    <div className='home'>
      <div className='home__void'>Yorick Demichelis</div>
      <ProjectsList />
    </div>
  </PageLayout>
  )
}
