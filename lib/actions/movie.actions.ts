"use server"
import Movie from "../database/models/movie.model";
import { connectToDB } from "../database/mongoose";

export async function getMovies(){
    try {
        connectToDB();
        const movies = await Movie.find({});
        return movies;
    } catch (error) {
        console.log("Error fetching movies")
    }
}

export async function getMovieById(id:string){
    try {
        connectToDB();
        const movie = await Movie.findById(id);
        return movie;
    } catch (error) {
        console.log("Error fetching movie details")
    }
}

export async function searchMovie(searchString: string){
    try {
        connectToDB();
        const movies = await Movie.find({
            $or: [
                {title: {$regex: searchString, $options: 'i'}},
                {description: {$regex: searchString, $options: "i"}}
            ]
        })
        return movies;
    } catch (error) {
        console.log("Error searching movie")
    }
}