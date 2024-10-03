"use client";
import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const YoutubePage = () => {
  //   const allId = [
  //     {
  //       id: 1,
  //       youtubeId: "_pb00RNMGX4,",
  //     },
  //     {
  //       id: 1,
  //       youtubeId: "_pb00RNMGX4,",
  //     },
  //     {
  //       id: 1,
  //       youtubeId: "_pb00RNMGX4,",
  //     },
  //   ];
  return (
    <section className="ml-8 mr-8 mt-24">
      <div className="gird-cols-1 grid gap-4 lg:grid-cols-3">
        <LiteYouTubeEmbed
          id="_pb00RNMGX4" // Replace with actual YouTube video ID
          title="Example Video Title"
        />
        <LiteYouTubeEmbed
          id="6xwLrk-UY5k" // Replace with actual YouTube video ID
          title="Example Video Title"
        />
        <LiteYouTubeEmbed
          id="AZ69GA3pJYA" // Replace with actual YouTube video ID
          title="Example Video Title"
        />
      </div>
      <div className="gird-cols-1 mt-14 grid gap-4 lg:grid-cols-3">
        <LiteYouTubeEmbed
          id="h2-EwxY5GVo" // Replace with actual YouTube video ID
          title="Example Video Title"
        />
        <LiteYouTubeEmbed
          id="PBa4jIdGGRw" // Replace with actual YouTube video ID
          title="Example Video Title"
        />
        <LiteYouTubeEmbed
          id="WZiYlv5cjr0" // Replace with actual YouTube video ID
          title="Example Video Title"
        />
      </div>
    </section>
  );
};

export default YoutubePage;
