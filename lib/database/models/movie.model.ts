import mongoose from "mongoose";

export interface movieInterface {
    _id: string
    title: string;
    description: string;
    videoUrl: string;
    thumbnailUrl: string;
    genre: string;
    duration: string;
}

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    videoUrl: {
        type: String,
        required: true,
    },
    thumbnailUrl: {
        type: String,
    },
    genre: {
        type: String,
    },
    duration: {
        type: String
    }
})

const Movie = mongoose.models.Movie || mongoose.model("Movie", movieSchema);

export default Movie

movieSchema