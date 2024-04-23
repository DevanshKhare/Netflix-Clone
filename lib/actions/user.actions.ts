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