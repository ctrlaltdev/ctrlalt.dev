<script lang="ts">
  let w = 0
  let h = 0

  let stableHeight = 0

  $: if (h > 0 && stableHeight === 0) {
    stableHeight = h
  }

  interface RectInput {
    x: string
    y: string
    width: string
    height: string
    transform: string
    stroke: string
  }

  let rects: RectInput[] = []

  function genRects (w: number, h: number): void {
    rects = []

    for (const c of ['Cyan', 'Magenta', 'Yellow']) {
      const x = Math.floor(Math.random() * (w / 2))
      const y = Math.floor(Math.random() * (h / 2))
      const rw = Math.floor(Math.random() * (w * 0.2) + w)
      const rh = Math.floor(Math.random() * (h * 0.2) + h)
      const a = Math.floor(Math.random() * 180) - 90

      rects = [...rects, { x: x.toString(), y: y.toString(), width: rw.toString(), height: rh.toString(), transform: `rotate(${a}, ${rw / 2 - x}, ${rh / 2 - x})`, stroke: c }]
    }
  }

  $: genRects(w, stableHeight)
</script>

<svelte:window bind:innerWidth={w} bind:innerHeight={h} />
<svg class="Tridimension">
  {#each rects as { x, y, width, height, transform, stroke }}
    <rect class="Tridimension__Dimension" x={x} y={y} width={width} height={height} transform={transform} stroke={stroke} />
  {/each}
</svg>

<style>
  .Tridimension {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    z-index: -200;
    opacity: 0.3;
  }

  .Tridimension__Dimension {
    fill: transparent;
    stroke-width: 0.5rem;
    width: 100vh;
    height: 100vh;
    mix-blend-mode: multiply;
  }

  @media (prefers-color-scheme: dark) {
    .Tridimension__Dimension {
      mix-blend-mode: screen;
    }
  }
</style>
