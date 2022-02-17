import { Typography } from "@mui/material";
import { NextPage } from "next";

import Link from "../../components/Link";
import db from "../../lib/db";
import { getPost } from "../../lib/db/posts";
import { Post as PostType, User } from "../../models/types";

const Posts: NextPage = ({ post }: any) => {
  const currentPost: PostType = JSON.parse(post);
  const author = currentPost.author as unknown as User;

  return (
    <>
      <Typography variant="h3">{currentPost.title}</Typography>
      <Typography variant="body2" color="text.secondary">
        por <Link href={`/users/${author._id}`}>{author.name}</Link>
      </Typography>
      <Typography variant="body1" sx={{ mt: 3 }}>
        {currentPost.content}
      </Typography>
    </>
  );
};

export async function getServerSideProps(context: any) {
  await db();
  const { id } = context.query;

  const post = JSON.stringify(await getPost(id));

  return { props: { post } };
}

export default Posts;
