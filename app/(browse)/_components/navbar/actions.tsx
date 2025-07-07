import { ModeToggle } from "@/components/shared/mode-toggle";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { LogIn } from "lucide-react";

const Actions = () => {
  return (
    <div className="flex items-center justify-end gap-x-2">
      <ModeToggle />
      <SidebarTrigger />
      <SignedOut>
        <SignInButton>
          <Button size={"sm"}>
            <span className="max-md:hidden">Sign in</span>
            <LogIn />
          </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default Actions;
