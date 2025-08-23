import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Carousel({ carouselEvents }) {
  const slides = [
    {
      text: `On this day: ${carouselEvents[0]?.text}`,
      bg: "bg-green-800",
    },
    {
      text: `Did you know on this day? ${carouselEvents[1]?.text}`,
      bg: "bg-red-800",
    },
    {
      text: `Historic fact on this day: ${carouselEvents[2]?.text}`,
      bg: "bg-black",
    },
  ];

  return (
    <div className="w-full flex justify-center py-6">
      <div className="w-full md:w-2/3">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
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
