import EventReal from './EventReal';
import { getEvents } from '../../api';
import useDataLoad from '../../hooks/useDataLoad';

const EventsReal = () => {
  const { data: events, isPending, error } = useDataLoad(getEvents);
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
