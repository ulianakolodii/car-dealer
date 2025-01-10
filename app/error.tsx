"use client"; // Error boundaries must be Client Components

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Something went wrong!</CardTitle>
              <CardDescription>
                Attempt to recover by trying to re-render the segment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button type="submit" className="w-full" onClick={() => reset()}>
                Try again
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
