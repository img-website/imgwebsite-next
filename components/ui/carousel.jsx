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
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useImperativeHandle(ref, () => emblaApi, [emblaApi]);
  React.useEffect(() => {
    if (!emblaApi) return;
    if (setApi) setApi(emblaApi);
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, setApi]);

  return (
    <div ref={emblaRef} className={cn("relative overflow-hidden", className)} {...props}>
      <CarouselContext.Provider value={{ embla: emblaApi, selectedIndex }}>
        {children}
      </CarouselContext.Provider>
    </div>
  );
});
Carousel.displayName = "Carousel";

const SlideContext = React.createContext({ count: 0 });

const CarouselItem = React.forwardRef(function CarouselItem(
  { className, index = -1, ...props },
  ref
) {
  const { selectedIndex, embla } = useCarousel();
  const { count } = React.useContext(SlideContext);
  const loop = embla ? embla.internalEngine().options.loop : false;

  const prevIndex =
    selectedIndex > 0 ? selectedIndex - 1 : loop ? count - 1 : -1;
  const nextIndex =
    selectedIndex < count - 1 ? selectedIndex + 1 : loop ? 0 : -1;

  const active = index === selectedIndex;
  const prev = index === prevIndex;
  const next = index === nextIndex;

  return (
    <div
      ref={ref}
      className={cn(
        "min-w-0 shrink-0 grow-0",
        className,
        active && "embla-slide-active",
        prev && "embla-slide-prev",
        next && "embla-slide-next"
      )}
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
  const count = items.filter(
    (child) => React.isValidElement(child) && child.type === CarouselItem
  ).length;

  return (
    <SlideContext.Provider value={{ count }}>
      <div ref={ref} className={cn("flex", className)} {...props}>
        {items}
      </div>
    </SlideContext.Provider>
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
