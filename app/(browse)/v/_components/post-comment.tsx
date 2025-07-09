"use client";

import UserAvatar from "@/components/shared/user-avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/nextjs";
import { Send } from "lucide-react";

const PostComment = () => {
  const { user } = useUser();
  return (
    <div className="flex items-center gap-x-4 mt-2">
      <UserAvatar
        username={user?.username || "Anonymus"}
        avatar={user?.imageUrl || ""}
      />
      <form className="flex flex-1">
        <Input
          placeholder="Add a public comment..."
          className="rounded-r-none w-full bg-secondary font-space-grotesk border-r border-r-secondary-foreground/50 focus-visible:ring-0 focus:border-none border-none"
        />

        <Button
          className="rounded-l-none border-none"
          variant={"secondary"}
          size={"icon"}
        >
          <Send />
        </Button>
      </form>
    </div>
  );
};

export default PostComment;
