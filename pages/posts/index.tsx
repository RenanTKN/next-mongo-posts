import { NextPage } from "next";

import PostList from "../../components/Posts";
import db from "../../lib/db";
import { getPosts } from "../../lib/db/posts";
import { Post } from "../../models/types";

const Posts: NextPage = ({ posts }: any) => {
  const postList: Post[] = JSON.parse(posts);

  return <PostList list={postList} />;
};

export async function getServerSideProps() {
  await db();
  const posts = JSON.stringify(await getPosts());

  return { props: { posts } };
}

export default Posts;
