import React, { useRef, useState, useEffect } from 'react'
import './gensvg.sass'

const Rect = ({ x, y, w, h, angle, c }) => (
  <rect
    x={ x.toString() }
    y={ y.toString() }
    width={ w.toString() }
    height={ h.toString() }
    transform={ `rotate(${angle}, ${w}, ${h})` }
    stroke={ c }
    />
)

const GenRects = ({ w, h }) => {
  const rectangles = []
  for (const c of ['Cyan', 'Magenta', 'Yellow']) {
    const rw = Math.floor(Math.random() * (w / 2 - (w / 6)) + (w / 6))
    const rh = Math.floor(Math.random() * (h / 2 - (h / 6)) + (h / 6))
    rectangles.push(<Rect
        key={ `rect-${c}` }
        x={ w / 2 - rw / 2 }
        y={ h / 2 - rh / 2 }
        w={ rw }
        h={ rh }
        c={ c }
        angle={ Math.floor(Math.random() * 90) - 45 }
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
