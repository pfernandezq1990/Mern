import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { Video } from "./Video";
import * as videoService from "./VideosService";
import { toast } from "react-toastify";
import { useHistory, useParams } from "react-router-dom";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Params {
  id: string;
}

const VideoForm = () => {
  const history = useHistory();
  const params = useParams<Params>();

  const initialState = {
    title: "",
    description: "",
    url: "",
  };
  const [video, setVideo] = useState<Video>(initialState);

  const handleInputChange = (e: InputChange) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!params.id) {
      await videoService.createVideo(video);
      toast.success("Video creado!!");
      setVideo(initialState);
    } else {
      await videoService.updateVideo(params.id, video);
      toast.success("Video actualizado");
    }

    history.push("/");
  };

  const getVideo = async (id: string) => {
    const res = await videoService.getVideo(id);
    const { title, description, url } = res.data;
    setVideo({ title, description, url });
  };
  useEffect(() => {
    if (params.id) {
      getVideo(params.id);
    }
  }, []);

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3 className="mb-3">Nuevo Video</h3>

            <form onSubmit={handleSubmit}>
              <label className="form-label">Titulo</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  name="title"
                  placeholder="Introdusca un titulo"
                  className="form-control"
                  onChange={handleInputChange}
                  value={video.title}
                  autoFocus
                />
              </div>

              <div className="form-group mb-3">
                <label className="form-label">url</label>
                <input
                  type="text"
                  name="url"
                  placeholder="https://algunsitio.com"
                  className="form-control"
                  onChange={handleInputChange}
                  value={video.url}
                />
              </div>

              <div className="form-group mb-3">
                <label className="form-label">Descripcion</label>
                <textarea
                  name="description"
                  rows={3}
                  className="form-control"
                  placeholder="Descripcion del video"
                  onChange={handleInputChange}
                  value={video.description}
                ></textarea>
              </div>
              {params.id ? (
                <button className="btn btn-info">Modificar video</button>
              ) : (
                <button className="btn btn-primary">Crear video</button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoForm;
