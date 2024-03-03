import { error } from '@sveltejs/kit'
import { marked } from 'marked'

import { projects, type Project } from '$lib/projects.js'
import type { EntryGenerator, PageLoad } from './$types'

const getContent = async (fetch: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>, id: string): Promise<string> => {
  try {
    return await fetch(`/content/${id}.md`).then(async r => await r.text())
  } catch (err) {
    console.error(err)
    return ''
  }
}

export const load: PageLoad = async ({ fetch, params }): Promise<Project> => {
  const project = projects.find((project) => project.id === params.project)

  // eslint-disable-next-line @typescript-eslint/no-throw-literal
  if (project === undefined) throw error(404)

  const content = await getContent(fetch, project.id)

  project.content = await marked(content)

  return project
}

export const entries: EntryGenerator = () => {
  return projects.map((project) => ({ project: project.id }))
}
