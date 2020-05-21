<script>
  import Icon from "../Icon";

  export let href;
  export let name;
  export let size = 20;
  export let target = "_blank";
</script>

<style>
  a {
    margin: 0 0.5em;
  }
</style>

<a {href} {target}>
  <Icon {name} {size} />
</a>
