import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import './404.sass'

export default function Home() {
  const looking = (i = -1) => {
    const datawrap = document.querySelector('span.looking')
    datawrap.removeChild(datawrap.querySelector('span'))
    const datatext = ['⌬', 'Ҩ', 'ǿ', 'ȣ', 'ȡ', 'Φ', 'θ', 'ϼ', 'Ю', '℧', '⏣', '⊡']
    const dataslide = document.createElement('span')
    const index = (i + 1) % datatext.length
    const dataslideTxt = document.createTextNode(datatext[index])
    dataslide.appendChild(dataslideTxt)
    datawrap.appendChild(dataslide)
    dataslide.classList.add('slideup')
    
    const loop = setTimeout(() => { looking(index) }, 2000)
    
    return () => clearTimeout(loop)
  }

  useEffect(looking, [])

  return (
  <>
    <Helmet title='404 - Not Found' />
    <Link to='/'>
      <div className='error404'>
        <div className='inner404'>
          <h1>
            <span>4</span>
            <span className='looking'><span>_</span></span>
            <span>4</span>
          </h1>
          <p className='subtitle'>Not Found</p>
        </div>
      </div>
    </Link>
  </>
  )
}
