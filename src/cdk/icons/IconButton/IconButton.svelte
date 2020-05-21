<script>
  import Icon from "../Icon";

  export let name;
  export let size = 20;
</script>

<style>
  .icon-button {
    border: none;
    background: transparent;
  }
</style>

<button class="icon-button {$$props.class}" on:click>
  <Icon {name} {size} />
</button>
