import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import Navigation from "./navigation";
import Following from "./following";
import Recommended from "./recommended";

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <Navigation />
        <SidebarSeparator />
        <Following />
        <SidebarSeparator />
        <Recommended />
      </SidebarContent>
    </Sidebar>
  );
};
export default AppSidebar;
