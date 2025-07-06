import { ModeToggle } from "@/components/shared/mode-toggle";
import { SidebarTrigger } from "@/components/ui/sidebar";

const Actions = () => {
  return (
    <div className="flex items-center justify-end gap-x-2">
      <ModeToggle />
      <SidebarTrigger />
    </div>
  );
};

export default Actions;
