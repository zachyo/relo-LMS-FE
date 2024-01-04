import React from "react";
import YouTube, { YouTubeEvent } from "react-youtube";

type PlayerProps = {
    videoId : string
}
const YoutubePlayer = ({videoId} : PlayerProps) => {
  // Set up event handlers
  const onReady = (event : YouTubeEvent) => {
    // Access the player instance
    const player = event.target;

    // For example, you can automatically play the video
    player.playVideo();
  };

  const onError = (error : YouTubeEvent) => {
    console.error("YouTube Player Error:", error);
  };
  return (
    <div className="">
      <YouTube videoId={videoId} onReady={onReady} onError={onError} loading="lazy"/>
    </div>
  );
};

export default YoutubePlayer;
