import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-2 lg:gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i}>
          <Skeleton className="h-56 rounded-lg" />
          <div className="mt-4 flex gap-x-2">
            <Skeleton className="w-10 h-10 rounded-full" />

            <div className="flex flex-col space-y-1">
              <Skeleton className="w-32 h-4" />
              <Skeleton className="w-20 h-3" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loading;
