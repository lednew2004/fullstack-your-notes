"use client";

import { createNoteAction } from "@/app/actions/create-note";
import { generateDescription } from "@/app/actions/gemini";
import { compressFile } from "@/app/lib/utils";
import { useRouter } from "next/navigation";
import { startTransition, use, useState } from "react";
import { BiPencil } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import { FiImage } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";

export default function NewNote({
  params,
}: {
  params: Promise<{ noteId: string }>;
}) {
  const { noteId } = use(params);

  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [example, setExample] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [isCreatingProject, setIsCreatingProject] = useState(false);

  async function handleCreateProject() {
    setIsCreatingProject(true);
    const imagesInput = document.getElementById(
      "imageInput",
    ) as HTMLInputElement;

    if (!imagesInput.files) return;

    const compressedFile = await compressFile(Array.from(imagesInput.files));

    const formData = new FormData();
    formData.append("file", compressedFile[0]);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("example", example);
    formData.append("subjectId", noteId);

    await createNoteAction(formData);

    startTransition(() => {
      setIsCreatingProject(false);
      setTitle("");
      setDescription("");
      setExample("");
      setImage(null);
      router.refresh();
    });
  }

  async function handleGenerateDescription() {
    if (!description) return;

    try {
      const response = await generateDescription(description);

      if (response) {
        setDescription(response);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="w-full min-h-screen bg-black px-6 md:px-14 py-10">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-10">
        {/* HEADER */}
        <div className="flex flex-col gap-8">
          {/* BACK */}
          <button
            onClick={() => router.back()}
            className="
              w-fit flex items-center gap-3
              text-zinc-500 hover:text-zinc-200
              transition-all duration-200
              cursor-pointer
            "
          >
            <BsArrowLeft size={18} />

            <span className="text-sm font-medium">Voltar</span>
          </button>

          {/* TITLE */}
          <div className="flex flex-col gap-4">
            <div className="w-fit px-4 py-2 rounded-full border border-zinc-800 bg-zinc-950">
              <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Nova anotação
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">
                O que você aprendeu hoje?
              </h1>

              <p className="max-w-2xl text-zinc-500 leading-relaxed text-lg">
                Organize seus estudos e utilize IA para criar explicações mais
                claras, exemplos melhores e anotações mais completas.
              </p>
            </div>
          </div>
        </div>

        {/* MAIN */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-8">
          {/* FORM */}
          <div
            className="
              rounded-4xl
              border border-zinc-900
              bg-zinc-950
              p-8 md:p-10
              flex flex-col gap-8
            "
          >
            {/* TITLE INPUT */}
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium text-zinc-400">
                Título da anotação
              </label>

              <input
                type="text"
                placeholder="Ex: Introdução ao React Hooks"
                className="
                  h-14 rounded-2xl
                  border border-zinc-800
                  bg-black px-5
                  text-zinc-100
                  placeholder:text-zinc-600
                  outline-none
                  transition-all duration-200
                  focus:border-zinc-700
                "
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* DESCRIPTION */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-zinc-400">
                  Explicação
                </label>

                <button
                  onClick={handleGenerateDescription}
                  className="
                    flex items-center gap-2
                    px-4 h-10 rounded-xl
                    border border-zinc-800
                    bg-black hover:bg-zinc-900
                    text-zinc-300 text-sm
                    transition-all duration-200
                    cursor-pointer
                  "
                >
                  <HiOutlineSparkles size={18} />

                  <span>Utilizar IA</span>
                </button>
              </div>

              <textarea
                placeholder="Explique com suas palavras o que aprendeu na aula..."
                className="
                  min-h-55
                  resize-none rounded-3xl
                  border border-zinc-800
                  bg-black p-5
                  text-zinc-100
                  placeholder:text-zinc-600
                  outline-none
                  transition-all duration-200
                  focus:border-zinc-700
                "
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {/* EXAMPLE */}
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium text-zinc-400">
                Exemplo prático
              </label>

              <textarea
                placeholder="Forneça um exemplo prático para melhorar o entendimento..."
                className="
                  min-h-45
                  resize-none rounded-3xl
                  border border-zinc-800
                  bg-black p-5
                  text-zinc-100
                  placeholder:text-zinc-600
                  outline-none
                  transition-all duration-200
                  focus:border-zinc-700
                "
                value={example}
                onChange={(e) => setExample(e.target.value)}
              />
            </div>

            {/* IMAGE */}
            <div className="flex flex-col gap-4">
              <label className="text-sm font-medium text-zinc-400">
                Imagem da aula
              </label>

              <div
                className="
      group w-full min-h-55
      rounded-[28px]
      border border-dashed border-zinc-800
      bg-black hover:bg-zinc-900/40
      transition-all duration-300
      flex flex-col items-center justify-center
      gap-5 cursor-pointer
      relative overflow-hidden
    "
                onClick={() => document.getElementById("imageInput")?.click()}
              >
                <input
                  id="imageInput"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;

                    const imageUrl = URL.createObjectURL(file);
                    setImage(imageUrl);
                  }}
                />

                {image ? (
                  <img
                    src={image}
                    alt="Project Image"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                ) : (
                  <>
                    <div className="w-20 h-20 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center">
                      <FiImage size={34} className="text-zinc-500" />
                    </div>

                    <span className="text-zinc-300 font-medium">
                      Clique para enviar uma imagem
                    </span>

                    <span className="text-sm text-zinc-600">
                      PNG, JPG ou JPEG
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* FOOTER */}
            <div className="pt-6 border-t border-zinc-900 flex items-center justify-between">
              <span className="text-sm text-zinc-600">
                Suas anotações ficam salvas automaticamente.
              </span>

              <button
                onClick={handleCreateProject}
                className="h-14 px-7 rounded-2xl bg-zinc-100 hover:bg-zinc-200 text-black font-semibold flex items-center gap-2 transition-all duration-200 cursor-pointer"
              >
                <span>Criar anotação</span>
                <BiPencil size={20} />
              </button>
            </div>
          </div>

          {/* SIDE CARD */}
          <div className="h-fit rounded-4xl border border-zinc-900 bg-zinc-950 p-8 flex flex-col gap-8">
            <HiOutlineSparkles size={30} className="text-zinc-300" />

            <h2 className="text-3xl font-bold text-zinc-100">
              Utilize IA para melhorar suas anotações
            </h2>

            <p className="text-zinc-500 leading-relaxed">
              Gere explicações mais claras e exemplos automáticos com IA.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
