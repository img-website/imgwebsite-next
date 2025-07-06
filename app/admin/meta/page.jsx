import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function Page() {
  return (
    <div className="grid gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Link href="/admin/meta/static" className="contents">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>Static Meta</CardTitle>
              <CardDescription>Manage static metadata</CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href="/admin/meta/dynamic" className="contents">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>Dynamic Meta</CardTitle>
              <CardDescription>Manage dynamic metadata</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>
    </div>
  );
}
