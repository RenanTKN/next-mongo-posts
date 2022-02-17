import { Box, Card, CardContent } from "@mui/material";
import type { NextPage } from "next";

import { User } from "../models/types";
import db from "../lib/db";
import { getUsers } from "../lib/db/users";
import AddPostForm from "../components/AddPostForm";

const PostAdd: NextPage = ({ users }: any) => {
  const userList: User[] = JSON.parse(users);

  return (
    <Box display="flex" justifyContent="center">
      <Card sx={{ width: 380 }}>
        <CardContent>
          <Box display="flex" flexDirection="column" justifyContent="center">
            <AddPostForm users={userList} />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export async function getServerSideProps() {
  await db();
  const users = JSON.stringify(await getUsers());

  return { props: { users } };
}

export default PostAdd;
