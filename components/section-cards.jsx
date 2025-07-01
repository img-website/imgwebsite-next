import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SectionCards({ stats }) {
  const items = [
    { label: "Published Blogs", value: stats?.blogs ?? 0 },
    { label: "Leads", value: stats?.leads ?? 0 },
    { label: "Subscribers", value: stats?.newsletters ?? 0 },
    { label: "Admins", value: stats?.admins ?? 0 },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <Card key={item.label}>
          <CardHeader>
            <CardDescription>{item.label}</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              {item.value}
            </CardTitle>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
