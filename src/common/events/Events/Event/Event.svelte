<script>
  export let image, name;
</script>

<style>
  img {
    width: 35vw;
    margin: 0.5em;
    border: 2px solid var(--primary-color);
  }
</style>

<img src={image} alt={name} />
