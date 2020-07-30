<script>
  export let segment;
</script>

<style>
  nav {
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
    nav {
      z-index: 1;
      display: block !important;
      position: fixed;
      bottom: 0;
      left: 0;
      height: auto;
      width: calc(100vw - 0.5rem);
      padding: 0.5rem 0.25rem;
      background: white;
      box-shadow: 0 -0.4rem 0.9rem 0.2rem rgba(0, 0, 0, 0.5);
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      line-height: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    nav ul li {
      font-size: 0.825rem;
    }
  }
</style>

<nav>
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
</nav>
