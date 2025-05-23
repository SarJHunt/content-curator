import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function EmblaCarousel({
  slides,
}: {
  slides: { image?: string; iframe?: string; title: string; description: string }[];
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect(); // Set initial selected index
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="relative">
      {/* Carousel container */}
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-4">
          {slides.map((slide, index) => (
            <div className="embla__slide flex-shrink-0 w-full sm:w-1/2 lg:w-1/3" key={index}>
              {slide.iframe ? (
                // Render iframe if the slide has an iframe property
                <div className="relative w-full h-64">
                  <iframe
                    src={slide.iframe}
                    title={slide.title}
                    className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                // Render image if the slide has an image property
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
              )}
              <h3 className="text-lg font-bold mt-2 text-center">{slide.title}</h3>
              <p className="text-muted-foreground text-center">{slide.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow hover:bg-primary/90"
      >
        &#8592;
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow hover:bg-primary/90"
      >
        &#8594;
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className={`w-3 h-3 rounded-full ${
              index === selectedIndex ? "bg-primary" : "bg-muted-foreground"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}