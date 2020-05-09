<script>
  import Nav from "./Nav.svelte";
  import { stores } from "@sapper/app";
  import { writable } from "svelte/store";

  export let segment;

  const { page } = stores();
  let displayShadow = false;
  let open = false;
  let visible = true;
  let hashChanged = false;
  let lastScroll = 0;

  // Hide nav when we navigate.
  page.subscribe(() => {
    open = false;
  });

  function intercept_touchstart(event) {
    if (!open) {
      event.preventDefault();
      event.stopPropagation();
      open = true;
    }
  }

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
<Nav {displayShadow} {open} {segment} {visible} />
