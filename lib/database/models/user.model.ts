import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    favourites: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Movie"
        }
    ]
})

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User