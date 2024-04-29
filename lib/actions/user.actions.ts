"use server";

import { revalidatePath } from "next/cache";
import User from "../database/models/user.model";
import { connectToDB } from "../database/mongoose";
import bcrypt from "bcrypt"
import Movie from "../database/models/movie.model";

export async function getUserByEmail(email: string): Promise<boolean> {
  try {
    connectToDB();
    const user = await User.findOne({
      email: email,
    });
    if (user) {
      return user;
    }
    return false;
  } catch (error) {
    console.log("user.actions:Error fetching user", error);
  }
  return false;
}

export async function getUserByUsername(username: string): Promise<boolean> {
  try {
    connectToDB();
    const user = await User.findOne({
      username: username,
    });
    if (user) {
      return true;
    }
    return false;
  } catch (error) {
    console.log("user.actions:Error fetching user", error);
  }
  return false;
}

export async function getUserByEmailOrUsername(username: string): Promise<boolean> {
  try {
    connectToDB();
    const user = await User.findOne({
      $or: [{
        email: username
      },
      {
        username: username
      }
    ]
    })
    if(user) return true;
    return false
  } catch (error) {
    console.log("user.actions:Error fetching user", error);
  }
  return false
}

export async function registerUser(email: string, password: string, username: string){
  try {
    connectToDB();
    if(!email || !password){
      throw new Error("Email or password missing")
    }
    const salt = 12;

    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      email: email,
      password: hashedPassword,
      username: username
    })

    if(user){
      return JSON.parse(JSON.stringify(user));
    } else {
      console.log("Error creating User")
    }
  } catch (error) {
    console.log("user.actions:Error creating user", error);
  }
}

export async function login(username: string, password: string){
  try {
    connectToDB();
    if(!username || !password){
      throw new Error("Missing login credentails")
    }
    const user = await User.findOne({
      $or: [
        {
          email: username,
        },
        {
          username: username,
        },
      ],
    });
    const passwordMatch = await bcrypt.compare(password, user.password);
    if(passwordMatch){
      return JSON.parse(JSON.stringify(user));
    } else {
      return false
    }
  } catch (error) {
    
  }
}

export async function addOrRemoveFavourite(email: string, movie: string, exist: boolean){
  try {
    connectToDB();
    let config;
    if(exist) {
      config = {
        $pull: {
          favourites: movie
        }
      }
    } else {
      config = {
        $push: {
          favourites: movie
        }
      }
    }
    await User.findOneAndUpdate({
      email: email
    }, 
      config
    )
    revalidatePath("/")
  } catch (error) {
    console.log("Error while adding or removing to favourites", error)
  }
}

export async function getUserFavouriteMovies(email: string){
  try {
    connectToDB();
    const movies = await User.findOne({email:email}).select("favourites").populate({
        path: "favourites",
        model: Movie,
    })
    return movies.favourites
  } catch (error) {
    console.log("error..........", error)
  }
}