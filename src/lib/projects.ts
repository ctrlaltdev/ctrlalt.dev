interface ProjectLink {
  href: string
  text: string
}

export interface Project {
  id: string
  name: string
  github: string
  content: string
  keywords?: string[]
  links?: ProjectLink[]
}

export const projects: Project[] = [
  {
    id: 'GRY',
    name: 'Go Redir Yourself',
    keywords: ['go'],
    github: 'ctrlaltdev/GRY',
    content: ''
  },
  {
    id: 'ASSEMBLE',
    name: 'Assemble',
    keywords: ['ts'],
    github: '01011111/assemble',
    content: '',
    links: [
      {
        href: 'https://github.com/marketplace/actions/team-assemble',
        text: 'action'
      }
    ]
  },
  {
    id: 'IMGEN',
    name: 'imgen',
    keywords: ['go'],
    github: 'ctrlaltdev/imgen',
    content: ''
  },
  {
    id: 'SRV42',
    name: 'srv42',
    keywords: ['go'],
    github: 'ctrlaltdev/srv42',
    content: ''
  },
  {
    id: 'DIYDDNS',
    name: 'DIY Dynamic DNS',
    keywords: ['sh', 'go'],
    github: 'ctrlaltdev/DIYDDNS',
    content: ''
  },
  {
    id: 'LMGTFY',
    name: 'Let Me Google That For You Queries',
    keywords: ['py', 'sh'],
    github: 'ctrlaltdev/LMGTFY-queries',
    content: ''
  },
  {
    id: 'IAA',
    name: 'Illegal Auth Attempts',
    keywords: ['sh'],
    github: 'ctrlaltdev/illegal-auth-attempts',
    content: ''
  },
  {
    id: 'PBFS',
    name: 'Pastebin File System',
    keywords: ['sh'],
    github: 'ctrlaltdev/pbfs',
    content: ''
  },
  {
    id: 'RTLO',
    name: 'RTL Override Attack POC',
    keywords: ['py'],
    github: 'ctrlaltdev/RTLO-attack',
    content: ''
  }
]
