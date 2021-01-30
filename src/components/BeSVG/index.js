import React from 'react'
import './besvg.sass'

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
        x={ Math.floor(Math.random() * (w / 2)) }
        y={ Math.floor(Math.random() * (h / 2)) }
        w={ Math.floor(Math.random() * (w * 0.2) + w) }
        h={ Math.floor(Math.random() * (h * 0.2) + h) }
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

const BeSVG = () => {
  const width = parseInt(window.innerWidth)
  const height = parseInt(window.innerHeight)

  return (
    <svg id='besvg'>
      <GenRects
        w={ width }
        h={ height }
        />
    </svg>
  )
}

export default BeSVG
