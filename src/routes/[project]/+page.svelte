<script lang="ts">
  import type { Project } from '$lib/projects.js'

  import '$lib/style/hack.css'
  import '$lib/style/markdown.css'

  export let data: Project
</script>

<svelte:head>
  <title>{ data.name } - CTRL ALT DEV</title>
</svelte:head>

<section>
  <p class="Title">{data.name}</p>

  <article class="Project">
    {@html data.content}
  </article>
</section>

<style>
  .Title {
    font-family: var(--font-title);
    font-size: 3rem;
    font-weight: 500;
    letter-spacing: 1rem;
    font-variant: small-caps;
  }

  .Project {
    font-size: 2rem;
    max-width: 800px;
  }
</style>
