"use client";
import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";
import { cn } from "@/lib/utils";

const CarouselContext = React.createContext(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within <Carousel>");
  }
  return context;
}

const Carousel = React.forwardRef(function Carousel(
  { className, opts = {}, setApi, children, ...props },
  ref
) {
  const { fade, ...carouselOpts } = opts;
  const [emblaRef, emblaApi] = useEmblaCarousel(carouselOpts, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
    ClassNames({ snapped: "is-snapped", inView: "is-in-view" }),
  ]);
  React.useImperativeHandle(ref, () => emblaApi, [emblaApi]);
  React.useEffect(() => {
    if (!emblaApi) return;
    if (setApi) setApi(emblaApi);
  }, [emblaApi, setApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    const { slideRegistry } = emblaApi.internalEngine();
    const slides = emblaApi.slideNodes();
    const total = slideRegistry.length;
    const updatePrevNext = () => {
      const selected = emblaApi.selectedScrollSnap();
      const prevSnap = (selected - 1 + total) % total;
      const nextSnap = (selected + 1) % total;
      slides.forEach((slide) => {
        slide.classList.remove("is-in-prev", "is-in-next");
      });
      slideRegistry[prevSnap].forEach((idx) => {
        slides[idx].classList.add("is-in-prev");
      });
      slideRegistry[nextSnap].forEach((idx) => {
        slides[idx].classList.add("is-in-next");
      });
    };
    updatePrevNext();
    emblaApi.on("select", updatePrevNext);
    emblaApi.on("reInit", updatePrevNext);
    return () => {
      emblaApi.off("select", updatePrevNext);
      emblaApi.off("reInit", updatePrevNext);
    };
  }, [emblaApi]);

  return (
    <div ref={emblaRef} className={cn("relative overflow-hidden", className)} {...props}>
      <CarouselContext.Provider value={{ embla: emblaApi, fade }}>
        {children}
      </CarouselContext.Provider>
    </div>
  );
});
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef(function CarouselContent(
  { className, ...props },
  ref
) {
  const { fade } = useCarousel();
  return <div ref={ref} className={cn("flex", fade && "relative", className)} {...props} />;
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef(function CarouselItem(
  { className, index, ...props },
  ref
) {
  const { fade } = useCarousel();
  // "index" is accepted for backward compatibility but ignored
  return (
    <div
      ref={ref}
      className={cn(
        "min-w-0 shrink-0 grow-0",
        fade &&
          "absolute inset-0 opacity-0 pointer-events-none transition-opacity duration-500 [&.is-snapped]:opacity-100 [&.is-snapped]:pointer-events-auto",
        className
      )}
      {...props}
    />
  );
});
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef(function CarouselPrevious(
  { className, ...props },
  ref
) {
  const { embla } = useCarousel();
  return (
    <button
      ref={ref}
      className={cn(
        "absolute left-2 top-1/2 -translate-y-1/2 rounded-md bg-white/80 p-2 shadow",
        className
      )}
      onClick={() => embla && embla.scrollPrev()}
      {...props}
    />
  );
});
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef(function CarouselNext(
  { className, ...props },
  ref
) {
  const { embla } = useCarousel();
  return (
    <button
      ref={ref}
      className={cn(
        "absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-white/80 p-2 shadow",
        className
      )}
      onClick={() => embla && embla.scrollNext()}
      {...props}
    />
  );
});
CarouselNext.displayName = "CarouselNext";

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};
