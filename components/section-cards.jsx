import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SectionCards({ stats }) {
  const items = [
    {
      label: "Published Blogs",
      value: stats?.blogs ?? 0,
      positive: true,
      percent: `${((stats?.blogs ?? 0) / 10).toFixed(1)}%`,
      message: "Trending up this month",
      description: "Published blog posts",
    },
    {
      label: "Leads",
      value: stats?.leads ?? 0,
      positive: false,
      percent: `-${((stats?.leads ?? 0) / 20).toFixed(1)}%`,
      message: "Down this period",
      description: "New leads captured",
    },
    {
      label: "Subscribers",
      value: stats?.newsletters ?? 0,
      positive: true,
      percent: `${((stats?.newsletters ?? 0) / 15).toFixed(1)}%`,
      message: "Strong user retention",
      description: "Newsletter signups",
    },
    {
      label: "Admins",
      value: stats?.admins ?? 0,
      positive: true,
      percent: `${((stats?.admins ?? 0) / 10).toFixed(1)}%`,
      message: "Steady performance increase",
      description: "Team members",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => {
        const Icon = item.positive ? IconTrendingUp : IconTrendingDown;
        return (
          <Card key={item.label}>
            <CardHeader>
              <CardDescription>{item.label}</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                {item.value}
              </CardTitle>
              <CardAction>
                <Badge variant="outline">
                  <Icon />
                  {item.percent}
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                {item.message} <Icon className="size-4" />
              </div>
              <div className="text-muted-foreground">{item.description}</div>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
