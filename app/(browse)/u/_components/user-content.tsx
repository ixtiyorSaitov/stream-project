import { getHomeFeed } from "@/actions/feed.action";
import UserAvatar from "@/components/shared/user-avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { formatDistanceToNow } from "date-fns";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserContent = async () => {
  const response = await getHomeFeed();

  const feeds = response?.data?.feed || [];

  return (
    <div className="mb-8">
      <div className="flex gap-x-4 mt-6 w-2/3 items-start">
        <div className="w-72 h-44 rounded-xl relative">
          <Image
            src={
              "https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg"
            }
            alt="ixti2101"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        <div className="flex flex-1 space-y-1 flex-col">
          <h1 className="text-2xl font-space-grotesk font-bold">
            {"Ixtiyor's stream"}
          </h1>
          <p className="line-clamp-3 text-muted-foreground leading-5 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
            laudantium. At tempore quasi praesentium excepturi suscipit odio
            temporibus dolor. Non, vero obcaecati aperiam ratione asperiores
            repellendus! Quae delectus dignissimos quasi.
          </p>
          <div className="flex items-center gap-x-1">
            {/* <>
              <Settings2 className="size-4" />
              <span>User has not configured streaming yet</span>
            </> */}
            <>
              <Calendar className="size-4" />
              <span>Streamed 2 days ago</span>
            </>
          </div>
          <Button
            asChild
            className="w-fit rounded-full"
            variant={"outline"}
            size={"lg"}
          >
            <Link href={"/s/ixti2101"}>Watch stream</Link>
          </Button>
        </div>
      </div>
      <Separator className="my-6" />
      <h1 className="text-2xl font-space-grotesk font-bold">Videos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-2 lg:gap-4">
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
                <div className="flex flex-col">
                  <h2 className="line-clamp-2 break-words text-sm leading">
                    {feed.title}
                  </h2>

                  <div className="flex items-center gap-x-2 text-xs text-muted-foreground">
                    <p>24 views</p>
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

export default UserContent;
