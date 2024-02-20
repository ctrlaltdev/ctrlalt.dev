<script lang="ts">
	import { page } from '$app/stores'
</script>

<section class="Error">
  <h1 class="Error__Title Layer Layer--cyan"><span>{$page.status}</span></h1>
  <p class="Error__Title Layer Layer--magenta" aria-hidden><span>{$page.status}</span></p>
  <p class="Error__Title Layer Layer--yellow" aria-hidden><span>{$page.status}</span></p>
</section>

<style>
  .Error {
    height: 75vh;
    position: relative;
  }

  .Layer {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    mix-blend-mode: multiply;
  }

  @media (prefers-color-scheme: dark) {
    .Layer {
      mix-blend-mode: screen;
    }
  }

  .Layer--cyan {
    color: cyan;
  }
  .Layer--cyan span {
    position: relative;
    top: 0;
    left: -1px;
  }

  .Layer--magenta {
    color: magenta;
  }
  .Layer--magenta span {
    position: relative;
    top: 0;
    left: 1px;
  }

  .Layer--yellow {
    color: yellow;
  }
  .Layer--yellow span {
    position: relative;
    top: 2px;
    left: 0;
  }

  .Error__Title {
    font-size: 20vw;
    font-weight: 500;
    text-align: center;
    line-height: 75vh;
    letter-spacing: 1rem;
    font-family: var(--font-title);
  }
</style>