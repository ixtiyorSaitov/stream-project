import { getComments } from "@/actions/video.action";
import PostComment from "./post-comment";
import UserAvatar from "@/components/shared/user-avatar";

const Comments = async () => {
  const response = await getComments();

  const comments = response.data?.comments || [];
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold font-space-grotesk">Comments</h2>
      <PostComment />

      {comments &&
        comments.map((comment) => (
          <div key={comment.id} className="flex items-start gap-x-4 mt-4">
            <UserAvatar
              avatar={comment.user.avatar}
              username={comment.user.username}
            />
            <div className="flex flex-col">
              <div className="flex gap-x-1 items-end">
                <p className="text-sm">@{comment.user.username}</p>
                <p className="text-sm to-muted-foreground">2 days ago</p>
              </div>
              <p className="mt-2 font-space-grotesk">{comment.content}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Comments;
