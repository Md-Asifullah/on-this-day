import DOMPurify from "dompurify";

export default function EventCard({ event }) {
  const cleanHTML = DOMPurify.sanitize(event.pages[0].extract_html);
  return (
    <div className="w-full flex justify-center py-4">
      <div className="w-full md:w-3/4 lg:w-2/3 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="md:w-1/3 w-full">
            <img
              src={event.pages[0].originalimage?.source}
              alt="Event"
              className="object-cover w-full"
              style={{ height: "300px" }} // fixed height, same as your original
            />
          </div>

          {/* Content */}
          <div className="md:w-2/3 w-full p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                {event.text}
              </h2>
              {/* <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {event.pages[0].extract_html}
              </p> */}
              <div
                className="prose prose-sm text-gray-600 max-w-none mb-4"
                dangerouslySetInnerHTML={{
                  __html: cleanHTML,
                }}
              />
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between flex-wrap gap-3 mt-4">
              {/* Tags */}
              <span className="bg-amber-100 text-amber-800 text-base font-medium px-3 py-1 rounded-full">
                {event.year}
              </span>

              {/* Link */}
              <a
                href={event.pages[0].content_urls.desktop.page}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-800 bg-green-100 px-4 py-2 rounded-md text-sm font-medium truncate max-w-[200px] 
             hover:bg-black hover:text-white hover:no-underline transition-colors duration-300"
              >
                Read more →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
