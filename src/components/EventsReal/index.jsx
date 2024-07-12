import { useEffect, useState } from 'react';
import EventReal from './EventReal';

const EventsReal = () => {
  const [events, setEvents] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setIsPending(true);
    fetch('/data/events.json')
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => setError(error))
      .finally(() => setIsPending(false));
  }, []);
  const showEvents = (event) => <EventReal key={event.id} eventReal={event} />;
  if (isPending) {
    return <h3>Loading...</h3>;
  }
  if (error) {
    return <h3>{error.toString()}</h3>;
  }
  if (events.length === 0) {
    return <h3>events not found</h3>;
  }
  return <section>{events.map(showEvents)}</section>;
};

export default EventsReal;

