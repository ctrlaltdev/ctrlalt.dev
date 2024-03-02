<script lang="ts">
  import ShadowText from '$components/ShadowText.svelte'
</script>

<section class="Error">
  <ShadowText let:shadowStyle>
    <h1 class="Error__Title" style={shadowStyle}>404</h1>
  </ShadowText>
</section>

<style>
  .Error {
    height: 75vh;
    position: relative;
  }

  .Error__Title {
    text-align: center;
    line-height: 75vh;
    letter-spacing: 1rem;
    font-family: var(--font-title);
  }

  .Error .Error__Title {
    font-size: 20vh;
  }
</style>