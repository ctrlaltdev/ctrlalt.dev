<script lang="ts">
  import CardFooter from '$components/CardFooter.svelte'
  import { getRandomPaletteColor } from '$lib/colors';

  export let color: string = getRandomPaletteColor();
  export let title: string = '';
  export let company: string = '';
  export let type: string = '';
  export let location: string = '';
  export let date: string = '';
  export let details: string[] = [];
  export let tech: string[] = [];
</script>

<article class="Card">
  <header class="Card__Header">
    <figure class="Card__Hero" style="background-color: {color};"></figure>
    <h2 class="Card__Title Card__HeaderItem" style="border-bottom: 1px solid {color};">{title}</h2>
    <p class="Card__Company Card__HeaderItem">{company}</p>
    <p class="Card__Type Card__HeaderItem">{type}</p>
    <p class="Card__Location Card__HeaderItem">{location}</p>
    <p class="Card__Date Card__HeaderItem">{date}</p>
  </header>

  <div class="Card__Content">
    <ul>
      {#each details as item}
        <li>{item}</li>
      {/each}
    </ul>
  </div>

  <CardFooter tech={tech} />
</article>

<style>
  :root {
    --title-size: 3rem;
    --subtitle-size: 2rem;
    --body-size: 2rem;
  }

  .Card {
    position: relative;
    padding: 2rem;
    padding-bottom: 16rem;
    background-color: var(--color-card-background);
    backdrop-filter: blur(0.8rem);
    -webkit-backdrop-filter: blur(0.8rem);

    flex: 0 0 auto;
    max-width: calc(100% / 1);
  }

  @media (min-width: 600px) {
    .Card {
      max-width: calc(100% / 1);
    }
  }

  @media (min-width: 900px) {
    .Card {
      max-width: calc(100% / 2 - 2rem);
    }
  }

  @media (min-width: 1200px) {
    .Card {
      max-width: calc(100% / 2 - 2rem);
    }
  }

  @media (min-width: 1536px) {
    .Card {
      max-width: calc(100% / 3 - 2rem);
    }
  }

  .Card__Header {
    display: flex;
    flex-flow: column;
    flex-wrap: nowrap;

    margin-bottom: 4rem;
  }

  .Card__Hero {
    width: 100%;
    height: 20rem;
    margin-bottom: 4rem;
  }

  .Card__HeaderItem {
    font-family: var(--font-title);
    text-transform: uppercase;
    font-weight: 300;
    margin: 0;
    padding: 1rem;
    border: 1px solid transparent;
  }

  .Card__Title {
    font-size: var(--title-size);
    flex: 1 1 auto;
    border: 1px solid transparent;
    padding-bottom: 0;
    border-bottom: 1px solid var(--color-foreground);
  }

  .Card__Company {
    font-size: var(--title-size);
    flex: 1 1 auto;
    border: 1px solid transparent;
    padding-top: 0;
  }

  .Card__Type {
    font-size: var(--subtitle-size);
    flex: 1 1 auto;
    border: 1px solid transparent;
  }

  .Card__Location {
    font-size: var(--subtitle-size);
    flex: 1 1 auto;
    border: 1px solid transparent;
    padding-bottom: 0;
  }

  .Card__Date {
    font-size: var(--subtitle-size);
    flex: 1 1 auto;
    border: 1px solid transparent;
    padding-top: 0;
  }

  .Card__Content {
    font-size: var(--body-size);
    font-weight: 300;
    line-height: 1.4;
  }

  .Card__Content ul {
    padding: 0 0 0 4rem;
    list-style: circle;
  }
  .Card__Content li {
    margin: 1rem 0;
  }

  @media (min-width: 600px) {
    .Card__Title {
      font-size: var(--title-size);
    }

    .Card__Company {
      font-size: var(--title-size);
    }

    .Card__Type {
      font-size: var(--subtitle-size);
    }

    .Card__Location {
      font-size: var(--subtitle-size);
    }

    .Card__Date {
      font-size: var(--subtitle-size);
    }

    .Card__Content {
      font-size: var(--body-size);
    }
  }

  @media (min-width: 900px) {
    .Card__Title {
      font-size: var(--title-size);
    }

    .Card__Company {
      font-size: var(--title-size);
    }

    .Card__Type {
      font-size: var(--subtitle-size);
    }

    .Card__Location {
      font-size: var(--subtitle-size);
    }

    .Card__Date {
      font-size: var(--subtitle-size);
    }

    .Card__Content {
      font-size: var(--body-size);
    }
  }

  @media (min-width: 1200px) {
    .Card__Title {
      font-size: var(--title-size);
    }

    .Card__Company {
      font-size: var(--title-size);
    }

    .Card__Type {
      font-size: var(--subtitle-size);
    }

    .Card__Location {
      font-size: var(--subtitle-size);
    }

    .Card__Date {
      font-size: var(--subtitle-size);
    }

    .Card__Content {
      font-size: var(--body-size);
    }
  }

  @media (min-width: 1536px) {
    .Card__Title {
      font-size: var(--title-size);
    }

    .Card__Company {
      font-size: var(--title-size);
    }

    .Card__Type {
      font-size: var(--subtitle-size);
    }

    .Card__Location {
      font-size: var(--subtitle-size);
    }

    .Card__Date {
      font-size: var(--subtitle-size);
    }

    .Card__Content {
      font-size: var(--body-size);
    }
  }
</style>
