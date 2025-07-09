import UserAvatar from "@/components/shared/user-avatar";
import { Button } from "@/components/ui/button";
import { BadgeCheck } from "lucide-react";
import Link from "next/link";

const UserInformation = () => {
  return (
    <Link href={"/u/ixti2101"} className="flex items-center gap-x-2">
      <UserAvatar
        avatar="https://avatars.githubusercontent.com/u/176753388?s=96&v=4"
        username="ixti2101"
        size={"lg"}
      />

      <div className="flex flex-col space-y-0">
        <div className="flex items-center gap-x-1">
          <h2 className="font-bold text-lg font-space-grotesk">
            Ixtiyor Saitov
          </h2>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="rounded-full size-7"
          >
            <BadgeCheck className="text-blue-500" />
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">23 subscribers</p>
      </div>
    </Link>
  );
};

export default UserInformation;
