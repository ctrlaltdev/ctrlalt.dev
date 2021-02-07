import React, { useRef, useState, useEffect } from 'react'
import './gensvg.sass'

const Rect = ({ x, y, w, h, angle, c }) => (
  <rect
    x={ x.toString() }
    y={ y.toString() }
    width={ w.toString() }
    height={ h.toString() }
    transform={ `rotate(${angle}, ${ w / 2 - x }, ${ h / 2 - x })` }
    stroke={ c }
    />
)

const GenRects = ({ w, h }) => {
  const rectangles = []
  for (const c of ['Cyan', 'Magenta', 'Yellow']) {
    rectangles.push(<Rect
        key={ `rect-${c}` }
        x={ w / 4 }
        y={ h / 4 }
        w={ w / 2 }
        h={ h / 2 }
        c={ c }
        angle={ Math.floor(Math.random() * 180) - 90 }
        />
    )
  }
  return (
    <>
      { rectangles }
    </>
  )
}

const GenSVG = () => {
  const figure = useRef()

  const [dimensions, setDimensions] = useState({ w: 0, h: 0, loaded: false })

  useEffect(() => {
    const w = parseInt(figure.current.offsetWidth)
    const h = parseInt(figure.current.offsetHeight)
    setDimensions({ w, h, loaded: true })
  }, [])

  return (
    <figure ref={figure} className='gensvgure'>
      <svg className='gensvg'>
        { dimensions.loaded && 
          <GenRects
            w={ dimensions.w }
            h={ dimensions.h }
            />
        }
      </svg>
    </figure>
  )
}

export default GenSVG
