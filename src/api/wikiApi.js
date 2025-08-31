export async function fetchEvents(month, day) {
  const res = await fetch(
    `https://en.wikipedia.org/api/rest_v1/feed/onthisday/events/${month}/${day}`
  );
  if (!res.ok) throw new Error("Failed to fetch events");
  return await res.json();
}
