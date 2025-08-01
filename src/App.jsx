import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import DateToday from "./components/DateToday";
import DateFilter from "./components/DateFilter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <section class="mx-auto my-8 max-w-6xl px-4">
        <div class="flex flex-col md:flex-row gap-6">
          <DateToday />
          <DateFilter />
        </div>
      </section>
    </>
  );
}

export default App;
