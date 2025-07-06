import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "./_components/sidebar/app-sidebar";

interface BrowseLayoutProps {
  children: React.ReactNode;
}
const BrowseLayout = ({ children }: BrowseLayoutProps) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default BrowseLayout;
