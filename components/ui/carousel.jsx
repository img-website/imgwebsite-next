"use client";
import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
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
  { className, opts, setApi, children, ...props },
  ref
) {
  const [emblaRef, emblaApi] = useEmblaCarousel(opts, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  React.useImperativeHandle(ref, () => emblaApi, [emblaApi]);
  React.useEffect(() => {
    if (!emblaApi) return;
    if (setApi) setApi(emblaApi);
  }, [emblaApi, setApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    const count = emblaApi.scrollSnapList().length;
    const loop = emblaApi.options.loop;

    const applyClasses = () => {
      const current = emblaApi.selectedScrollSnap();
      const prev = current > 0 ? current - 1 : loop ? count - 1 : -1;
      const next = current < count - 1 ? current + 1 : loop ? 0 : -1;

      emblaApi.slideNodes().forEach((node) => {
        const index = Number(node.dataset.slideIndex);
        node.classList.toggle("embla-slide-active", index === current);
        node.classList.toggle("embla-slide-prev", index === prev);
        node.classList.toggle("embla-slide-next", index === next);
      });
    };

    applyClasses();
    emblaApi.on("select", applyClasses);
    emblaApi.on("reInit", applyClasses);
    return () => {
      emblaApi.off("select", applyClasses);
      emblaApi.off("reInit", applyClasses);
    };
  }, [emblaApi]);

  return (
    <div ref={emblaRef} className={cn("relative overflow-hidden", className)} {...props}>
      <CarouselContext.Provider value={{ embla: emblaApi }}>
        {children}
      </CarouselContext.Provider>
    </div>
  );
});
Carousel.displayName = "Carousel";

const CarouselItem = React.forwardRef(function CarouselItem(
  { className, index = -1, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      data-slide-index={index}
      className={cn("min-w-0 shrink-0 grow-0", className)}
      {...props}
    />
  );
});
CarouselItem.displayName = "CarouselItem";

const CarouselContent = React.forwardRef(function CarouselContent(
  { className, children, ...props },
  ref
) {
  const items = React.Children.map(children, (child, index) =>
    React.isValidElement(child) && child.type === CarouselItem
      ? React.cloneElement(child, { index })
      : child
  );

  return (
    <div ref={ref} className={cn("flex", className)} {...props}>
      {items}
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

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
