<script>
  import { menuStore } from "../../../../stores";
  import IconButton from "../../../../cdk/icons/IconButton/IconButton.svelte";

  const { menuIsOpen, toggleMenu } = menuStore;
</script>

<style>
  :global(.hide-if-desktop) {
    display: none !important;
  }

  @media only screen and (max-width: 840px) {
    :global(.hide-if-desktop) {
      display: block !important;
    }
  }
</style>

<IconButton
  class="hide-if-desktop {$$props.class}"
  name={$menuIsOpen ? 'close' : 'menu'}
  on:click={() => toggleMenu()} />
