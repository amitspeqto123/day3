import { User } from "../model/User.js";


export const createUserService = async (data) => {
    const { name, email, age, location } = data;
  if (!email) {
    throw new Error("Email is required");
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new Error("user already exsists");
  }
  const newUser = await User.create({
    name,
    email,
    age,
    location,
  });

  return newUser;
};