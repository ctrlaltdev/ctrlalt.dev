interface ProjectLink {
  href: string
  text: string
}

export interface Project {
  id: string
  name: string
  github: string
  content?: string
  keywords?: string[]
  links?: ProjectLink[]
}

export const projects: Project[] = [
  {
    id: 'gry',
    name: 'Go Redir Yourself',
    keywords: ['go'],
    github: 'ctrlaltdev/GRY'
  },
  {
    id: 'assemble',
    name: 'Assemble',
    keywords: ['ts'],
    github: '01011111/assemble',
    links: [
      {
        href: 'https://github.com/marketplace/actions/team-assemble',
        text: 'action'
      }
    ]
  },
  {
    id: 'imgen',
    name: 'imgen',
    keywords: ['go'],
    github: 'ctrlaltdev/imgen'
  },
  {
    id: 'srv42',
    name: 'srv42',
    keywords: ['go'],
    github: 'ctrlaltdev/srv42'
  },
  {
    id: 'DIYDDNS',
    name: 'DIY Dynamic DNS',
    keywords: ['sh', 'go'],
    github: 'ctrlaltdev/DIYDDNS'
  },
  {
    id: 'LMGTFY',
    name: 'Let Me Google That For You Queries',
    keywords: ['py', 'sh'],
    github: 'ctrlaltdev/LMGTFY-queries'
  },
  {
    id: 'IAA',
    name: 'Illegal Auth Attempts',
    keywords: ['sh'],
    github: 'ctrlaltdev/illegal-auth-attempts'
  },
  {
    id: 'PBFS',
    name: 'Pastebin File System',
    keywords: ['sh'],
    github: 'ctrlaltdev/pbfs'
  },
  {
    id: 'RTLO',
    name: 'RTL Override Attack POC',
    keywords: ['py'],
    github: 'ctrlaltdev/RTLO-attack'
  }
]
