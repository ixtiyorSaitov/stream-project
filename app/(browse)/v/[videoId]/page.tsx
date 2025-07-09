import Description from "../_components/description";
import UserInformation from "../_components/user-information";
import VideoActions from "../_components/video-actions";
import Comments from "../_components/comments";
import RecommendedVideos from "../_components/recommended-vidoes";

interface VideoPageProps {
  params: Promise<{ videoId: string }>;
}

const VideoPage = async ({ params }: VideoPageProps) => {
  const { videoId } = await params;
  console.log(videoId);

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

        <Description />

        <Comments />
      </div>
      <div className="col-span-1">
        <RecommendedVideos />
      </div>
    </div>
  );
};

export default VideoPage;
