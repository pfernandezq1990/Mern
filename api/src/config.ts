import dotenv from 'dotenv';
dotenv.config();

export default {
    MONGO_DATABASE: process.env.MONGO_DATABASE || 'videosdb',
    MONGO_USER: process.env.MONGO_USER || 'admin',
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || 'secret',
    MONGO_HOST: process.env.MONGO_HOST || 'localhost',
    SERVER_PORT: process.env.SERVER_PORT || 3000,
};