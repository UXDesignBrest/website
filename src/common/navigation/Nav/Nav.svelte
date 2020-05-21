<script>
  import { IconLink, LogoAnimated } from "../../../cdk";
  import MenuButton from "./MenuButton";
  import Menu from "./Menu";

  export let displayShadow = false;
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

  header.with-shadow {
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

  header nav :global(.logo-animated) {
    margin-right: auto;
  }

  header nav :global(.menu-button) {
    z-index: 2;
  }
</style>

<header class:visible class:with-shadow={displayShadow}>
  <nav>
    <LogoAnimated class="logo-animated" />
    <Menu {segment} />
    <MenuButton class="menu-button" />
  </nav>
</header>
