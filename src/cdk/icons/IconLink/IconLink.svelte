<script>
  export let href;
  export let name;
  export let size = 20;
  export let target = "_blank";
  import Icon from "../Icon/Icon.svelte";
</script>

<style>
  a {
    margin: 0 0.5em;
  }
</style>

<a {href} {target}>
  <Icon {name} {size} />
</a>
