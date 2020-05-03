<script>
  import Logo from "../Logo/Logo.svelte";
  export let href;
</script>

<style>
  a {
    display: inline-flex;
  }
</style>

<a {href}>
  <Logo />
</a>
