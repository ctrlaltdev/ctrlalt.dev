<div class="Logo">
  <a href="/">
    <p class="Logo__Layer Logo__Layer--cyan"><span>CTRL ALT DEV</span></p>
    <p class="Logo__Layer Logo__Layer--magenta" aria-hidden="true"><span>CTRL ALT DEV</span></p>
    <p class="Logo__Layer Logo__Layer--yellow" aria-hidden="true"><span>CTRL ALT DEV</span></p>
  </a>
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
    left: 0;
    text-align: center;
    mix-blend-mode: multiply;
  }

  @media (orientation: landscape) {
    .Logo__Layer {
      top: 0;
      right: 0;
      text-align: right;
      left: unset;
    }
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
