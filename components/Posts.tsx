import React from "react";

import { Grid } from "@mui/material";

import { Post } from "../models/types";
import Link from "./Link";
import PostCard from "./PostCard";

interface PostsProps {
  list: Post[];
}

export default function Posts({ list }: PostsProps) {
  return (
    <Grid container spacing={2}>
      {list.map((post, index) => (
        <Grid key={index} item xs={12}>
          <Link href={`posts/${post._id}`}>
            <PostCard post={post} />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
