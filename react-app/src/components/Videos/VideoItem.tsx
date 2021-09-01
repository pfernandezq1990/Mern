import React from "react";
import { Video } from "./Video";
import { useHistory } from "react-router-dom";
import ReactPlayer from "react-player";
import * as videoService from "./VideosService";

import "./VideoItem.css";
interface Props {
  video: Video;
  loadVideos: () => void;
}
const VideoItem = ({ video, loadVideos }: Props) => {
  const history = useHistory();

  const handleDelete = async (id: string) => {
    await videoService.deleteVideo(id);
    loadVideos();
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card card-body video-card" style={{ cursor: "pointer" }}>
        <div className="d-flex justify-content-between">
          <h1 onClick={() => history.push(`/update/${video._id}`)}>
            {video.title}
          </h1>
          <span
            className="text-danger"
            onClick={() => video._id && handleDelete(video._id)}
          >
            X
          </span>
        </div>
        <p>{video.description}</p>

        <div className="ratio ratio-1x1">
          <ReactPlayer url={video.url} width="100%" height="100%" />
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
