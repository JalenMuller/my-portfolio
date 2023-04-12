import { useState } from "react";

function Carousel(props: { images: string[]; className?: string }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const images = props.images;
  const navigateSlides = (bool: boolean) => {
    if (bool) {
      console.log(images.length);
      if (slideNumber < images.length - 1) {
        setSlideNumber(slideNumber + 1);
      }
    } else {
      if (slideNumber !== 0) {
        setSlideNumber(slideNumber - 1);
      }
    }
  };
  return (
    <div
      id="indicators-carousel"
      className={`relative w-full h-48 ${props?.className}`}
      data-carousel="static"
    >
      <div className="relative h-56 overflow-hidden">
        {images.map((image, i) => (
          <div
            key={i}
            className={`${
              i !== slideNumber && "hidden"
            } duration-700 ease-in-out`}
            data-carousel-item="active"
          >
            <img src={image} className=" rounded-lg mx-auto h-full" alt="" />
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2"></div>
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span
          className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-zinc-800/60  group-hover:bg-white/50 group-focus:ring-4 ring-2 ring-white  group-focus:outline-none"
          onClick={() => navigateSlides(false)}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-100"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span
          className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-zinc-800/60  group-hover:bg-white/50 group-focus:ring-4 ring-2 ring-white  group-focus:outline-none"
          onClick={() => navigateSlides(true)}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-100"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}

export default Carousel;
