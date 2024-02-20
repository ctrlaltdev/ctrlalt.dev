<script lang="ts">
  import type { Project } from '$lib/projects.js'

  import Banner from '$components/Banner.svelte'

  import '$lib/style/hack.css'
  import '$lib/style/markdown.css'

  export let data: Project
</script>

<svelte:head>
  <title>{ data.name } - CTRL ALT DEV</title>
</svelte:head>

<main>
  <p class="Title">{data.name}</p>

  <Banner />

  <section class="ProjectPage">
    <aside class="ProjectPage__Links">
      <ul class="ProjectPage__LinkList">
        <li class="ProjectPage__LinkItem"><a href={`https://github.com/${data.github}`} target="_blank" rel="noopener noreferrer">GitHub</a></li>
        { #each data.links || [] as link }
          <li class="ProjectPage__LinkItem"><a href={link.href} target="_blank" rel="noopener noreferrer">{link.text}</a></li>
        {/each}
      </ul>
    </aside>
    <article class="ProjectPage__Content">
      {@html data.content}
    </article>
  </section>
</main>

<style>
  .Title {
    font-family: var(--font-title);
    font-size: 3rem;
    font-weight: 500;
    letter-spacing: 1rem;
    font-variant: small-caps;
    margin: 4rem 0 2rem 0;
  }

  .ProjectPage {
    display: flex;
    flex-flow: column nowrap;
  }

  @media (orientation: landscape) {
    .ProjectPage {
      flex-flow: row-reverse nowrap;
    }
  }

  .ProjectPage__Content {
    flex: 1 1 auto;
    font-size: 2rem;
    max-width: 800px;
  }

  .ProjectPage__Links {
    flex: 1 1 auto;
    margin-bottom: 2rem;
    font-size: 2rem;
    font-family: var(--font-title);
    font-weight: 600;
    letter-spacing: 0.5rem;
  }

  .ProjectPage__LinkList {
    list-style: none;
    padding: 0;
    display: flex;
    flex-flow: row wrap;
    gap: 2rem;
    justify-content: flex-end;
  }

  .ProjectPage__LinkItem {
    font-variant: small-caps;
  }  
</style>
