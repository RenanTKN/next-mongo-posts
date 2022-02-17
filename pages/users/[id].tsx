import { NextPage } from "next";

import UserCard from "../../components/UserCard";
import db from "../../lib/db";
import { getUser } from "../../lib/db/users";
import { User as UserType } from "../../models/types";

const User: NextPage = ({ user }: any) => {
  const currentUser: UserType = JSON.parse(user);

  return <UserCard user={currentUser} />;
};

export async function getServerSideProps(context: any) {
  await db();
  const { id } = context.query;

  const user = JSON.stringify(await getUser(id));

  return { props: { user } };
}

export default User;
