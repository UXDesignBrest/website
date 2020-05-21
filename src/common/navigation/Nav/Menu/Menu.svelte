<script>
  import SocialLinks from "../../../social/SocialLinks/SocialLinks.svelte";

  export let segment;
  export let open = false;
</script>

<style>
  .menu {
    display: flex;
    align-items: center;
  }
  ul {
    margin: 0 4em 0 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
    margin: 0 1em;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
    font-weight: bold;
    position: relative;
    display: inline-block;
  }

  a::before {
    position: absolute;
    z-index: -1;
    opacity: 0;
    content: "";
    left: 0;
    right: 100%;
    transition: all 0.275s;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  a:hover::before,
  [aria-current]::before {
    opacity: 1;
    left: 0%;
    right: 0%;
    top: 55%;
    bottom: 20%;
    background: var(--secondary-color);
    transform: skew(-20deg) scale(1) rotate(1deg);
  }

  @media (max-width: 1100px) {
    ul {
      margin: 0 1em 0 0;
    }
  }

  @media (max-width: 840px) {
    .menu {
      padding: 0 3rem 0 0;
      position: fixed;
      top: 0;
      height: 0;
      width: 100%;
      transition: all 0.2s;
    }

    .menu.open {
      list-style: none;
      padding: 0 0 1em 0;
      background: rgba(255, 255, 255, 0.95);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 1;
      height: 100%;
    }

    ul {
      list-style: none;
      margin: 0;
      line-height: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    li {
      display: none;
    }

    .menu.open ul li {
      font-size: 1.1rem;
      display: block;
    }

    .menu .social-links {
      display: none;
    }

    .menu.open .social-links {
      display: block;
      margin: 2em 0;
    }
  }
</style>

<div class="menu" class:open>
  <ul>
    <li>
      <a aria-current={segment === undefined ? 'page' : undefined} href=".">
        Accueil
      </a>
    </li>
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'events' ? 'page' : undefined}
        href="events">
        Evénements
      </a>
    </li>
    <li>
      <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
        À propos
      </a>
    </li>
  </ul>
  <div class="social-links">
    <SocialLinks />
  </div>
</div>
