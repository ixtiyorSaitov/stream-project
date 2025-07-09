import { Separator } from "@/components/ui/separator";
import Description from "../_components/description";
import UserInformation from "../_components/user-information";
import VideoActions from "../_components/video-actions";
import Comments from "../_components/comments";

interface VideoPageProps {
  params: Promise<{ videoId: string }>;
}

const VideoPage = async ({ params }: VideoPageProps) => {
  const { videoId } = await params;
  return (
    <div className="grid grid-cols-4 gap-x-4">
      <div className="col-span-3">
        <div className="aspect-video rounded-md bg-accent" />
        <h1 className="text-2xl font-bold font-space-grotesk">
          How to build website with Next.js and Tailwind css - Full Course
        </h1>

        <div className="flex items-center justify-between mt-3">
          <UserInformation />
          <VideoActions reaction={"DISLIKE"} />
        </div>

        <div className="bg-secondary p-4 rounded-md my-4">
          <div className="flex items-center gap-x-2 text-sm">
            <p>1,234 views</p>
            <div className="size-1 rounded-full bg-primary"></div>
            <p>1 month ago</p>
          </div>
          <h2 className="mt-2 font-space-grotesk text-xl font-bold">
            Description
          </h2>
          <Description />

          <Separator className="my-2" />

          <Comments />
        </div>
      </div>
      <div className="col-span-1"></div>
    </div>
  );
};

export default VideoPage;
