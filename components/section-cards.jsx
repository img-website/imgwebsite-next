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
import Link from "next/link";

export function SectionCards({ stats }) {
  const items = [
    {
      label: "Published Blogs",
      data: stats?.blogs,
      message: "Trending vs last month",
      description: "Published blog posts",
      url: "/admin/blogs",
    },
    {
      label: "Leads",
      data: stats?.leads,
      message: "Lead generation change",
      description: "New leads captured",
      url: "/admin/leads",
    },
    {
      label: "Subscribers",
      data: stats?.newsletters,
      message: "User retention",
      description: "Newsletter signups",
      url: "/admin/newsletters",
    },
    {
      label: "Admins",
      data: stats?.admins,
      message: "Team growth",
      description: "Team members",
      url: "/admin/admins",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => {
        const value = item.data?.count ?? 0;
        const percent = item.data?.percent ?? '0%';
        const positive = item.data?.positive ?? true;
        const Icon = positive ? IconTrendingUp : IconTrendingDown;
        const href = item.url;
        return (
          <Link key={item.label} href={href} className="no-underline">
            <Card className="max-sm:gap-2 max-sm:py-4">
              <CardHeader className="max-sm:px-4">
                <CardDescription>{item.label}</CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                  {value}
                </CardTitle>
                <CardAction>
                  <Badge variant="outline">
                    <Icon />
                    {percent}
                  </Badge>
                </CardAction>
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1.5 text-sm max-sm:px-4">
                <div className="line-clamp-1 flex gap-2 font-medium">
                  {item.message} <Icon className="size-4" />
                </div>
                <div className="text-muted-foreground max-sm:hidden">{item.description}</div>
              </CardFooter>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
