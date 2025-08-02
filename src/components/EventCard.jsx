export default function EventCard() {
  const tags = ["History", "World War", "Science", "Innovation"];

  return (
    <div className="w-full flex justify-center py-2">
      <div className="w-full md:w-2/3 bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="md:w-1/3 w-full">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Event"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Content */}
          <div className="md:w-2/3 w-full p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold mb-2">Event Title</h2>
              <p className="text-gray-700 mb-4 text-sm">
                This is a short description of the historical event. It includes
                some meaningful information about what happened on a specific
                date in history.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-black text-xs px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
