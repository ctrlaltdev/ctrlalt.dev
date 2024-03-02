<script lang="ts">
  import { onMount } from 'svelte'

  import { getAngle } from '$lib/geometry'

  let w = 0
  let h = 0

  let stableHeight = 0

  let shadowStyle = ''

  let TextElement: HTMLDivElement
  let pos: DOMRect
  const pointer = { x: 0, y: 0 }
  const box = { x: 0, y: 0 }
  const direction = { x: 0, y: 0 }
  let angle = 0

  $: if (h > 0 && stableHeight === 0) {
    stableHeight = h
  }
  
  const renderShadows = () => {
    pos = TextElement.getBoundingClientRect()
    box.x = (pos.right - pos.left) / 2 + pos.left
    box.y = (pos.bottom - pos.top) / 2 + pos.top
    
    direction.x = pointer.x - box.x
    direction.y = -(pointer.y - box.y)

    angle = getAngle(direction.x, direction.y)

    const shadows = []
    shadows[0] = `var(--shadow-highlight) ${-Math.cos(angle) / 4}rem ${Math.sin(angle) / 4}rem 0rem`
    shadows[1] = `var(--shadow-dark) ${Math.cos(angle) / 4}rem ${-Math.sin(angle) / 4}rem 0rem`
    shadows[2] = `var(--shadow-dark) ${Math.cos(angle) / 3}rem ${-Math.sin(angle) / 3}rem 0.2rem`
    shadowStyle = `text-shadow: ${shadows.join(', ')}`
  }

  const mouseMove = (e: MouseEvent) => {
    pointer.x = e.clientX
    pointer.y = e.clientY
    renderShadows()
  }

  const touchMove = (e: TouchEvent) => {
    const { touches, changedTouches } = e
    const touch = touches[0] ?? changedTouches[0]
    pointer.x = touch.pageX
    pointer.y = touch.pageY
    renderShadows()
  }

  onMount(() => {
    renderShadows()
  })
</script>

<svelte:window bind:innerWidth={w} bind:innerHeight={h} on:mousemove={mouseMove} on:touchmove={touchMove} />
<div class="ShadowText" bind:this={TextElement}>
  <slot shadowStyle={shadowStyle} />
</div>

<style>
  :root {
    --shadow-highlight: #666;
    --shadow-dark: #fff;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --shadow-highlight: #000;
      --shadow-dark: #666;
    }
  }

  .ShadowText :global(h1),
  .ShadowText :global(h2),
  .ShadowText :global(h3),
  .ShadowText :global(h4),
  .ShadowText :global(h5),
  .ShadowText :global(h6),
  .ShadowText :global(p) {
    font-weight: 900;
    font-size: 8vw;
    color: var(--color-background);
    text-shadow: var(--shadow-highlight) -0.1rem -0.1rem 0, var(--shadow-dark) 0.1rem 0.1rem 0, var(--shadow-dark) 0.2rem 0.2rem 0.2rem;
  }

  @media (orientation: portrait) {
    .ShadowText :global(h1),
    .ShadowText :global(h2),
    .ShadowText :global(h3),
    .ShadowText :global(h4),
    .ShadowText :global(h5),
    .ShadowText :global(h6),
    .ShadowText :global(p) {
      font-size: 6vh;
    }
  }
</style>
