<script>
  export let image, name;
</script>

<style>
  img {
    width: 35vw;
    margin: 0.5em;
    border: 2px solid var(--primary-color);
  }

  @media only screen and (max-width: 840px) {
    img {
      width: 100%;
      margin: 0.25em 0;
    }
  }
</style>

<img src={image} alt={name} />
