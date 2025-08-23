import { useRef, useState } from "react";

import Button from "./Button";

export default function DateFilter({ setDate }) {
  const day = useRef(null);
  const [monthClicked, setMonthClicked] = useState(null);
  const activeClasses = "bg-red-800 text-white";
  const baseClasses = "bg-white text-gray-800";

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  function handleMonthOnClick(month) {
    setMonthClicked(month);
  }

  function handleButtonClick() {
    setDate({ month: monthClicked + 1, day: day.current.value });
  }

  return (
    <div className="w-full md:w-1/2 p-6 flex flex-col justify-center h-84">
      <div className="w-full">
        <p className="font-semibold mb-4">Select Month</p>

        <div className="grid grid-cols-6 gap-2">
          {months.map((month, index) => (
            <button
              key={month}
              className={` hover:bg-gray-100  py-2 px-4 border border-gray-200 rounded shadow cursor-pointer ${monthClicked === index ? activeClasses : baseClasses}`}
              onClick={() => handleMonthOnClick(index)}
            >
              {month}
            </button>
          ))}
        </div>
        <p className="font-semibold mt-6">Enter Day</p>
        <input
          ref={day}
          type="number"
          min="1"
          max="31"
          placeholder="Day"
          className="w-1/2 my-4 px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div>
          <Button
            text="View Events"
            classes="w-1/2 bg-yellow-500 text-black hover:bg-black hover:text-white"
            onClick={() => handleButtonClick()}
          />
        </div>
      </div>
    </div>
  );
}
