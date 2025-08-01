export default function DateToday() {
  const today = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="w-full md:w-1/2 p-6 flex flex-col items-center justify-center h-64">
      <p className="text-lg">Today is</p>
      <p className="text-4xl mt-2 font-bold text-yellow-500">{today}</p>
    </div>
  );
}
