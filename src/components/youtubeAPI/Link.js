import axios from "axios";

const KEY = "AIzaSyA7GVVu3G8fFSi0ti4A9596fdgs2UPxkHk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
