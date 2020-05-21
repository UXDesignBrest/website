<script>
  import Menu from "./Menu.svelte";
  import { menuStore } from "../../../../stores";
  import { stores } from "@sapper/app";

  export let segment;

  const { closeMenu, menuIsOpen } = menuStore;
  const { page } = stores();

  // Close the menu when the page changes.
  page.subscribe(() => closeMenu());
</script>

<Menu {segment} open={$menuIsOpen} />
