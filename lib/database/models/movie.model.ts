import mongoose from "mongoose";

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