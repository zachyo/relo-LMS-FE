export function extractVideoId(url : string) {
  // Regular expression to match YouTube video ID
  const regex =
    /(?:youtu\.be\/|youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=))([^"&?\/\s]{11})/;

  // Extract video ID using the regular expression
  const match = url.match(regex);

  // Return the video ID if found, otherwise return null
  return match && match[1] ? match[1] : null;
}

// Example usage
// const youtubeLink = "https://youtu.be/qH3XlwTZ2Kw?si=3hZuPXyLKVCDCAI";
// const videoId = extractVideoId(youtubeLink);

// if (videoId) {
//   console.log("Video ID:", videoId);
// } else {
//   console.log("Invalid YouTube link");
// }
