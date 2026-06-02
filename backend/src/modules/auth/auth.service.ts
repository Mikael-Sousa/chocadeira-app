import authModel from "./auth.model"
import settingsService from "../settings/settings.service";
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

  await settingsService.createSettings(newUser.id)

  const payload = {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
  }

  const token = jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: "7d",
  });

  return {
    status: 201,
    data: {
      token,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      }
    }
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
    name: user.name,
    email: user.email,
  }

  const token = jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: "7d",
  });

  return {
    status: 200,
    data: {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    },
  };
};

const getProfileByUserId = async (userId: number) => {
  if (!userId) {
    return { status: 400, message: "userId is required" };
  }

  const profile = await authModel.findProfileByUserId(userId);

  if (!profile) {
    return { status: 404, message: "Profile not found" };
  }

  return {
    status: 200,
    data: profile,
  };
};

export default {
  register,
  login,
  getProfileByUserId
};