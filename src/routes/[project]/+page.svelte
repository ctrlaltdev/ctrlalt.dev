<script lang="ts">
  import type { Project } from '$lib/projects.js'

  import '$lib/style/hack.css'

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
  }

  .Project :global(pre) {
    padding: 20px;
    color: var(--color-code-foreground);
    background-color: var(--color-code-background);
  }

  .Project :global(code) {
    font-family: var(--font-code);
  }

  .Project :global(h1) {
    font-family: var(--font-title);
    font-size: 3rem;
    font-weight: 600;
    letter-spacing: 1rem;
    font-variant: small-caps;
  }

  .Project :global(h2), .Project :global(h3), .Project :global(h4), .Project :global(h5), .Project :global(h6) {
    margin-top: 2rem;
  }
</style>
