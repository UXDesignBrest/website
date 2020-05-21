<script>
  import { fade, fly } from "svelte/transition";
  import { onMount } from "svelte";

  let visible = false;

  onMount(async () => {
    visible = true;
  });
</script>

<style>
  .logo-animated {
    font-size: 2.5rem;
    text-decoration: none;
    margin: 0 1em;
  }

  @media (max-width: 1100px) {
    .logo-animated {
      font-size: 1.5rem;
      margin: 0 0.25rem;
    }
  }
</style>

{#if visible}
  <a
    class="logo-animated {$$props.class}"
    href="/"
    aria-label="Logo UX Design Brest">
    {#each 'UX' as a, i}
      <span transition:fly={{ delay: 100 + i * 20, duration: 800 }}>{a}</span>
    {/each}
    {#each 'Design' as b, i}
      <span transition:fly={{ delay: 200 + i * 20, duration: 800 }}>{b}</span>
    {/each}
    {#each 'Brest' as c, i}
      <span transition:fly={{ delay: 300 + i * 20, duration: 800 }}>{c}</span>
    {/each}
  </a>
{/if}
