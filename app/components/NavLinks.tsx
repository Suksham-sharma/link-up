"use client";

import { cn } from "@/lib/utils";
import { CalendarCheck, HomeIcon, Settings, Users2Icon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface NavLinksProps {
  id: number;
  name: string;
  href: string;
  icon: any;
}

export const navLinkItems: NavLinksProps[] = [
  {
    id: 0,
    name: "Event Types",
    href: "/dashboard",
    icon: HomeIcon,
  },
  {
    id: 1,
    name: "Meetings",
    href: "/dashboard/meetings",
    icon: Users2Icon,
  },
  {
    id: 2,
    name: "Availability",
    href: "/dashboard/availability",
    icon: CalendarCheck,
  },
  {
    id: 3,
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="mt-4">
      {navLinkItems.map((item) => (
        <Link
          className={cn(
            pathname === item.href
              ? "text-primary bg-primary/10"
              : "text-muted-foreground hover:text-foreground",
            "flex items-center gap-2 p-4 rounded-lg transition-all hover:text-primary hover:bg-primary/5 my-2"
          )}
          href={item.href}
          key={item.id}
        >
          <item.icon className="w-7" />
          {item.name}
        </Link>
      ))}
    </div>
  );
}
