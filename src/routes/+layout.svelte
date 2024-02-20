<script>
  import '$lib/style/reset.css'
  import '$lib/style/global.css'

  import Tridimension from '$components/Tridimension.svelte'
  import Logo from '$components/Logo.svelte'
</script>

<div class="Page">
  <Tridimension />
  <header>
    <Logo />
  </header>

  <slot />

  <footer>
    <nav class="Socials">
      <ul class="Socials__List">
        <li class="Socials__Item">
          <a class="Socials__Link" href="https://github.com/ctrlaltdev" target="_blank" rel="noopener noreferrer"><img src="/img/github.svg" alt="GitHub"></a>
        </li>
        <li class="Socials__Item">
          <a class="Socials__Link" href="https://linkedin.com/in/yorickdemichelis" target="_blank" rel="noopener noreferrer"><img src="/img/linkedin.svg" alt="LinkedIn"></a>
        </li>
      </ul>
    </nav>
  </footer>
</div>

<style>
  .Page {
    padding: 20px;
  }

  .Socials__List {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 3rem;
    justify-content: center;
  }

  .Socials__Item {
    flex: 0 0 auto;
    margin: 0 3rem;
  }

  .Socials__Link {
    display: block;
    color: var(--color-foreground);
    background-color: transparent;
    text-decoration: none;
    padding: 1rem;
    font-size: 2rem;
  }

  .Socials__Link img {
    height: 6rem;
    width: auto;
  }
</style>
