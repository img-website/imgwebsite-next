import { cookies } from "next/headers";
import { hasServerPermission } from "@/helpers/permissions";
import BlogsPageClient from "./BlogsPageClient";

export default async function Page() {
  const store = await cookies();
  const canAdd = hasServerPermission(store, 'blogs', 'write');

  return <BlogsPageClient canAdd={canAdd} />;
}
