"use server";

import { prisma } from "../lib/prisma";

interface GetSubjectId {
  id: string;
}

type Note = {
  id: string;
  title: string;
  description: string;
  codExample: string;
  urlExample: string;
  subjectid: string;
  created_At: Date;
};

export type Subject = {
  id: string;
  title: string;
  description: string;
  userid: string;
  created_At: Date;
  notes: Note[];
};

export async function getSubjectId({ id }: GetSubjectId) {
  if (!id) {
    throw new Error("Dados não preenchidos");
  }

  const subject = await prisma.subject.findUnique({
    where: {
      id,
    },
    include: {
      notes: true,
    },
  });

  return {
    subject,
  };
}
