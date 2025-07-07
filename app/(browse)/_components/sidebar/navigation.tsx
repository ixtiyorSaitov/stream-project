"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Clapperboard, Home, Layers2, TvMinimalPlay } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathName = usePathname();
  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>Pages</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {navigation_items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton isActive={pathName === item.route} asChild>
                  <Link href={item.route}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </>
  );
};

export default Navigation;

const navigation_items = [
  { title: "Home", route: "/", icon: Home },
  { title: "Lives", route: "/lives", icon: Layers2 },
  { title: "Subscribtions", route: "/supscribtions", icon: TvMinimalPlay },
  { title: "Dashboard", route: "/dashboard", icon: Clapperboard },
];
