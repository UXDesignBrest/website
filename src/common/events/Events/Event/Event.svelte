<script>
  export let image, name, url;
</script>

<style>
  img {
    width: 35vw;
    margin: 0.5em;
    box-shadow: 0 -0.2rem 0.9rem 0.1rem rgba(0, 0, 0, 0.3);
  }

  @media only screen and (max-width: 840px) {
    img {
      width: 100%;
      margin: 0.25em 0;
    }
  }
</style>

<a href={url} target="_blank">
  <img src={image} alt={name} />
</a>
