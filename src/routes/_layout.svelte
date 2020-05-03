<script>
  import Nav from "../common/navigation/Nav/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    position: relative;
    max-width: calc(100vw - 4em);
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>
