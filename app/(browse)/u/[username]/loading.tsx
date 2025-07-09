import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="w-full">
      <Skeleton className="w-full h-72 rounded-xl" />
      <div className="mt-4 flex items-start space-x-4">
        <Skeleton className="size-28 rounded-full" />
        <div className="flex flex-col space-y-2">
          <Skeleton className="w-full h-4" />
          <div className="flex items-center gap-x-2 w-full">
            <Skeleton className="w-28 h-4" />
            <Skeleton className="size-1 rounded-full bg-muted-foreground" />
            <Skeleton className="w-28 h-4" />
            <Skeleton className="size-1 rounded-full bg-muted-foreground" />
            <Skeleton className="w-28 h-4" />
          </div>
          <div>
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4 mt-1" />
          </div>
          <Skeleton className="w-1/3 h-10 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
