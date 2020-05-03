<script>
  import Event from "./Event.svelte";
  export let event;

  const eventInput = {
    image: event.featured_photo.photo_link,
    name: event.name
  };
</script>

<Event {...eventInput} />
