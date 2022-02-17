import type { NextApiRequest, NextApiResponse } from "next";

import db from "../../lib/db";
import { getPosts } from "../../lib/db/posts";
import Post from "../../models/Post";
import User from "../../models/User";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await db();

  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const posts = await getPosts();
        res.status(200).json(posts);
      } catch (error) {
        res.status(400).json(error);
      }
      break;
    case "POST":
      try {
        const post = await Post.create(req.body);
        const { _id } = post;
        await User.findByIdAndUpdate(post.author, { $push: { posts: _id } });
        res.status(201).json(post);
      } catch (error) {
        res.status(400).json(error);
      }
      break;
    default:
      res.status(400).json("Method not allowed");
      break;
  }
}
