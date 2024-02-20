import type { EntryGenerator, PageLoad } from './$types'
import { error } from '@sveltejs/kit'
import { projects, type Project } from '$lib/projects.js'

import { marked } from 'marked'

async function getGitHubReadme (fetch: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>, repo: string): Promise<string> {
  let res = await fetch(`https://raw.githubusercontent.com/${repo}/main/README.md`).then(async r => await r.text())

  if (res === '404: Not Found') {
    res = await fetch(`https://raw.githubusercontent.com/${repo}/master/README.md`).then(async r => await r.text())
  }

  return res
}

export const load: PageLoad = async ({ fetch, params }): Promise<Project> => {
  const project = projects.find((project) => project.id === params.project)

  // eslint-disable-next-line @typescript-eslint/no-throw-literal
  if (project === undefined) throw error(404)

  const content = await getGitHubReadme(fetch, project.github)
  project.content = await marked(content)

  return project
}

export const entries: EntryGenerator = () => {
  return projects.map((project) => ({ project: project.id }))
}
