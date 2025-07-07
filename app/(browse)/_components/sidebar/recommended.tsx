import { getRecommended } from "@/actions/user.action";
import UserAvatar from "@/components/shared/user-avatar";
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

const Recommended = async () => {
  const data = await getRecommended();
  console.log(data);

  const recommended = data?.data?.recommended || [];
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Recommended</SidebarGroupLabel>
      <SidebarContent>
        <SidebarMenu>
          {recommended.map((item) => (
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

export default Recommended;
