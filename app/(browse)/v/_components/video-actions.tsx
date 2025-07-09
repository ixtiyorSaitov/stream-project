import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThumbsDown, ThumbsUp } from "lucide-react";

interface VideoActionsProps {
  reaction: "LIKE" | "DISLIKE" | null;
}

const VideoActions = ({ reaction }: VideoActionsProps) => {
  return (
    <div className="flex items-center gap-x-2">
      <div className="rounded-full flex items-center">
        <Button
          className="rounded-full rounded-r-none border-r hover:bg-secondary/20"
          variant={"secondary"}
          size={"sm"}
        >
          <ThumbsUp className={cn(reaction === "LIKE" && "fill-foreground")} />
          <span>Like</span>
        </Button>
        <Button
          className="rounded-full rounded-l-none hover:bg-secondary/20"
          variant={"secondary"}
          size={"sm"}
        >
          <ThumbsDown
            className={cn(reaction === "DISLIKE" && "fill-foreground")}
          />
        </Button>
      </div>
    </div>
  );
};

export default VideoActions;
