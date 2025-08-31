import Button from "./Button";

export default function LoadMore({
  setEvents,
  shuffled,
  setShuffled,
  showCount,
  setShowCount,
}) {
  function handleLoadMore() {
    const newCount = showCount + 6;
    setShowCount(newCount);
    setEvents(shuffled.slice(0, Math.min(newCount, shuffled.length)));
  }
  return (
    <div className="text-center px-4 py-4">
      <Button
        text="Load More"
        classes="bg-green-800 text-white hover:bg-black"
        onClick={handleLoadMore}
      />
    </div>
  );
}
