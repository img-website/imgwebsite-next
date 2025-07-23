import getDynamicMeta from '@/helpers/getDynamicMeta';
import Image from 'next/image';
import Svg from '@/components/svg';

export async function generateMetadata() {
  return await getDynamicMeta('/test-thumb');
}

const images = [
  'https://images.unsplash.com/photo-1550439062-609e1531270e?w=1080',
  'https://images.unsplash.com/photo-1547447135-f78c4b23a3ab?w=1080',
  'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=1080',
  'https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?w=1080',
];

export default function CarouselThumbTest() {
  const slideClasses = [
    'peer-checked/0:block',
    'peer-checked/1:block',
    'peer-checked/2:block',
    'peer-checked/3:block',
  ];
  const thumbClasses = [
    'peer-checked/0:opacity-100 peer-checked/0:ring-2 peer-checked/0:ring-primary',
    'peer-checked/1:opacity-100 peer-checked/1:ring-2 peer-checked/1:ring-primary',
    'peer-checked/2:opacity-100 peer-checked/2:ring-2 peer-checked/2:ring-primary',
    'peer-checked/3:opacity-100 peer-checked/3:ring-2 peer-checked/3:ring-primary',
  ];

  return (
    <div className="container mx-auto max-w-3xl py-10">
      <div className="relative h-64 mb-4">
        {images.map((_, i) => (
          <input
            key={`in-${i}`}
            type="radio"
            name="slide"
            id={`slide-${i}`}
            className={`hidden peer/${i}`}
            defaultChecked={i === 0}
          />
        ))}
        {images.map((src, i) => {
          const prev = (i - 1 + images.length) % images.length;
          const next = (i + 1) % images.length;
          return (
            <div
              key={`img-${i}`}
              className={`absolute inset-0 hidden ${slideClasses[i]}`}
            >
              <Image
                src={src}
                fill
                sizes="100vw"
                alt={`Slide ${i + 1}`}
                className="object-cover rounded-md"
              />
              <label
                htmlFor={`slide-${prev}`}
                className="cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 rounded-md bg-white/80 p-2 shadow"
              >
                <Svg name="arrowPrev" className="size-6 text-gray-700" />
              </label>
              <label
                htmlFor={`slide-${next}`}
                className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 rounded-md bg-white/80 p-2 shadow"
              >
                <Svg name="arrowNext" className="size-6 text-gray-700" />
              </label>
            </div>
          );
        })}
      </div>
      <div className="flex">
        {images.map((src, i) => (
          <label
            key={`thumb-${i}`}
            htmlFor={`slide-${i}`}
            className={`relative mr-2 last:mr-0 h-20 w-32 cursor-pointer opacity-50 ${thumbClasses[i]}`}
          >
            <Image
              src={src}
              fill
              sizes="25vw"
              alt={`Thumbnail ${i + 1}`}
              className="object-cover rounded"
            />
          </label>
        ))}
      </div>
    </div>
  );
}
