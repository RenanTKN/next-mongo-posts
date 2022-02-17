import type { NextApiRequest, NextApiResponse } from "next";

import db from "../../lib/db";
import { addUser, getUsers } from "../../lib/db/users";
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
        const users = await getUsers();
        res.status(200).json(users);
      } catch (error) {
        res.status(400).json(error);
      }
      break;
    case "POST":
      try {
        const user = await addUser(req.body);
        res.status(201).json(user);
      } catch (error) {
        res.status(400).json(error);
      }
      break;
    default:
      res.status(400).json("Method not allowed");
      break;
  }
}
