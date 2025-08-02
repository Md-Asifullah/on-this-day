import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Carousel() {
  const slides = [
    {
      text: "On this day: A major event changed the course of history.",
      bg: "bg-green-800",
    },
    {
      text: "Did you know? This date is tied to a famous invention.",
      bg: "bg-red-800",
    },
    {
      text: "Historic fact: A great leader was born on this day.",
      bg: "bg-black",
    },
  ];

  return (
    <div className="w-full flex justify-center py-6">
      <div className="w-full md:w-2/3">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className={`h-24 md:h-28 text-white flex items-center justify-center rounded-md shadow ${slide.bg}`}
              >
                <p className="text-lg md:text-xl font-medium px-4 text-center">
                  {slide.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
