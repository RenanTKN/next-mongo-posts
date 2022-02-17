import Post from "../../models/Post";
import { Post as PostType } from "../../models/types";

export const getPosts = async (): Promise<PostType[]> =>
  await Post.find().populate("author");

export const getPost = async (id: string): Promise<PostType | null> =>
  await Post.findById(id).populate("author");
