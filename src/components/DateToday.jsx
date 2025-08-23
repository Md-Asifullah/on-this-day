export default function DateToday({ date }) {
  const now = new Date();
  const todayDay = now.getDate();
  const todayMonth = now.getMonth() + 1;
  let isToday = false;

  const todayString = now.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
  });

  let displayDate;
  if (date.day === todayDay && date.month === todayMonth) {
    displayDate = todayString;
    isToday = true;
  } else {
    const customDate = new Date(now.getFullYear(), date.month - 1, date.day);
    displayDate = customDate.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
    });
  }

  return (
    <div className="w-full md:w-1/2 p-6 flex flex-col items-center justify-center h-84">
      <p className="text-lg">{isToday ? "Today is" : "Showing result for"}</p>
      <p className="text-5xl mt-2 font-bold text-yellow-500">{displayDate}</p>
    </div>
  );
}
