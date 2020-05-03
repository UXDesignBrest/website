<script>
  import IconLink from "../../../cdk/icons/IconLink/IconLink.svelte";
  import LogoAnimated from "../../../cdk/logos/LogoAnimated/LogoAnimated.svelte";
  import SocialLinks from "../../social/SocialLinks/SocialLinks.svelte";
  import Menu from "./Menu/Menu.svelte";
  export let segment;
</script>

<style>
  nav {
    display: flex;
    align-items: center;
    font-weight: 300;
    padding: 2em 1em;
    color: black;
  }

  .nav-links {
    margin-left: auto;
    display: flex;
    align-items: center;
  }
</style>

<nav>
  <LogoAnimated />
  <div class="nav-links">
    <Menu {segment} />
    <SocialLinks />
  </div>
</nav>
