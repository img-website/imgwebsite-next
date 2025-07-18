import getDynamicMeta from '@/helpers/getDynamicMeta';
import Client from './client';

export async function generateMetadata() {
  return await getDynamicMeta('/test-thumb');
}

export default function CarouselThumbTest() {

  return (
    <Client/>
  )
}
