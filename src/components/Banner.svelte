<script lang="ts">
  import { colorScale } from "$lib/colorScale.js"

  interface DotParams {
    size: number
    x: number
    y: number
    color: string
  }

  let w = 600
  let h = 0

  let stableHeight = 0

  $: if (h > 0 && stableHeight === 0) {
    stableHeight = h
  }
  
  let dots: DotParams[] = []

  function addDot(w: number, h: number) {
    let size: number = Math.round(Math.random() * 20 + 5)
    let x: number = Math.round(Math.random() * Math.floor(w))
    let y: number = Math.round(Math.random() * Math.floor(Math.min(Math.round(h / 2), 300)))
    let color: string = colorScale(Math.round(Math.random() * 100))

    dots = [...dots, { size, x, y, color }]
  }

  let i: number = 50
  let init: number

  function generateDots (w: number, h: number) {
    if (i > 0){      
      addDot(w, h)
      i--
    }
  }

  generateDots(w, stableHeight)

  $: {
    dots = []
    i = 50
    init = setInterval(() => generateDots(w, stableHeight), 20)
  }

  $: if (i <= 0) {
    clearInterval(init)
	}
</script>

<svelte:window bind:innerWidth={w} bind:innerHeight={h} />
<svg>
  { #each dots as { size, x, y, color } }
    <ellipse cx={x} cy={y} rx={size} ry={size} fill={color} />
  { /each }
</svg>

<style>
  svg {
    width: 100%;
    min-height: 300px;
    height: 50vh;

    backdrop-filter: blur(1rem);
    -webkit-backdrop-filter: blur(1rem);
  }
</style>
