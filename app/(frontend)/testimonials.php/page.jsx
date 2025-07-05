import ClientPage from './client';
import { fetchDynamicMeta } from '@/app/lib/dynamicMeta';

export async function generateMetadata() {
  return (await fetchDynamicMeta('/testimonials.php')) || {};
}

export default function Page() {
  return <ClientPage />;
}
