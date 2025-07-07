import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "./_components/sidebar/app-sidebar";
import AppNavbar from "./_components/navbar/app-navbar";

interface BrowseLayoutProps {
  children: React.ReactNode;
}
const BrowseLayout = ({ children }: BrowseLayoutProps) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full h-full">
        <AppNavbar />
        <div className="max-w-6xl container pt-4">{children}</div>
      </main>
    </SidebarProvider>
  );
};

export default BrowseLayout;
