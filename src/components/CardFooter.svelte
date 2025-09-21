<script lang="ts">
  export let tech: string[] = [];
</script>

<footer class="Card__Footer">
  <ul class="Tech">
    {#each tech as item}
      <li class="Tech__Item">{item}</li>
    {/each}
  </ul>
</footer>

<style>
  .Card__Footer {
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    left: 8rem;
    font-size: 1rem;
  }

  .Tech {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    list-style: none;
    padding: 0;
    margin: 2rem 0 0 0;
    justify-content: flex-end;
  }

  .Tech__Item {
    border-bottom: 1px solid var(--color-foreground);
    padding: 0.5rem 0rem;
    text-transform: uppercase;
  }
</style>
