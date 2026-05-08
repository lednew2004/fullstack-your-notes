"use server";

import { redirect } from "next/navigation";
import { auth } from "../lib/auth";
import { prisma } from "../lib/prisma";

export async function getProfile() {
  const session = await auth();

  const user = await prisma.user.findUnique({
    where: { id: session },
    omit: {
      password_hash: true,
    },
    include: {
      subjects: true,
    },
  });

  if (!user) {
    redirect("/login");
  }

  return user;
}

export type ProfileData = Awaited<ReturnType<typeof getProfile>>;
