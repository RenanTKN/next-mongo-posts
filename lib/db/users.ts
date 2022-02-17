import User from "../../models/User";
import { User as UserType, UserCreate } from "../../models/types";

export const getUsers = async (): Promise<UserType[]> =>
  await User.find().populate("posts");

export const getUser = async (id: string): Promise<UserType | null> =>
  await User.findById(id).populate("posts");

export const addUser = async (user: UserCreate) => await User.create(user);
