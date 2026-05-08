"use server";

import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

import { compare } from "bcryptjs";
import { redirect } from "next/navigation";
import { prisma } from "../lib/prisma";

interface LoginActionRequest {
  email: string;
  password: string;
}

export async function loginAction({ email, password }: LoginActionRequest) {
  if (!email || !password) return { error: "Dados não preenchidos" };

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return { error: "E-mail ou senha errados!" };
  }

  const doesPasswordHash = await compare(password, user.password_hash);

  if (!doesPasswordHash) {
    return { error: "E-mail ou senha errados!" };
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
    expiresIn: "7d",
  });

  const cookieStore = await cookies();

  cookieStore.set("token", token, {
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  redirect("/profile");
}
