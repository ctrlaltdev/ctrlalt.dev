<div class="Logo">
  <p class="Logo__Layer Logo__Layer--cyan"><span>CTRL ALT DEV</span></p>
  <p class="Logo__Layer Logo__Layer--magenta" aria-hidden><span>CTRL ALT DEV</span></p>
  <p class="Logo__Layer Logo__Layer--yellow" aria-hidden><span>CTRL ALT DEV</span></p>
</div>

<style>
  .Logo {
    position: relative;
    width: 100%;
    height: 4rem;
    font-family: var(--font-title);
    font-weight: 700;
    font-size: 3rem;
    line-height: 4rem;
  }

  .Logo__Layer {
    position: absolute;
    top: 0;
    right: 0;
    mix-blend-mode: multiply;
  }

  @media (prefers-color-scheme: dark) {
    .Logo__Layer {
      mix-blend-mode: screen;
    }
  }

  .Logo__Layer--cyan {
    color: cyan;
  }
  .Logo__Layer--cyan span {
    position: relative;
    top: 0;
    left: -1px;
  }

  .Logo__Layer--magenta {
    color: magenta;
  }
  .Logo__Layer--magenta span {
    position: relative;
    top: 0;
    left: 1px;
  }

  .Logo__Layer--yellow {
    color: yellow;
  }
  .Logo__Layer--yellow span {
    position: relative;
    top: 2px;
    left: 0;
  }
</style>
