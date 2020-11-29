import React, { useRef } from 'react'
import useDimensions from 'react-cool-dimensions'
import { ResizeObserver } from '@juggle/resize-observer'
import './svg.sass'

const randColor = () => {
  const colors = ['Turquoise', 'Aquamarine', 'SteelBlue', 'MidnightBlue', 'Chartreuse', 'SpringGreen', 'ForestGreen', 'OliveDrab', 'Gold', 'Khaki', 'Coral', 'OrangeRed 	', 'DarkOrange', 'IndianRed', 'Salmon', 'FireBrick', 'Crimson', 'MediumVioletRed', 'HotPink', 'DeepPink', 'Orchid', 'Purple', 'RebeccaPurple', 'Indigo']
  return colors[Math.floor(Math.random() * colors.length)]
}

const Rect = ({ x, y, w, h, angle, color = randColor(), stroke = 'Black' }) => (
  <rect
    x={ x.toString() }
    y={ y.toString() }
    width={ w.toString() }
    height={ h.toString() }
    transform={ `rotate(${angle}, ${ w / 2 - x }, ${ h / 2 - x })` }
    fill={ color }
    stroke={ stroke }
    />
)

const GenRects = ({ id, n, w, h }) => {
  const rectangles = []
  for (let i = 0; i < n; i++) {
    rectangles.push(<Rect
        key={ `rect-${id}-${i}` }
        x={ Math.floor(Math.random() * (w / 2)) }
        y={ Math.floor(Math.random() * (h / 2)) }
        w={ Math.floor(Math.random() * (w * 0.2) + w) }
        h={ Math.floor(Math.random() * (h * 0.2) + h) }
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

const GenSVG = ({ id }) => {
  const ref = useRef()

  const { width, height } = useDimensions({
    ref,
    polyfill: ResizeObserver
  })

  const n = Math.floor(Math.random() * 7 + 2)
  
  return (
    <figure className='svgure' ref={ ref }>
      <svg className='svg'>
        <GenRects 
          id={ id }
          n={ n }
          w={ width }
          h={ height }
          />
      </svg>
    </figure>
  )
}

export default GenSVG
