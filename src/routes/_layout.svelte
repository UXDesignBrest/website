<script>
  import { Header } from "../common";

  export let segment;
</script>

<style>
  main {
    position: relative;
    max-width: calc(100vw - 4em);
    padding: var(--nav-height) 0;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Header {segment} />

<main>
  <slot />
</main>
