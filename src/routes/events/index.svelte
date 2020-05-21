<script context="module">
  import { useMeetupEvents } from "../../api";
  export function preload({ params, query }) {
    const { getNextEvent, getPastEvents } = useMeetupEvents(this);
    return Promise.all([getNextEvent(), getPastEvents()]).then(values => ({
      events: [...values[0], ...values[1]]
    }));
  }
</script>

<script>
  import { Events } from "../../common";
  export let events;
</script>

<svelte:head>
  <title>Evénements • UX Design Brest</title>
</svelte:head>

<Events {events} />
