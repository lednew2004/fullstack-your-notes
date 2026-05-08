"use server";

import { GoogleGenAI } from "@google/genai";

const gemini = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const model = "gemini-2.5-flash";

export async function generateDescriptionInTitle(
  title: string,
  isVip: boolean,
) {
  try {
    if (!title) {
      return {
        success: false,
        error: "Título não informado",
      };
    }

    if (!isVip) {
      return {
        success: false,
        error: "Realize um upgrade no seu plano para usar IA",
      };
    }

    const prompt = `
Você é um assistente que escreve anotações de estudo curtas.

Com base no título enviado, gere uma descrição objetiva explicando o assunto como se fosse uma anotação escrita pelo próprio estudante.

REGRAS:
- Responda apenas com a descrição;
- Máximo de 4 frases;
- Linguagem simples, natural e educativa;
- Escreva como alguém estudando o tema;
- Explique resumidamente o que é o assunto;
- O texto deve parecer uma anotação pessoal;
- Não use markdown;
- Não use títulos;
- Não fale diretamente com o usuário;
- Não use frases como:
  "você aprenderá",
  "neste conteúdo",
  "vamos aprender",
  "este tema aborda";
- Não invente assuntos fora do contexto;
- Pode demonstrar pequenas incertezas naturais de estudo para parecer humano.

EXEMPLO DE TOM:
"Next.js é um framework baseado em React que ajuda a criar aplicações web completas. Ele permite trabalhar frontend e backend no mesmo projeto usando sistema de rotas por pastas."

TÍTULO:
${title}
`.trim();

    const response = await gemini.models.generateContent({
      model,
      contents: [
        {
          text: prompt,
        },
      ],
    });

    if (!response.text) {
      return {
        success: false,
        error: "Erro ao gerar descrição",
      };
    }

    return {
      success: true,
      data: response.text,
    };
  } catch (err) {
    console.error(err);

    return {
      success: false,
      error: "Erro interno ao gerar descrição",
    };
  }
}

export async function generateDescription(description: string) {
  if (!description) {
    throw new Error("Descrição não informado");
  }

  const prompt = `
    Você é um assistente educacional.

    Com base na descrição enviada, gere uma nova descrição curta e objetiva sobre o conteúdo estudado.

    REGRAS:
    - Responda apenas com a descrição;
    - Máximo de 4 frases;
    - Linguagem simples e educativa;
    - Não use markdown;
    - Não use títulos;
    - Não invente assuntos fora do contexto;
    - O texto deve parecer uma anotação de estudo.

    DESCRIÇÃO:
    ${description}
  `.trim();

  const response = await gemini.models.generateContent({
    model,
    contents: [
      {
        text: prompt,
      },
    ],
  });

  if (!response.text) {
    throw new Error("Erro ao gerar descrição");
  }

  return response.text;
}
