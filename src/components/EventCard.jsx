export default function EventCard({ event }) {
  return (
    <div className="w-full flex justify-center py-2">
      <div className="w-full md:w-2/3 bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="md:w-1/3 w-full">
            <img
              src={event.pages[0].originalimage?.source}
              alt="Event"
              className="object-cover w-full"
              style={{ height: "300px" }}
            />
          </div>

          {/* Content */}
          <div className="md:w-2/3 w-full p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold mb-2">{event.text}</h2>
              <p className="text-gray-700 mb-4 text-sm">
                {event.pages[0].extract_html}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 text-black text-xs px-3 py-1 rounded-full">
                {event.year}
              </span>
            </div>
            <a href={event.pages[0].content_urls.desktop.page} target="_blank">
              {event.pages[0].content_urls.desktop.page}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
