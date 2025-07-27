export default function Button({ text }) {
  return (
    <button className="bg-black text-white px-12 py-2 rounded-sm font-semibold hover:bg-red-800 transition cursor-pointer">
      {text}
    </button>
  );
}
