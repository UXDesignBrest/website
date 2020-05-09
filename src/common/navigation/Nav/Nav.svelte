<script>
  import IconLink from "../../../cdk/icons/IconLink/IconLink.svelte";
  import LogoAnimated from "../../../cdk/logos/LogoAnimated/LogoAnimated.svelte";
  import SocialLinks from "../../social/SocialLinks/SocialLinks.svelte";
  import Menu from "./Menu/Menu.svelte";

  export let displayShadow = false;
  export let open = false;
  export let segment;
  export let visible = true;
</script>

<style>
  header {
    position: fixed;
    width: 100vw;
    height: var(--nav-height);
    padding: 0;
    margin: 0;
    background-color: white;
    z-index: 100;
    user-select: none;
    transform: translate(0, calc(-100% - 1rem));
    transition: transform 0.2s, box-shadow 0.5s;
  }
  header.visible {
    transform: none;
  }

  header.withShadow {
    box-shadow: 0 -0.4rem 0.9rem 0.2rem rgba(0, 0, 0, 0.5);
  }
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: calc(100% - 2em);
    transform: none;
    transition: none;
    box-shadow: none;

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

<header class:visible={visible || open} class:withShadow={displayShadow}>
  <nav>
    <LogoAnimated />
    <div class="nav-links">
      <Menu {segment} />
      <SocialLinks />
    </div>
  </nav>
</header>
