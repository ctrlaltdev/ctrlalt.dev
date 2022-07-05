import React from 'react'
import PageLayout from '../layouts/Page/'
import { Codepen, Codepens } from '../components/Codepen/'

import codepenData from '../../static/codepen.json'

import './creative.sass'

export default function Home() {
  const pens = codepenData.pens.sort(() => 0.5 - Math.random())
  const featured = pens[0]

  return (
  <PageLayout>
    <div className='creative'>
      <section className='creative__title'>
        <h1 className='creative__void'>Creative</h1>
      </section>
      <section className='creative__pens'>
        <header>
          <Codepen featured user={codepenData.user} id={featured} />
        </header>
        <Codepens user={codepenData.user} pens={pens.slice(1)} />
      </section>
    </div>
  </PageLayout>
  )
}
  