import { getHomeFeed } from "@/actions/feed.action";
import {
  ChartNoAxesColumnIncreasing,
  Heart,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const RecommendedVideos = async () => {
  const response = await getHomeFeed();
  const feed = response.data?.feed || [];

  return (
    <>
      <h2 className="font-space-grotesk text-2xl">Recommended</h2>
      {feed.map((video) => (
        <Link
          href={`/v/${video.id}`}
          className="flex flex-col space-y-2 mt-4"
          key={video.id}
        >
          <div className="flex gap-x-2">
            <Image
              alt={video.title}
              width={96}
              height={48}
              src={video.thumbnail}
              className="object-cover rounded-md"
            />
            <div className="flex flex-col space-y-0 flex-1 h-full">
              <p className="line-clamp-1 font-space-grotesk font-semibold">
                {video.title}
              </p>
              <div className="flex gap-x-4 pt-1">
                <div className="flex items-center to-muted-foreground gap-x-1">
                  <ChartNoAxesColumnIncreasing className="size-4" />
                  <p className="text-xs">200</p>
                </div>

                <div className="flex items-center to-muted-foreground gap-x-1">
                  <MessageSquare className="size-4" />
                  <p className="text-xs">14</p>
                </div>

                <div className="flex items-center to-muted-foreground gap-x-1">
                  <Heart className="size-4" />
                  <p className="text-xs">88</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default RecommendedVideos;
