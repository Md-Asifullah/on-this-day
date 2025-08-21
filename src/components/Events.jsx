import EventCard from "./EventCard";

export default function Events({ events }) {
  return (
    <>
      {events.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </>
  );
}
