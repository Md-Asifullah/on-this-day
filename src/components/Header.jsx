import Button from "./Button";
export default function Header() {
  return (
    <section className="bg-green-800 w-full py-12 text-white">
      <div className="max-w-2xl mx-auto text-center flex flex-col items-center space-y-6">
        <img src="/logo.png" alt="Logo" className="mx-auto h-32" />
        <h1 className="text-4xl font-bold">Discorver Historical Events</h1>
        <p className="text-lg">
          Find out what happened on today's date throughout history
        </p>
        <Button text="Surprise Me" />
      </div>
    </section>
  );
}
