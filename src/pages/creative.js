import React, { useState, useEffect } from 'react'
import PageLayout from '../layouts/Page/'
import { Codepen, Codepens } from '../components/Codepen/'

import codepenData from '../../public/codepen.json'

import './creative.sass'

export default function Home() {
  const [codepen, setCodepen] = useState({ pens: [] })

  useEffect(() => {
    setCodepen({ ...codepenData, pens: codepenData.pens.sort(() => 0.5 - Math.random()) })
  }, [])

  return (
  <PageLayout>
    <div className='creative'>
      <section className='creative__title'>
        <h1 className='creative__void'>Creative</h1>
      </section>
      <section className='creative__pens'>
        <header>
          { codepen.pens.length && <Codepen featured user={codepen.user} id={codepen.pens[0]} /> }
        </header>
        <Codepens user={codepen.user} pens={codepen.pens.slice(1)} />
      </section>
    </div>
  </PageLayout>
  )
}
  