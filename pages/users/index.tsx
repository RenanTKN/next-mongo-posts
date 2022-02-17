import { NextPage } from "next";

import UserTable from "../../components/UserTable";
import db from "../../lib/db";
import { getUsers } from "../../lib/db/users";
import { User } from "../../models/types";

const Posts: NextPage = ({ users }: any) => {
  const postList: User[] = JSON.parse(users);

  return <UserTable list={postList} />;
};

export async function getServerSideProps() {
  await db();
  const users = JSON.stringify(await getUsers());

  return { props: { users } };
}

export default Posts;
