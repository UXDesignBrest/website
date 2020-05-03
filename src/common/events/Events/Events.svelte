<script>
  import Event from "./Event/EventContainer.svelte";

  export let events;
</script>

<style>
  ul {
    margin: 1em auto;
    padding: 0;
    max-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: baseline;
    flex-wrap: wrap;
  }

  ul > * + * {
    margin-top: 2rem;
  }

  li {
    list-style: none;
  }

  @media only screen and (max-width: 768px) {
  }
</style>

<ul>
  {#each events as event, idx (event.id)}
    <li>
      <Event {event} />
    </li>
  {:else}
    <p>Aucun évènement trouvé.</p>
  {/each}
</ul>
