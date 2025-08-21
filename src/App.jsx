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

function App() {
  const [events, setEvents] = useState([]);
  const [date, setDate] = useState({ month: "08", day: "22" });

  useEffect(() => {
    fetchEvents(date.month, date.day)
      .then((data) => {
        const length = data.events.length > 6 ? 6 : data.events.length;
        setEvents(data.events.slice(0, length) || []);
      })
      .catch((err) => console.error(err));
  });

  return (
    <>
      <Header />
      <section className="mx-auto my-8 max-w-6xl px-4">
        <div className="flex flex-col md:flex-row gap-6">
          <DateToday />
          <DateFilter setDate={setDate} />
        </div>
      </section>
      <EventsHeader />
      <Events events={events} />
      <Carousel />
      <Footer />
    </>
  );
}

export default App;
