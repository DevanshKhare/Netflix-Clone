"use server";

import User from "../database/modes/user.model";
import { connectToDB } from "../database/mongoose";

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
    const user = await User.create({
      email: email,
      password: password,
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
