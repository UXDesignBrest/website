<script>
  import { Nav } from "../common";

  export let segment;
</script>

<style>
  main {
    position: relative;
    max-width: calc(100vw - 4em);
    padding: var(--nav-height) 0 0 0;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>
