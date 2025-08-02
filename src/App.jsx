import "./App.css";
import Header from "./components/Header";
import DateToday from "./components/DateToday";
import DateFilter from "./components/DateFilter";
import EventsHeader from "./components/EventsHeader";
import Events from "./components/Events";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <section className="mx-auto my-8 max-w-6xl px-4">
        <div className="flex flex-col md:flex-row gap-6">
          <DateToday />
          <DateFilter />
        </div>
      </section>
      <EventsHeader />
      <Events />
      <Carousel />
      <Footer />
    </>
  );
}

export default App;
