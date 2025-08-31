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
import LoadMore from "./components/LoadMore";

function App() {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const [events, setEvents] = useState([]);
  const [carouselEvents, setCarouselEvents] = useState([]);
  const [date, setDate] = useState({ month: month, day: day });
  const [loading, setLoading] = useState(false);
  const [shuffled, setShuffled] = useState(null);
  const [showCount, setShowCount] = useState(6);

  useEffect(() => {
    const resetCount = 6;
    setShowCount(6);
    setLoading(true);
    fetchEvents(date.month, date.day)
      .then((data) => {
        const events = data.events;
        const shuffledArr = [...events].sort(() => Math.random() - 0.5);
        setShuffled(shuffledArr);
        const randomSix = shuffledArr.slice(
          0,
          Math.min(resetCount, events.length)
        );
        setEvents(randomSix);
        const remainingEvents = shuffledArr.filter(
          (e) => !randomSix.includes(e)
        );
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
      {showCount < shuffled?.length ? (
        <LoadMore
          setEvents={setEvents}
          shuffled={shuffled}
          setShuffled={setShuffled}
          showCount={showCount}
          setShowCount={setShowCount}
        />
      ) : (
        ""
      )}
      <Carousel carouselEvents={carouselEvents} />
      <Footer />
    </>
  );
}

export default App;
