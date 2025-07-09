import { getFollowing } from "@/actions/user.action";
import UserAvatar from "@/components/shared/user-avatar";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import Link from "next/link";

const Following = async () => {
  const data = await getFollowing();

  const following = data?.data?.following || [];

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Following</SidebarGroupLabel>
      <SidebarContent>
        <SidebarMenu>
          {following.map((item) => (
            <SidebarMenuItem key={item.id}>
              <SidebarMenuButton asChild size={"lg"}>
                <Link href={`/u/${item.username}`}>
                  <UserAvatar
                    avatar={item.avatar}
                    username={item.username}
                    variant={"square"}
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
export const FollowingSkeleton = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Following</SidebarGroupLabel>
      <SidebarContent>
        <SidebarMenu>
          {Array.from({ length: 3 }).map((_, index) => (
            <SidebarMenuItem key={index}>
              <SidebarMenuButton size={"lg"}>
                <Skeleton className="w-8 h-8" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-12" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </SidebarGroup>
  );
};
