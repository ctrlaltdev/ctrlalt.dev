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
    <h2 class="Card__Title Card__HeaderItem">{title}</h2>
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
  .Card {
    position: relative;
    padding: 2rem;
    padding-bottom: 16rem;
    background-color: var(--color-card-background);
    backdrop-filter: blur(0.8rem);
    -webkit-backdrop-filter: blur(0.8rem);
  }

  .Card__Header {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;

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
    flex: 0 0 auto;
    font-size: 4vi;
    border-bottom: 1px solid var(--color-foreground);
    border-right: 1px solid var(--color-foreground);
  }

  .Card__Company {
    flex: 1 0 100%;
    font-size: 4vi;
    border-left: 1px solid var(--color-foreground);
  }

  .Card__Type {
    flex: 0 0 auto;
    width: 100%;
    font-size: 3vi;
    border-top: 1px solid var(--color-foreground);
    border-bottom: 1px solid var(--color-foreground);
    text-align: center;
  }

  .Card__Location {
    flex: 0 0 100%;
    font-size: 3vi;
    border-left: 1px solid var(--color-foreground);
    text-align: left;
  }

  .Card__Date {
    flex: 0 0 auto;
    font-size: 3vi;
    border-top: 1px solid var(--color-foreground);
    border-right: 1px solid var(--color-foreground);
  }

  .Card__Content {
    font-size: 2rem;
    line-height: 1.4;
  }

  .Card__Content ul {
    padding: 0 0 0 2rem;
  }
  .Card__Content li {
    margin: 1rem 0;
  }

  @media (orientation: landscape) {
    .Card {
      max-width: calc(50% - 1rem);
    }

    .Card__Title {
      flex: 0 1 auto;
      font-size: 3rem;
      border: 1px solid transparent;
      border-bottom: 1px solid var(--color-foreground);
      border-right: 1px solid var(--color-foreground);
    }

    .Card__Company {
      flex: 0 1 auto;
      font-size: 3rem;
      border: 1px solid transparent;
    }

    .Card__Type {
      flex: 1 1 auto;
      font-size: 2.4rem;
      border: 1px solid transparent;
      border-bottom: 1px solid var(--color-foreground);
    }

    .Card__Location {
      flex: 1 1 auto;
      font-size: 2.4rem;
      border: 1px solid transparent;
      border-right: 1px solid var(--color-foreground);
      text-align: right;
    }

    .Card__Date {
      flex: 1 1 auto;
      font-size: 2.4rem;
      border: 1px solid transparent;
    }
  }
</style>
