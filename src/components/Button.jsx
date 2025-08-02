export default function Button({ text, classes = "", onClick }) {
  return (
    <button
      onClick={onClick}
      className={`bg-black px-12 py-2 rounded-sm font-semibold transition cursor-pointer ${classes}`}
    >
      {text}
    </button>
  );
}
