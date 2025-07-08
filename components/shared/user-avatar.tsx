import { cva, VariantProps } from "class-variance-authority";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn } from "@/lib/utils";

const avatarVariants = cva("", {
  variants: {
    size: {
      default: "size-8",
      sm: "size-6",
      lg: "size-14",
      xl: "size-20",
      "2xl": "size-28",
    },
    variant: {
      default: "rounded-full",
      square: "rounded-md",
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
});

interface UserAvatarProps extends VariantProps<typeof avatarVariants> {
  username: string;
  avatar: string;
  isLive?: boolean;
  showBadge?: boolean;
}

const UserAvatar = ({
  username,
  avatar,
  size,
  variant,
  isLive,
  showBadge,
}: UserAvatarProps) => {
  return (
    <div className={cn("relative")}>
      <Avatar
        className={cn(
          isLive && "ring-2 ring-red-500 border border-primary",
          avatarVariants({ size, variant })
        )}
      >
        <AvatarImage src={avatar} />
        <AvatarFallback className="uppercase">
          {username[0]}
          {username[username.length - 1]}
        </AvatarFallback>
      </Avatar>
      {showBadge && isLive && (
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-red-500 text-center p-0.5 px-1.5 rounded-md uppercase text-[10px] border border-primary font-bold font-space-grotesk tracking-wide">
            Live
          </div>
        </div>
      )}
    </div>
  );
};

export default UserAvatar;
