import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";

const Following = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Following</SidebarGroupLabel>
      <SidebarContent>
        <SidebarMenu>
          {data.map((item) => (
            <SidebarMenuItem key={item.id}>
              <SidebarMenuButton asChild size={"lg"}>
                <Link href={`/u/${item.username}`}>
                  <Image
                    width={32}
                    height={32}
                    src={item.avatar}
                    alt={item.username}
                  />
                  <div className="flex flex-col">
                    <p className="text-sm font-space-grotesk">
                      @{item.username}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {item.followedBy} follower{item.followedBy !== 1 && "s"}
                    </p>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </SidebarGroup>
  );
};

export default Following;

const data = [
  {
    id: "1",
    username: "ixti2101",
    avatar: "https://github.com/shadcn.png",
    followedBy: 8,
  },
  {
    id: "2",
    username: "oman",
    avatar: "https://github.com/shadcn.png",
    followedBy: 23,
  },
];
