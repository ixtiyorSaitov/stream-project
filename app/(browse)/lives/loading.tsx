import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-2 lg:gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i}>
          <div className="w-full h-56 flex flex-col items-center justify-center bg-secondary rounded-lg">
            <Skeleton className="size-14 rounded-full bg-gray-600/50" />
            <div className="flex justify-center flex-col items-center">
              <Skeleton className="w-20 h-4 mt-4 bg-gray-600/50" />
              <Skeleton className="w-36 h-4 mt-2 bg-gray-600/50" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loading;
