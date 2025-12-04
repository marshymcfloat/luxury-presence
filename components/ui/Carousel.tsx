"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const IMAGES = [
  "/carousel01.webp",
  "/carousel02.webp",
  "/carousel03.webp",
  "/carousel04.webp",
  "/carousel05.webp",
  "/carousel06.webp",
];

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 md:px-12">
      <div className="overflow-hidden rounded-sm" ref={emblaRef}>
        <div className="flex">
          {IMAGES.map((src, index) => (
            <div
              className="relative flex-[0_0_100%] min-w-0 pl-4 first:pl-0"
              key={index}
            >
              <div className="relative aspect-video md:aspect-21/9 w-full overflow-hidden bg-neutral-100 group">
                <Image
                  src={src}
                  fill
                  alt={`Gallery image ${index + 1}`}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-between items-center mt-8">
        {/* Custom Progress Line */}
        <div className="flex gap-2">
          {IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "h-1 transition-all duration-300 rounded-full",
                index === selectedIndex
                  ? "w-8 bg-neutral-800"
                  : "w-2 bg-neutral-200 hover:bg-neutral-400"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12 border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300 transition-colors"
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-5 h-5 text-neutral-600" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12 border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300 transition-colors"
            onClick={scrollNext}
          >
            <ChevronRight className="w-5 h-5 text-neutral-600" />
          </Button>
        </div>
      </div>
    </div>
  );
}
