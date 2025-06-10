import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

export default function AuthLayout({ children }) {
  return (
      <div className="w-full flex flex-col lg:grid lg:grid-cols-2 h-dvh">
        <ScrollArea className="grow flex flex-col [&_[data-radix-scroll-area-viewport]]:flex [&_[data-radix-scroll-area-viewport]]:flex-col [&_[data-radix-scroll-area-viewport]]:*:!flex [&_[data-radix-scroll-area-viewport]]:*:!flex-col  [&_[data-radix-scroll-area-viewport]]:*:!h-full">
          <div className="grow"></div>
          {children}
          <div className="grow"></div>
        </ScrollArea>

        <div className="hidden bg-muted lg:block relative">
          <Image
            src="https://d1y41eupgbwbb2.cloudfront.net/images/adminAuth.webp"
            alt="Image"
            priority={true}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="size-full object-cover object-center"
          />
        </div>
      </div>
  );
}
