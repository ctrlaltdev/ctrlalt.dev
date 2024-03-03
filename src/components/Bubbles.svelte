<script lang="ts">
  import { colorScale } from "$lib/colorScale.js"

  interface DotParams {
    size: number
    x: number
    y: number
    color: string
  }

  let w = 0
  let h = 0

  let stableHeight = 0

  const maxDots: number = 50
  let i: number = maxDots
  let init: NodeJS.Timeout
  
  let dots: DotParams[] = []

  const randGraphFunc = (x: number) => {
    const rand = Math.round(Math.random() * 1)
    switch (rand) {
      case 0:
        return Math.sin(x)
      case 1:
        return Math.cos(x)
      default:
        return x
    }
  }

  const addDot = (w: number, h: number, i: number) => {
    let size: number = Math.round(Math.random() * 20 + 5)
    let x: number = Math.round(Math.random() * w)
    let y: number = randGraphFunc(x * (Math.PI / 2) / w) * h
    let color: string = colorScale(Math.round(Math.random() * 100))

    dots = [...dots, { size, x, y, color }]
  }

  const generateDots = (w: number, h: number) => {
    if (i > 0){      
      addDot(w, h, i)
      i--
    }
  }

  generateDots(w, stableHeight)

  $: {
    dots = []
    i = 50
    init = setInterval(() => generateDots(w, stableHeight), 20)
  }

  $: if (h > 0 && stableHeight === 0) {
    stableHeight = h
  }

  $: if (i <= 0) {
    clearInterval(init)
	}
</script>

<svelte:window bind:innerWidth={w} bind:innerHeight={h} />
<svg class="Bubbles">
  { #each dots as { size, x, y, color } }
    <ellipse cx={x} cy={y} rx={size} ry={size} fill={color} class="Bubbles__Bubble" />
  { /each }
</svg>

<style>
  .Bubbles {
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

  .Bubbles__Bubble {
    mix-blend-mode: multiply;
  }

  @media (prefers-color-scheme: dark) {
    .Bubbles__Bubble {
      mix-blend-mode: screen;
    }
  }
</style>
