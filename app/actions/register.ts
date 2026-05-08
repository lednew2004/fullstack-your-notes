"use server";

import { hash } from "bcryptjs";
import { redirect } from "next/navigation";
import { prisma } from "../lib/prisma";

interface RegisterActionRequest {
  name: string;
  email: string;
  password: string;
}

export async function registerAction({
  name,
  email,
  password,
}: RegisterActionRequest) {
  if (!name || !email || !password) return { error: "Dados não preenchidos" };

  try {
    const doesEmailUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (doesEmailUser) {
      return { error: "User already exist" };
    }

    const password_hash = await hash(password, 6);

    await prisma.user.create({
      data: {
        name,
        email,
        password_hash,
      },
    });
  } catch (error) {
    console.error(error);
    return error;
  }

  redirect("/login");
}
