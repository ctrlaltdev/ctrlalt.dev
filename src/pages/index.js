import React, { useState } from 'react'
import PageLayout from '../layouts/Page/'

import TechList from '../components/TechList/'
import ProjectsList from '../components/ProjectsList/'

import './index.sass'

export default function Home() {
  const disabled = false

  const [selectedTechs, updateSelectedTechs] = useState([])

  const selectTech = (tech) => {
    const techIndex = selectedTechs.indexOf(tech)
    if (techIndex > -1) {
      const newSelectedTechs = [...selectedTechs]
      newSelectedTechs.splice(techIndex, 1)
      updateSelectedTechs(newSelectedTechs)
    } else {
      updateSelectedTechs([...selectedTechs, tech])
    }
  }

  return (
  <PageLayout>
    <div className='home'>
      <section className='home__title'>
        <h1 className='home__void'>Yorick Demichelis</h1>
      </section>
      <section className='home__tech'>
        <TechList select={ selectTech } selected={ selectedTechs } />
      </section>
      { !disabled && 
        <section className='home__projects'>
          <ProjectsList techs={ selectedTechs } />
        </section>
      }
    </div>
  </PageLayout>
  )
}
  