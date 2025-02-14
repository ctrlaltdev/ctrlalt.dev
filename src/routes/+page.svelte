<script lang="ts">
  import { projects } from '$lib/projects'
  import Tridimension from '$components/Tridimension.svelte'
  import ColorShadowText from '$components/ColorShadowText.svelte'
</script>

<svelte:head>
  <title>CTRL ALT DEV - Yorick Demichelis</title>
</svelte:head>

<Tridimension />
<main class="Home">
  <section class="About">
    <header class="About__Header">
      <ColorShadowText let:colorShadowStyle>
        <h1 class="About__Title" style={colorShadowStyle}>Yorick Demichelis</h1>
      </ColorShadowText>
    </header>

    <aside class="About__Illus">
      <picture>
        <source srcset="/img/yorick_demichelis.avif" type="image/avif" />
        <source srcset="/img/yorick_demichelis.webp" type="image/webp" />
        <img src="img/yorick_demichelis.png" alt="Yorick Demichelis" class="About__Me" />
      </picture>
    </aside>

    <article class="About__Content">
      <p>I'm a security architect and engineering leader focused on building robust security programs and scalable system architectures. With over 15 years of experience across cloud platforms and software engineering, I've learned that the best security solutions are the ones that enhance rather than hinder development.</p>

      <p>At Tech Holding, I lead security engineering initiatives while providing architectural guidance for complex client solutions. My work spans from implementing Zero Trust architectures to designing secure multi-tenant systems, always with a focus on practical, maintainable solutions.</p>
        
      <p>I'm passionate about:</p>
      <ul>
        <li>Building security programs that align with modern engineering practices</li>
        <li>Automating cloud security controls and compliance monitoring</li>
        <li>Developing tools that make security more accessible to engineering teams</li>
        <li>Architecting secure, scalable systems that solve real business challenges</li>
      </ul>
        
      <p>My approach combines technical depth with practical implementation, whether I'm helping teams achieve compliance objectives, reviewing system architectures, or developing security automation tools. I believe in sharing knowledge and experience, regularly contributing through technical consulting and speaking engagements.</p>
        
      <p>I'm always interested in connecting with others in the field to discuss cloud security, architecture patterns, or how to better integrate security into the development lifecycle.</p>
    </article>
  </section>

  <section class="Project">
    <h2 class="Project__Title">Projects</h2>
    <nav>
      <ul class="Project__List">
        {#each projects as project}
          <li class="Project__Item">
            <a href={`/${project.id}/`} class="Project__Link" title={project.name}>
              <div class="Project__Border Project__Border--cyan"></div>
              <div class="Project__Border Project__Border--magenta"></div>
              <div class="Project__Border Project__Border--yellow"></div>
              <span>{project.id}</span>
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </section>
</main>

<style>
  .About {
    display: flex;
    flex-flow: row wrap;
  }

  .About__Header {
    flex: 1 0 auto;
    width: 100%;
    height: 30vh;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    margin: 10vh auto 10vh auto;
  }

  .About__Title {
    letter-spacing: 1rem;
  }

  .About__Illus {
    flex: 1 1 auto;
    width: 50%;
    text-align: left;
  }

  .About__Me {
    display: inline-block;
    max-height: 50vh;
    width: auto;
    box-shadow: 0 1rem 0 0 rgba(105, 177, 237, 0.6);
  }

  .About__Content {
    flex: 1 1 auto;
    width: 50%;
    font-size: 2rem;
    line-height: 1.4;
    max-width: 800px;
    padding: 2rem;
    margin: 2vh 0 2vh auto;
  }

  .About__Content p {
    margin: 2rem auto;
  }

  @media (orientation: portrait) {
    .About {
      flex-flow: column nowrap;
    }

    .About__Header {
      height: 30vh;
    }

    .About__Illus {
      width: 100%;
      height: 50vh;
      text-align: right;
    }

    .About__Content {
      width: 100%;
    }
  }

  .Project {
    margin: 10vh auto;
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
