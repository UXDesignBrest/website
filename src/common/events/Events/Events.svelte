<script>
  import Event from "./Event";

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

  @media only screen and (max-width: 840px) {
    ul {
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }
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
