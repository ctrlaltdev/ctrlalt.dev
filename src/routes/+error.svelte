<script lang="ts">
	import { page } from '$app/state'
	
	let pageState = $state(page)
</script>

<section class="Error">
  <h1 class="Error__Title">{pageState.status}</h1>
</section>

<style>
  .Error {
    height: 80vh;
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