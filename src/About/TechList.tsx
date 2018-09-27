import * as React from 'react'

const list = [
  {n: 'HTML5', c: '#E44D26'},
  {n: 'Pug', c: '#A86454'},
  {n: 'CSS3', c: '#2965F1'},
  {n: 'Sass', c: '#C69'},
  {n: 'JavaScript', c: '#F0DB4F'},
  {n: 'TypeScript', c: '#007ACC'},
  {n: 'PHP', c: '#8892BE'},
  {n: 'Python', c: '#4B8BBE'},
  {n: 'Ruby', c: '#B02B2C'},
  {n: 'Bash', c: '#4EAA25'}
]

const TechList: JSX.Element[] = []

for (const tech of list) {
  TechList.push(
  <li key={tech.n}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <title>{tech.n}</title>
      <polygon fill={tech.c} points="0,0 512,0 512,512 0,512"/>
      <text x="480" y="480">{tech.n}</text>
    </svg>
  </li>)
}

export default TechList