import mongoose, { Schema } from "mongoose";

import { User } from "./types";

const userSchema = new mongoose.Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
});

const User: mongoose.Model<User, {}, {}, {}> =
  mongoose.models.User || mongoose.model("User", userSchema);

export default User;
