<script>
  import IconLink from "../../../cdk/icons/IconLink/IconLink.svelte";
  import SocialLinks from "../../social/SocialLinks/SocialLinks.svelte";
  import Menu from "./Menu/Menu.svelte";
  export let segment;
</script>

<style>
  nav {
    display: flex;
    align-items: center;
    font-weight: 300;
    padding: 1em;
    color: var(--primary-color);
  }

  .logo {
    max-height: 4em;
    max-width: 15em;
  }

  .nav-links {
    margin-left: auto;
    display: flex;
    align-items: center;
  }
</style>

<nav>
  <a href="/">
    <img
      class="logo"
      alt="Logo UX Design Brest"
      src="uxdesignbrest/logo-purple.png" />
  </a>
  <div class="nav-links">
    <Menu {segment} />
    <SocialLinks />
  </div>
</nav>
