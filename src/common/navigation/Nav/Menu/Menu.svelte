<script>
  export let segment;
</script>

<style>
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
</style>

<ul>
  <li>
    <a aria-current={segment === undefined ? 'page' : undefined} href=".">
      Accueil
    </a>
  </li>
  <li>
    <a
      rel="prefetch"
      aria-current={segment === 'blog' ? 'page' : undefined}
      href="blog">
      Evènements
    </a>
  </li>
  <li>
    <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
      À propos
    </a>
  </li>
</ul>
