<script lang="ts">
  import { onMount } from 'svelte'
  import { getAngle } from '$lib/geometry.js'

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
  const step = (2 * Math.PI) / 3
  const colors = {
    c: { x: 0, y: 0, angle: 0 },
    m: { x: 0, y: 0, angle: 0 },
    y: { x: 0, y: 0, angle: 0 }
  }

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
    
    colors.c.angle = step * 0 + angle
    colors.c.x = Math.cos(colors.c.angle)
    colors.c.y = -Math.sin(colors.c.angle)

    colors.m.angle = step * 1 + angle
    colors.m.x = Math.cos(colors.m.angle)
    colors.m.y = -Math.sin(colors.m.angle)
    
    colors.y.angle = step * 2 + angle
    colors.y.x = Math.cos(colors.y.angle)
    colors.y.y = -Math.sin(colors.y.angle)

    const shadows = []
    shadows[0] = `rgba(0, 255, 255, 0.8) ${colors.c.x / 4}rem ${colors.c.y / 4}rem 0.1rem`
    shadows[1] = `rgba(255, 0, 255, 0.8) ${colors.m.x / 4}rem ${colors.m.y / 4}rem 0.1rem`
    shadows[2] = `rgba(255, 255, 0, 0.8) ${colors.y.x / 4}rem ${colors.y.y / 4}rem 0.1rem`
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
<div class="ColorShadowText" bind:this={TextElement}>
  <slot colorShadowStyle={shadowStyle} />
</div>

<style>
  .ColorShadowText :global(h1),
  .ColorShadowText :global(h2),
  .ColorShadowText :global(h3),
  .ColorShadowText :global(h4),
  .ColorShadowText :global(h5),
  .ColorShadowText :global(h6),
  .ColorShadowText :global(p) {
    font-weight: 900;
    font-size: 8vw;
    color: var(--color-background);
    text-shadow: rgba(0, 255, 255, 0.8) 0rem -0.1rem 0.1rem, rgba(255, 0, 255, 0.8) 0.1rem 0.1rem 0.1rem, rgba(255, 255, 0, 0.8) -0.1rem 0.1rem 0.1rem;
  }

  @media (orientation: portrait) {
    .ColorShadowText :global(h1),
    .ColorShadowText :global(h2),
    .ColorShadowText :global(h3),
    .ColorShadowText :global(h4),
    .ColorShadowText :global(h5),
    .ColorShadowText :global(h6),
    .ColorShadowText :global(p) {
      font-size: 6vh;
    }
  }
</style>
