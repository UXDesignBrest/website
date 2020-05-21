<script>
  import Nav from "./Nav.svelte";
  import { writable } from "svelte/store";

  export let segment;

  let displayShadow = false;
  let visible = true;
  let hashChanged = false;
  let lastScroll = 0;

  function handleHashchange() {
    hashChanged = true;
  }

  function handleScroll() {
    const scroll = window.pageYOffset;
    if (!hashChanged) {
      visible = scroll < 50 || scroll < lastScroll;
    }
    lastScroll = scroll;
    hashChanged = false;
    displayShadow = scroll !== 0;
  }
</script>

<svelte:window on:hashchange={handleHashchange} on:scroll={handleScroll} />
<Nav {displayShadow} {segment} {visible} />
