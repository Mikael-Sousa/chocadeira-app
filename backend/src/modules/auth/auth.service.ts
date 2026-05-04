import authModel from "./auth.model"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import "dotenv/config";

const register = async (
  name: string,
  email: string,
  password: string
) => {
  const existingUser = await authModel.findByEmail(email);

  if (existingUser) {
    return { status: 409, message: "Email already registered" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await authModel.registerNewUser(
    name,
    email,
    hashedPassword,
  );

  return {
    status: 201,
    data: newUser,
  };
};

const login = async (email: string, password: string) => {
  const user = await authModel.findByEmail(email);

  if (!user) {
    return { status: 401, message: "Email or password invalid" };
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return { status: 401, message: "Email or password invalid" };
  }

  const payload = {
      id: user.id,
      email: user.email,
    }

  const token = jwt.sign(payload, process.env.JWT_SECRET!);

  return {
    status: 200,
    data: {
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    },
  };
};


export default {
  register,
  login
};