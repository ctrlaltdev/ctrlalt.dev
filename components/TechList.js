const list = [
  {n: 'Node', c: '#83CD29'},
  {n: 'JavaScript', c: '#F0DB4F'},
  {n: 'GraphQL', c: '#E535AB'},
  {n: 'Python', c: '#4B8BBE'},
  {n: 'PHP', c: '#8892BE'},
  {n: 'React', c: '#61DBFB'},
  {n: 'SH', c: '#4EAA25'},
  {n: 'Docker', c: '#0DB7ED'},
  {n: 'AWS', c: '#FF9900'}
]

const TechList = list.map(tech => (
  <li key={tech.n}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <title>{tech.n}</title>
      <polygon fill={tech.c} points="0,0 512,0 512,512 0,512"/>
      <text x="480" y="480">{tech.n}</text>
    </svg>
  </li>
))

export default TechList
