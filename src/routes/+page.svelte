<script lang="ts">
  import { projects } from '$lib/projects'

</script>

<svelte:head>
  <title>CTRL ALT DEV - Yorick Demichelis</title>
</svelte:head>

<main class="Home">
  <section>
    <header class="About__Header">
      <h1 class="About__Title">Yorick Demichelis</h1>
    </header>
    <article class="About__Content">
      <p>I am a seasoned Tech Lead based in Los Angeles, California. With a strong background in both infrastructure and software architecture, I currently serve as a key asset at Tech Holding. My expertise lies in spearheading global teams to design, build, and deploy scalable and resilient services that have a high impact.</p>

      <p>Throughout my career, I have had the privilege to work with industry leaders such as Warner Bros, Walmart, and Westfield. My passion for technological innovation is matched only by my commitment to operational excellence. I thrive in fast-paced environments, where my skills are put to the test every day.</p>

      <p>I excel at devising solutions that are both cutting-edge and reliable. Always eager for the next challenge, I look forward to connecting with like-minded professionals.</p>
    </article>
  </section>

  <section class="Project">
    <h2 class="Project__Title">Projects</h2>
    <nav>
      <ul class="Project__List">
        { #each projects as project }
          <li class="Project__Item">
            <a href={`/${project.id}/`} class="Project__Link" title={project.name}>
              <div class="Project__Border Project__Border--cyan" />
              <div class="Project__Border Project__Border--magenta" />
              <div class="Project__Border Project__Border--yellow" />
              <span>{project.id}</span>
            </a>
          </li>
        { /each }
      </ul>
    </nav>
  </section>
</main>

<style>
  .About__Header {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    height: 75vh;
  }

  .About__Title {
    font-size: 6rem;
    font-weight: 500;
    letter-spacing: 1rem;
  }

  .About__Content {
    font-size: 2rem;
    line-height: 1.4;
    max-width: 800px;
    min-height: 75vh;
    margin: 0 0 0 auto;
  }

  .About__Content p {
    padding: 2rem;
    margin: 2rem auto;

    backdrop-filter: blur(1rem);
    -webkit-backdrop-filter: blur(1rem);
  }


  .Project {
    min-height: 75vh;
  }

  .Project__Title {
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  .Project__List {
    list-style: none;
    padding: 0;
    display: flex;
    flex-flow: row wrap;
  }

  .Project__Item {
    position: relative;
    padding: 2rem;
    margin: 2rem;

    backdrop-filter: blur(1rem);
    -webkit-backdrop-filter: blur(1rem);
  }

  .Project__Link {
    font-size: 2rem;
    text-decoration: none;
    color: unset;
    text-transform: uppercase;
  }

  .Project__Border {
    position: absolute;
    transition: top 0.2s ease-in-out, right 0.2s ease-in-out, bottom 0.2s ease-in-out, left 0.2s ease-in-out;
    
    border: 2px solid transparent;
    mix-blend-mode: multiply;
  }

  @media (prefers-color-scheme: dark) {
    .Project__Border {
      mix-blend-mode: screen;
    }
  }

  .Project__Border--cyan {
    top: -0.5rem;
    right: 0.5rem;
    bottom: 0.5rem;
    left: -0.5rem;
    border-color: Cyan;
  }

  .Project__Border--magenta {
    top: -0;
    right: -0.5rem;
    bottom: 0;
    left: 0.5rem;
    border-color: Magenta;
  }

  .Project__Border--yellow {
    top: 0.5rem;
    right: 0px;
    bottom: -0.5rem;
    left: 0px;
    border-color: Yellow;
  }

  .Project__Item:hover .Project__Border {
    transition: top 0.2s ease-in-out, right 0.2s ease-in-out, bottom 0.2s ease-in-out, left 0.2s ease-in-out;
    top: 0rem;
    right: 0rem;
    bottom: 0rem;
    left: 0rem;
  }
</style>
