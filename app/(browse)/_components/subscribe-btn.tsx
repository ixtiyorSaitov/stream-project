import { Button } from "@/components/ui/button";

interface SubscribeBtnProps {
  isFollowing: boolean;
}
const SubscribeBtn = ({ isFollowing }: SubscribeBtnProps) => {
  return (
    <Button
      variant={isFollowing ? "secondary" : "default"}
      size={"lg"}
      className="rounded-full"
    >
      {isFollowing ? "Unsubscribe" : "Subscribe"}
    </Button>
  );
};

export default SubscribeBtn;
