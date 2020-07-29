<script>
  import Event from "./Event.svelte";
  export let event;

  const eventInput = {
    image: event.featured_photo.photo_link,
    name: event.name,
    url: event.link
  };
</script>

<Event {...eventInput} />
