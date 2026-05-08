"use server";

import { prisma } from "../lib/prisma";

interface createSubjectActionRequest {
  title: string;
  description: string;
  userid: string;
}

export async function createSubjectAction({
  title,
  description,
  userid,
}: createSubjectActionRequest) {
  if (!title || !description || !userid)
    return { error: "Dados não preenchidos" };

  try {
    const subject = await prisma.subject.create({
      data: {
        title,
        description,
        userid,
      },
    });

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
