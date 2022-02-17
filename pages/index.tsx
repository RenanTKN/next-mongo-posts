import type { NextPage } from "next";
import { Grid } from "@mui/material";

import Posts from "../components/Posts";
import UserTable from "../components/UserTable";
import { getUsers } from "../lib/db/users";
import { getPosts } from "../lib/db/posts";
import { Post, User } from "../models/types";
import db from "../lib/db";

const Home: NextPage = ({ users, posts }: any) => {
  const userList: User[] = JSON.parse(users);
  const postList: Post[] = JSON.parse(posts);

  return (
    <Grid container spacing={1}>
      <Grid item sm={12} md={6}>
        <UserTable list={userList} />
      </Grid>
      <Grid item sm={12} md={6}>
        <Posts list={postList} />
      </Grid>
    </Grid>
  );
};

export async function getServerSideProps() {
  await db();
  const users = JSON.stringify(await getUsers());
  const posts = JSON.stringify(await getPosts());

  return { props: { users, posts } };
}

export default Home;
