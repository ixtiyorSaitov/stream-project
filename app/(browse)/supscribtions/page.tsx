import { getHomeFeed } from "@/actions/feed.action";
import { getFollowing } from "@/actions/user.action";
import UserAvatar from "@/components/shared/user-avatar";
import { Separator } from "@/components/ui/separator";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import Link from "next/link";

const SupscribtionsPage = async () => {
  const responseFeed = await getHomeFeed();
  const responseUser = await getFollowing();

  const feeds = responseFeed.data?.feed || [];
  const subscribtions = responseUser.data?.following || [];

  return (
    <div className="w-full">
      <h1 className="text-2xl font-space-grotesk font-bold mb-2">Users</h1>
      <div className="w-full overflow-x-auto custom-scrollbar flex items-center space-x-4">
        {subscribtions.map((subscription) => (
          <Link href={`/u/${subscription.username}`} key={subscription.id}>
            <UserAvatar
              username={subscription.username}
              avatar={subscription.avatar}
              size={"2xl"}
              variant={"square"}
            />
            <p className="text-center font-space-grotesk font-bold">
              {subscription.username}
            </p>
          </Link>
        ))}
      </div>
      <Separator className="my-3" />
      <h1 className="text-2xl font-space-grotesk font-bold mb-2">
        {feeds.length > 0 ? "Videos" : "No videos found"}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-2 lg:gap-4 mt-6">
        {feeds.map((feed) => (
          <Link key={feed.id} href={`/v/${feed.id}`}>
            <div>
              <div className="h-56 rounded-lg relative">
                <Image
                  src={feed.thumbnail}
                  alt={feed.title}
                  className="object-cover rounded-lg"
                  fill
                />
              </div>
              <div className="mt-4 flex gap-x-2">
                <UserAvatar
                  showBadge
                  username={feed.user.username}
                  avatar={feed.user.avatar}
                  isLive
                />
                <div className="flex flex-col space-y-0">
                  <h2 className="line-clamp-2 break-words text-sm leading">
                    {feed.title}
                  </h2>

                  <div className="flex items-center gap-x-2 text-xs text-muted-foreground">
                    <p>@{feed.user.username}</p>
                    <div className="size-1 rounded-full bg-muted-foreground" />
                    <p>
                      {formatDistanceToNow(feed.createdAt, { addSuffix: true })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SupscribtionsPage;
