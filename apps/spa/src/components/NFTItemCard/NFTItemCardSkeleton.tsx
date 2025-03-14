import type React from "react";

import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@workspace/ui/components/card";
import { Skeleton } from "@workspace/ui/components/skeleton";

export const NFTItemCardSkeleton: React.FC<Omit<React.ComponentPropsWithoutRef<typeof Card>, "children">> = (props) => (
  <Card {...props}>
    <CardHeader className="p-4">
      <Skeleton className="w-2/3 h-6" />
      <CardDescription className="flex flex-col gap-2">
        <Skeleton className="w-1/2 h-5" />
        <div className="flex gap-2">
          <Skeleton className="w-1/3 h-5" />
          <Skeleton className="w-1/3 h-5" />
        </div>
      </CardDescription>
    </CardHeader>
    <CardContent className="p-0">
      <Skeleton className="w-full h-96 rounded-none" />
    </CardContent>
    <CardFooter className="flex flex-col items-baseline gap-3 p-4">
      <Skeleton className="w-full h-4" />
      <Skeleton className="w-3/4 h-4" />
    </CardFooter>
  </Card>
);
