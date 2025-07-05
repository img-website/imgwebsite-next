import ClientPage from './client';
import { fetchCurrentDynamicMeta } from '@/app/lib/dynamicMeta';

export async function generateMetadata() {
  return (await fetchCurrentDynamicMeta()) || {};
}

export default function Page() {
  return <ClientPage />;
}
