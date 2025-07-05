import ClientPage from './client';
import { fetchDynamicMeta } from '@/app/lib/dynamicMeta';

export async function generateMetadata() {
  return (await fetchDynamicMeta('/grocery-app-development.php')) || {};
}

export default function Page() {
  return <ClientPage />;
}
