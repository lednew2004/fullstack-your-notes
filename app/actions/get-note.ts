"use server";

import { prisma } from "../lib/prisma";

interface GetNoteActionRequest {
  id: string;
}

export interface Note {
  id: string;
  title: string;
  description: string;
  codExample: string;
  urlExample: string;
  subjectid: string;
  created_At: Date;
}

interface GetNoteActionResponse {
  note?: Note | null;
  error?: string;
}

export async function getNoteAction({
  id,
}: GetNoteActionRequest): Promise<GetNoteActionResponse> {
  if (!id) {
    return {
      error: "Dados não preenchidos",
    };
  }

  try {
    const note = await prisma.notes.findUnique({
      where: {
        id,
      },
    });

    return {
      note,
    };
  } catch (err) {
    console.error(err);

    return {
      error: "Erro ao buscar anotação",
    };
  }
}
