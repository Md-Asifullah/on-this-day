export default function DateFilter() {
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
    alert(month);
  }

  return (
    <div className="w-full md:w-1/2 p-6 flex items-center justify-center h-64">
      <div className="grid grid-cols-6  gap-2">
        {months.map((month, index) => (
          <button
            key={month}
            className="bg-white hover:bg-gray-100 text-gray-800  py-2 px-4 border border-gray-200 rounded shadow cursor-pointer"
            onClick={() => handleMonthOnClick(index)}
          >
            {month}
          </button>
        ))}
      </div>
    </div>
  );
}
