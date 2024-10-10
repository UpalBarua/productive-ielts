import User from "./user.model";
import type { TUser } from "./user.type";

export const createNewUser = async (user: TUser) => {
  const createdUser = new User(user);
  await createdUser.save();
  return await User.findOne({ email: user.email }).lean();
};

export const findUserByEmail = async (email: string) =>
  await User.findOne({ email }).lean();

export const findUserById = async (userId: string) =>
  await User.findOne({ _id: userId }).lean();

export const findAllUser = async () => await User.find().lean();
