import { Schema } from "mongoose";

export interface Post {
  _id?: string;
  author: Schema.Types.ObjectId;
  title: string;
  content: string;
}

export interface User {
  _id?: string;
  name: string;
  email: string;
  posts: Schema.Types.ObjectId[];
}

export interface UserCreate {
  email: string;
  name: string;
}

export interface CreatePost {
  author: Schema.Types.ObjectId | "";
  title: string;
  content: string;
}
