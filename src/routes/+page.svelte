<script lang="ts">
  import { randomizedPalette, getPaletteColor, getRandomPaletteColor } from '$lib/colors';
  import Tridimension from '$components/Tridimension.svelte'
  import Card from '$components/Card.svelte'

  const palette = randomizedPalette();

  import { experiences } from '$lib/experiences';
</script>

<svelte:head>
  <title>CTRL ALT DEV - Yorick Demichelis</title>
  <meta name="theme-color" content={getRandomPaletteColor()} />
</svelte:head>

<Tridimension />
<main class="Home">
  <section class="Hero">
    <article class="HeroCard">
      <header>
        <h1 class="HeroCard__Title">Yorick Demichelis</h1>
      </header>
      <div class="HeroCard__Content">
        <p>Security leader and solutions architect bridging the gap between enterprise security and engineering excellence. With over 15 years of experience across cloud platforms and software engineering, I now focus on building robust security programs and architecting secure solutions at scale.</p>

        <p>At Tech Holding, I lead our security engineering initiatives and oversee our external security offerings while continuing to provide architectural guidance for complex client solutions. My approach combines deep technical expertise with practical business outcomes, whether implementing Zero Trust architectures, achieving compliance objectives, or designing secure multi-tenant systems.</p>

        <p>I actively contribute to our client's success through secure, scalable solutions. Always interested in connecting with fellow security practitioners and engineering leaders to share insights and experiences.</p>
      </div>
    </article>
  </section>

  <section class="Experiences">
    {#each experiences as experience, index}
      <Card 
        color={getPaletteColor(palette, index)}
        title={experience.title}
        company={experience.company}
        type={experience.type}
        location={experience.location}
        date={experience.date}
        details={experience.details}
        tech={experience.technologies}
      />
    {/each}
  </section>  
</main>

<style>
  .HeroCard {
    margin: 2rem;
    padding: 2rem;
    background-color: var(--color-card-background);
    backdrop-filter: blur(0.5rem);
    -webkit-backdrop-filter: blur(0.5rem);
  }

  .HeroCard__Title {
    display: inline-block;
    padding-bottom: 1rem;
    margin-bottom: 4rem;
    border-bottom: 1px solid var(--color-foreground);
    font-size: 4rem;
  }

  .HeroCard__Content {
    font-size: 2rem;
    font-weight: 300;
    line-height: 1.4;
  }

  .Experiences {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
    gap: 2rem;
    padding: 2rem;
  }

  @media (min-width: 600px) {
    .Experiences {
      padding: 2rem;
    }
  }

  @media (min-width: 900px) {
    .Experiences {
      padding: 2rem 0rem 2rem 2rem;
    }
  }

  @media (min-width: 1200px) {
    .Experiences {
      padding: 2rem 0rem 2rem 2rem;
    }
  }

  @media (min-width: 1536px) {
    .Experiences {
      padding: 2rem 0rem 2rem 2rem;
    }
  }
</style>
