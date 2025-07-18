"use client";
import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";
import Fade from "embla-carousel-fade";
import AutoScroll from "embla-carousel-auto-scroll";
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
  const { fade, autoScroll, pagination, ...carouselOpts } = opts || {};
  const plugins = React.useMemo(() => {
    const list = [
      Autoplay({ delay: 5000, stopOnInteraction: false }),
      ClassNames({ snapped: "is-snapped", inView: "is-in-view" }),
    ];
    if (fade) list.push(Fade());
    if (autoScroll) {
      const autoScrollOpts =
        autoScroll === true ? { stopOnInteraction: false } : autoScroll;
      list.push(AutoScroll(autoScrollOpts));
    }
    return list;
  }, [fade, autoScroll]);

  const [emblaRef, emblaApi] = useEmblaCarousel(carouselOpts, plugins);
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
      <CarouselContext.Provider value={{ embla: emblaApi }}>
        {children}
      </CarouselContext.Provider>
      {pagination ? (
        <CarouselPagination className="absolute left-1/2 -translate-x-1/2 bottom-2" />
      ) : null}
    </div>
  );
});
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef(function CarouselContent(
  { className, ...props },
  ref
) {
  return <div ref={ref} className={cn("flex", className)} {...props} />;
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef(function CarouselItem(
  { className, index, ...props },
  ref
) {
  // "index" is accepted for backward compatibility but ignored
  return <div ref={ref} className={cn("min-w-0 shrink-0 grow-0", className)} {...props} />;
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

const CarouselPagination = React.forwardRef(function CarouselPagination(
  { className, ...props },
  ref
) {
  const { embla } = useCarousel();
  const [scrollSnaps, setScrollSnaps] = React.useState([]);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!embla) return;
    setScrollSnaps(embla.scrollSnapList());
    const onSelect = () => setSelectedIndex(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    embla.on("reInit", onSelect);
    onSelect();
    return () => {
      embla.off("select", onSelect);
      embla.off("reInit", onSelect);
    };
  }, [embla]);

  if (!scrollSnaps.length) return null;

  return (
    <div
      ref={ref}
      className={cn("flex items-center justify-center gap-2", className)}
      {...props}
    >
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          className={cn(
            "size-2.5 rounded-full bg-gray-300 transition-all",
            index === selectedIndex && "w-5 bg-primary"
          )}
          onClick={() => embla && embla.scrollTo(index)}
        />
      ))}
    </div>
  );
});
CarouselPagination.displayName = "CarouselPagination";

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselPagination,
};
