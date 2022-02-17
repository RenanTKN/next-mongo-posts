import mongoose, { Schema } from "mongoose";

import { Post } from "./types";

const postSchema = new Schema<Post>({
  author: { type: Schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true, trim: true, maxLength: 40 },
  content: { type: String, required: true, maxLength: 200 },
});

const postModel: mongoose.Model<Post, {}, {}, {}> =
  mongoose.models.Post || mongoose.model("Post", postSchema);

export default postModel;
