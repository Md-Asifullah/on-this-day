import { useState, useEffect } from "react";
import { fetchEvents } from "./api/wikiApi";
import "./App.css";
import Header from "./components/Header";
import DateToday from "./components/DateToday";
import DateFilter from "./components/DateFilter";
import EventsHeader from "./components/EventsHeader";
import Events from "./components/Events";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";

function App() {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const [events, setEvents] = useState([]);
  const [carouselEvents, setCarouselEvents] = useState([]);
  const [date, setDate] = useState({ month: month, day: day });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchEvents(date.month, date.day)
      .then((data) => {
        const events = data.events;
        const shuffled = [...events].sort(() => Math.random() - 0.5);
        const randomSix = shuffled.slice(0, Math.min(6, events.length));
        setEvents(randomSix);
        const remainingEvents = shuffled.filter((e) => !randomSix.includes(e));
        const randomThree = remainingEvents.slice(
          0,
          Math.min(3, remainingEvents.length)
        );
        setCarouselEvents(randomThree);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [date]);

  return (
    <>
      <Header setDate={setDate} />
      <section className="mx-auto my-8 max-w-6xl px-4">
        <div className="flex flex-col md:flex-row gap-6">
          <DateToday date={date} />
          <DateFilter setDate={setDate} />
        </div>
      </section>
      <EventsHeader />
      {loading ? <Spinner /> : <Events events={events} />}
      <Carousel carouselEvents={carouselEvents} />
      <Footer />
    </>
  );
}

export default App;
