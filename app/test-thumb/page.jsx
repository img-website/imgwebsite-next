'use client'
import { useState } from 'react'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  useCarouselThumbs,
} from '@/components/ui/carousel'

const images = [
  'https://images.unsplash.com/photo-1550439062-609e1531270e?w=1080',
  'https://images.unsplash.com/photo-1547447135-f78c4b23a3ab?w=1080',
  'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=1080',
  'https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?w=1080',
]

export default function CarouselThumbTest() {
  const [mainApi, setMainApi] = useState(null)
  const [thumbApi, setThumbApi] = useState(null)
  useCarouselThumbs(mainApi, thumbApi)

  return (
    <div className="container mx-auto max-w-3xl py-10">
      <Carousel setApi={setMainApi} opts={{ loop: true }} className="mb-4">
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index} className="relative h-64 w-full">
              <Image
                src={src}
                fill
                sizes="100vw"
                alt="Slide"
                className="object-cover rounded-md"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>

      <Carousel
        setApi={setThumbApi}
        opts={{ containScroll: 'keepSnaps', dragFree: true }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem
              key={index}
              className="relative h-20 w-32 cursor-pointer opacity-50 [&.is-selected]:opacity-100 [&.is-selected]:ring-2 [&.is-selected]:ring-primary mr-2 last:mr-0"
            >
              <Image
                src={src}
                fill
                sizes="25vw"
                alt="Thumbnail"
                className="object-cover rounded"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
