"use client";

import { useEffect, useState } from "react";
import { IconLoader2 } from "@tabler/icons-react";

export function ModuleVideo({ currentVideoId }: { currentVideoId: string }) {
  const [videoUrl, setVideoUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVideoStream = async () => {
      const url = `http://localhost:8080/api/module/${currentVideoId}`;
      setIsLoading(true);

      try {
        const response = await fetch(url, {
          headers: {
            Range: "bytes=0-",
          },
        });

        if (response.status === 206) {
          setVideoUrl(url);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching video stream:", error);
      }
    };

    fetchVideoStream();
  }, [currentVideoId]);

  return (
    <div className="h-64 w-full rounded-xl md:h-80">
      {!isLoading ? (
        <video
          className="size-full rounded-xl object-cover object-center"
          crossOrigin="anonymous"
          controls
          autoPlay
          src={videoUrl}
        ></video>
      ) : (
        <div className="mt-4 flex h-full flex-col items-center justify-center gap-4">
          <IconLoader2 className="size-[2.5rem] animate-spin" />
          <span>Please Wait</span>
        </div>
      )}
    </div>
  );
}
