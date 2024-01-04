"use client";

import YoutubePlayer from "../components/YTplayer";
import { extractVideoId } from "../helpers/helpers";


const YoutubePage = () => {
  const youtubeLink = "http://www.youtube.com/embed/gS7WczOL5YQ/";
  const videoId = extractVideoId(youtubeLink);

  
  return (
    <div className="flex justify-center items-center h-[100vh]">
      {videoId ? (
        <YoutubePlayer videoId={videoId} />
      ) : (
        <>Invalid YouTube Link</>
      )}
    </div>
  );
};

export default YoutubePage;
// https://youtu.be/_27Q-xhxgyc?si=JY2jVUFyDOXhJVWk
