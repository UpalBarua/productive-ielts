"use client";

import { useEffect, useState } from "react";

export function ModuleVideo() {
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    const fetchVideoStream = async () => {
      const url =
        "http://localhost:8080/module/1PlSX5mrApW-DeYMlh4uW3GYXzg460yNZ";

      try {
        const response = await fetch(url, {
          headers: {
            Range: "bytes=0-",
          },
        });

        if (response.status === 206) {
          setVideoUrl(url);
        }
      } catch (error) {
        console.error("Error fetching video stream:", error);
      }
    };

    fetchVideoStream();
  }, []);

  return (
    <div className="h-64 w-full rounded-xl md:h-80">
      {videoUrl ? (
        <video
          className="size-full object-cover object-center"
          crossOrigin="anonymous"
          controls
          autoPlay
          src={"http://localhost:8080/module/1PlSX5mrApW-DeYMlh4uW3GYXzg460yNZ"}
        ></video>
      ) : (
        "loading..."
      )}
    </div>
  );
}
