import React from "react";

const VideoItem = (props) => {
  return (
    <div className="cursor-pointer ">
      {props.details.map((item, index) => {
        return (
          <div
            key={index}
            className="flex my-5"
            onClick={() => props.onVideoSelect(item)}
          >
            {" "}
            <img
              src={item.snippet.thumbnails.high.url}
              className="h-44 w-30"
              alt="sorry"
            />
            <h3 className="px-5 py-2"> {item.snippet.title} </h3>{" "}
          </div>
        );
      })}{" "}
    </div>
  );
};

export default VideoItem;
