import {RequestHandler} from 'express'
import Video from './Video'


/**
 * Guardar un video en la bd
 * Comprueba que no exista la url del video que queremos salvar 
 */
export const createVideo: RequestHandler = async (req, res) => {
    const videoExist = await Video.findOne({url: req.body.url});
    if (videoExist) {
        return res.status(301).json({message: 'The url already exist.'});
    }
    const video = new Video(req.body);
    const savedVideo = await video.save();
    res.json(savedVideo);
}

/**
 * Obtener videos
 */
export const getVideos: RequestHandler = async (req, res) => {
    try {
        const videos = await Video.find();
        return res.json(videos);
    } catch (error) {
        res.json(error);
    }
}

/**
 * Obtener 1 video pasando el id del video
 */
export const getVideo: RequestHandler = async (req, res) => {
    try {
        const videoFound = await Video.findById(req.params.id);
        return res.json(videoFound);
        
    } catch (error) {
        res.json(error);
    }
}

/**
 * Eliminar video por id
 */
export const deleteVideo: RequestHandler = async (req, res) => {
    try {
        const deleteVideo = await Video.findByIdAndDelete(req.params.id);
        return res.json(deleteVideo)
    } catch (error) {
        res.json(error);
    }
}

/**
 * Actualizar 1 video por id
 */
export const updateVideo: RequestHandler = async (req, res) => {
    try {
        const updateVideo = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(updateVideo);
    } catch (error) {
        res.json(error);
    }
    
}