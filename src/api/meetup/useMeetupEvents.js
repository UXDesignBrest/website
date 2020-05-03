const baseUrl = "https://api.meetup.com/UX-Design-Brest/events";

const params = [
  "sign=true",
  "photo-host=public",
  "fields=featured_photo,event_hosts",
];

const sanitizeEventsDescription = (events) =>
  events.map((e) => ({
    ...e,
    description: e.description.replace(/<\/?[^>]+(>|$)/g, ""),
  }));

const stringifyParams = (params) => params.join("&");

/**
 * Allow to retrieve Meetup events (past & incoming).
 * @param {Object} context Context.
 */
const useMeetupEvents = (context) => {
  const fetchEvents = (url) =>
    context
      .fetch(url)
      .then((r) => r.json())
      .then((events) => sanitizeEventsDescription(events));

  const getNextEvent = () =>
    fetchEvents(
      `${baseUrl}?${stringifyParams([
        ...params,
        "desc=true",
        "has_ended=false",
        "page=3",
      ])}`
    );

  const getPastEvents = () =>
    fetchEvents(
      `${baseUrl}?${stringifyParams([
        ...params,
        "desc=true",
        "scroll=recent_past",
        "page=10",
      ])}`
    );

  return { getNextEvent, getPastEvents };
};

export default useMeetupEvents;
