<script lang="ts">
  import type { Project } from '$lib/projects.js'

  import Banner from '$components/Banner.svelte'

  import '$lib/style/hack.css'
  import '$lib/style/markdown.css'

  export let data: Project
  let width: number = 800
  let height: number = 600

  let imgHeight: number = Math.min(Math.round(height / 2), 400)
</script>

<svelte:head>
  <title>{ data.name } - CTRL ALT DEV</title>
</svelte:head>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

<main>
  <p class="Title">{data.name}</p>

  <Banner />

  <section class="ProjectPage">
    {@html data.content}
  </section>
</main>

<style>
  .Title {
    font-family: var(--font-title);
    font-size: 3rem;
    font-weight: 500;
    letter-spacing: 1rem;
    font-variant: small-caps;
  }

  .ProjectPage {
    font-size: 2rem;
    max-width: 800px;
  }

  .ProjectPage__Banner img {
    width: 100%;
    height: 250px;
    margin: 2rem 0;
  }
</style>
