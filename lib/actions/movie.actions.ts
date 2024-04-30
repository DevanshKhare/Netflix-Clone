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