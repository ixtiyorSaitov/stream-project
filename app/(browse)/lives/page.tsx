import { getFollowing } from "@/actions/user.action";
import UserAvatar from "@/components/shared/user-avatar";
import Link from "next/link";

const LivesPage = async () => {
  const response = await getFollowing();

  const lives = response?.data?.following || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-2 lg:gap-4">
      
      {lives.map((live) => (
        <Link href={`/s/${live.id}`} key={live.id}>
          <div className="w-full h-56 flex flex-col items-center justify-center bg-secondary rounded-lg">
            <UserAvatar
              username={live.username}
              avatar={live.avatar}
              isLive
              showBadge
              size={"lg"}
            />
            <div className="mt-4">
              <h1 className="font-space-grotesk text-lg text-center">
                <span className="capitalize">{live.username}</span> is live
              </h1>
              <p className="line-clamp-2 text-sm text-center text-muted-foreground leading-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolores dolor exercitationem voluptate minus provident error nam
                ipsa optio quidem! Consectetur vel quos perspiciatis corporis in
                aspernatur porro qui, ex voluptatibus.
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LivesPage;
