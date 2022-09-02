import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Link from "../youtubeAPI/Link";
import VideoItem from "./VideoItem";

const Index = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideo = (item) => {
    console.log("from index file", item);
    setSelectedVideo(item);
  };

  const handleTerm = (data) => {
    console.log(data);
    Link.get("/search", {
      params: {
        q: data,
      },
    })
      .then((response) => {
        console.log(response.data.items);
        setVideos(response.data.items);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="">
      <SearchBar onSearch={handleTerm} />

      <div className=" flex  h-full ">
        {selectedVideo && (
          <div className=" w-2/3 py-5 ">
            <div className="h-4/5 ">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
                title="Yooutube Videos"
                width="100%"
                height="100%"
                className="py-6 px-6 rounded-sm"
              />
            </div>

            <div>
              <h3 className=" font-semibold text-xl pl-5  ">
                {" "}
                {selectedVideo.snippet.title}{" "}
              </h3>
              <p className="pl-5 pt-3 h-fit ">
                {selectedVideo.snippet.description}
              </p>
            </div>
          </div>
        )}

        <div className="videoList   ">
          {" "}
          <VideoItem onVideoSelect={handleVideo} details={videos} />{" "}
        </div>
      </div>
    </div>
  );
};

export default Index;
