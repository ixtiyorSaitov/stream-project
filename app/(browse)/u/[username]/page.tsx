import { getUserByUsername } from "@/actions/user.action";
import UserAvatar from "@/components/shared/user-avatar";
import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import SubscribeBtn from "../../_components/subscribe-btn";
import UserContent from "../_components/user-content";
import { Suspense } from "react";

interface UserNamePageProps {
  params: Promise<{ username: string }>;
}

const UserNamePage = async ({ params }: UserNamePageProps) => {
  const { username } = await params;
  const response = await getUserByUsername({ username });
  const self = await currentUser();

  if (!response?.data?.user) {
    return <div>User not found</div>;
  }

  const user = response.data?.user;
  return (
    <div className="w-full">
      <div className="w-full h-72 rounded-xl relative bg-secondary flex items-center justify-center">
        <h1 className="font-space-grotesk text-2xl capitalize font-bold">
          Banner Image
        </h1>
      </div>

      <div className="w-1/2 mt-4">
        <div className="flex items-start space-x-4">
          <UserAvatar
            username={user.username}
            avatar={user.avatar}
            size={"2xl"}
          />
          <div className="flex flex-col space-y-0">
            <h2 className="font-space-grotesk text-2xl font-bold">
              {user.fullName || "No name provided"}
            </h2>

            <div className="flex items-center gap-x-2">
              <p>@{user.username}</p>
              <div className="size-1 rounded-full bg-muted-foreground"></div>
              <p className="text-muted-foreground">12 subscribers</p>
              <div className="size-1 rounded-full bg-muted-foreground"></div>
              <p className="text-muted-foreground">10 videos</p>
            </div>

            <p className="line-clamp-2 leading-4 text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              facilis et totam sequi, sint nostrum a, fuga illum, non placeat
              similique officiis aspernatur debitis autem! Pariatur voluptate
              deleniti adipisci nisi.
            </p>

            {self && user && self.username === user.username ? (
              <div className="flex items-center space-x-3">
                <Button
                  variant={"outline"}
                  size={"lg"}
                  className="rounded-full mt-4"
                  asChild
                >
                  <Link href={"/dashboard/settings"}>Customize Channel</Link>
                </Button>
                <Button
                  variant={"secondary"}
                  size={"lg"}
                  className="rounded-full mt-4"
                  asChild
                >
                  <Link href={"/dashboard/video"}>Manage videos</Link>
                </Button>
              </div>
            ) : (
              <div>
                <SubscribeBtn isFollowing={false} />
              </div>
            )}
          </div>
        </div>
      </div>

      <Suspense fallback={<p>Loading</p>}>
        <UserContent />
      </Suspense>
    </div>
  );
};

export default UserNamePage;
