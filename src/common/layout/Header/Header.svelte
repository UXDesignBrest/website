<script>
  import { IconLink, LogoAnimated } from "../../../cdk";
  import SocialLinks from "../../social/SocialLinks/SocialLinks.svelte";
  import Nav from "./Nav";

  export let displayShadow = false;
  export let segment;
  export let visible = true;

  let innerWidth;
  const mobileWidth = 840;
</script>

<style>
  header {
    position: fixed;
    top: 0;
    width: calc(100vw - 2em);
    height: var(--nav-height);
    margin: 0;
    padding: 0 1em;
    display: flex;
    align-items: center;
    font-weight: 300;
    color: black;
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

  header :global(.logo-animated) {
    margin-right: auto;
  }

  @media (max-width: 840px) {
    header :global(.menu) {
      transition: none;
      transform: translateY(calc(100vh + 1rem)) !important;
    }

    header.visible :global(.menu) {
      transform: none !important;
    }
  }
</style>

<svelte:window bind:innerWidth />

<header class:visible class:with-shadow={displayShadow}>
  <LogoAnimated class="logo-animated" />
  {#if innerWidth > mobileWidth}
    <Nav {segment} />
  {/if}
  <SocialLinks />
</header>

{#if innerWidth <= mobileWidth}
  <Nav {segment} />
{/if}
