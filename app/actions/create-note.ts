"use server";

import { auth } from "../lib/auth";
import { prisma } from "../lib/prisma";
import { uploadImage } from "../lib/upload-image";

export async function createNoteAction(formData: FormData) {
  try {
    const userId = await auth();

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        isVip: true,
      },
    });

    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    // // 1. contar projetos do usuário
    // const projectsCount = await prisma.projects.count({
    //   where: { userId },
    // });

    // // 2. regra de limite
    // if (!user.isVip && projectsCount >= 3) {
    //   throw new Error("Limite de projetos atingido no plano trial");
    // }

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const example = formData.get("example") as string;
    const file = formData.get("file") as File;
    const subjectid = formData.get("subjectId") as string;

    console.log({
      title,
      description,
      example,
      subjectid,
    });

    if (file && file.size > 0) {
      const result = await uploadImage(file);

      await prisma.notes.create({
        data: {
          title,
          description,
          subjectid,
          codExample: example,
          urlExample: result.secure_url,
        },
      });
    }

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
