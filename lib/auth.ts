import { User } from "next-auth";
import prisma from "@/lib/prisma";
import { compare } from "bcrypt";

type LoginFn = (email: string, password: string) => Promise<User>;

export const login: LoginFn = async (email, password) => {
  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
    select: {
      id: true,
      email: true,
      name: true,
      password: true,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordValid = await compare(password, user.password);
  
  if (!isPasswordValid) {
    throw new Error("Invalid password");
  }

  return {
    id: user.id,
    email: user.email,
    name: user.name || "",
  };
};