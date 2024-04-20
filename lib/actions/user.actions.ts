"use server";

import User from "../database/modes/user.model";
import { connectToDB } from "../database/mongoose";
import bcrypt from "bcrypt"

export async function getUserByEmail(email: string): Promise<boolean> {
  try {
    connectToDB();
    const user = await User.findOne({
      email: email,
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

export async function registerUser(email: string, password: string){
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

export async function login(email: string, password: string){
  try {
    connectToDB();
    if(!email || !password){
      throw new Error("Missing credentails")
    }
  } catch (error) {
    
  }
}