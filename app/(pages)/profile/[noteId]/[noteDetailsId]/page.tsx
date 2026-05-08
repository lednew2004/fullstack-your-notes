"use client";

import { getNoteAction, Note } from "@/app/actions/get-note";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { FiFileText, FiImage } from "react-icons/fi";
import { HiOutlineCodeBracket } from "react-icons/hi2";

export default function NoteDetails({
  params,
}: {
  params: Promise<{ noteDetailsId: string }>;
}) {
  const { noteDetailsId } = use(params);
  const [note, setNote] = useState<Note | null>(null);
  const [isImageOpen, setIsImageOpen] = useState(false);

  useEffect(() => {
    async function loadSubject() {
      const response = await getNoteAction({
        id: noteDetailsId,
      });

      if (response.note) {
        setNote(response.note);
      }
    }

    loadSubject();
  }, [noteDetailsId]);

  const router = useRouter();
  return (
    <div className="w-full min-h-screen bg-black px-6 md:px-14 py-10">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-10">
        {/* HEADER */}
        <div className="flex flex-col gap-8">
          {/* BACK BUTTON */}
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
          <div
            className="
              rounded-4xl
              border border-zinc-900
              bg-zinc-950
              p-8 md:p-10
              flex flex-col gap-6
            "
          >
            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap items-center gap-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">
                  {note?.title}
                </h1>

                <div
                  className="
                    px-4 py-2 rounded-full
                    border border-zinc-800
                    bg-black
                  "
                >
                  <span className="text-sm text-zinc-400">
                    {note?.created_At
                      ? new Date(note.created_At).toLocaleDateString("pt-BR", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        })
                      : ""}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* CONTENT CARD */}
          <div
            className="
              rounded-4xl
              border border-zinc-900
              bg-zinc-950
              p-8
              flex flex-col gap-6
            "
          >
            <div className="flex items-center gap-4">
              <div
                className="
                  w-14 h-14 rounded-2xl
                  border border-zinc-800
                  bg-black
                  flex items-center justify-center
                "
              >
                <FiFileText size={24} className="text-zinc-300" />
              </div>

              <div className="flex flex-col">
                <h2 className="text-2xl font-semibold text-zinc-100">
                  Conteúdo apresentado
                </h2>

                <span className="text-zinc-500 text-sm">
                  Explicação da aula
                </span>
              </div>
            </div>

            <p className="text-zinc-400 leading-relaxed text-[15px]">
              {note?.description}
            </p>
          </div>

          {/* CODE CARD */}
          <div
            className="
              rounded-4xl
              border border-zinc-900
              bg-zinc-950
              p-8
              flex flex-col gap-6
            "
          >
            <div className="flex items-center gap-4">
              <div
                className="
                  w-14 h-14 rounded-2xl
                  border border-zinc-800
                  bg-black
                  flex items-center justify-center
                "
              >
                <HiOutlineCodeBracket size={24} className="text-zinc-300" />
              </div>

              <div className="flex flex-col">
                <h2 className="text-2xl font-semibold text-zinc-100">
                  Exemplo escrito
                </h2>

                <span className="text-zinc-500 text-sm">Código utilizado</span>
              </div>
            </div>

            <div
              className="
                rounded-2xl
                border border-zinc-800
                bg-black
                p-5
                overflow-x-auto
              "
            >
              <code className="text-zinc-300 text-sm">{note?.codExample}</code>
            </div>
          </div>

          {/* IMAGE CARD */}
          <div
            className="
              rounded-4xl
              border border-zinc-900
              bg-zinc-950
              overflow-hidden
              flex flex-col
            "
          >
            <div className="p-8 flex items-center gap-4">
              <div
                className="
                  w-14 h-14 rounded-2xl
                  border border-zinc-800
                  bg-black
                  flex items-center justify-center
                "
              >
                <FiImage size={24} className="text-zinc-300" />
              </div>

              <div className="flex flex-col">
                <h2 className="text-2xl font-semibold text-zinc-100">
                  Imagem de exemplo
                </h2>

                <span className="text-zinc-500 text-sm">
                  Material apresentado
                </span>
              </div>
            </div>

            <div className="w-full h-full min-h-80 overflow-hidden flex items-center justify-center bg-black">
              <img
                src={note?.urlExample}
                alt={note?.title}
                onClick={() => setIsImageOpen(true)}
                className="
      w-full h-full object-contain object-center
      cursor-pointer hover:scale-[1.02]
      transition-all duration-300
    "
              />
            </div>
          </div>
        </div>
      </div>
      {isImageOpen && (
        <div
          onClick={() => setIsImageOpen(false)}
          className="
      fixed inset-0 z-50
      bg-black/90 backdrop-blur-sm
      flex items-center justify-center
      p-6
    "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl w-full"
          >
            <button
              onClick={() => setIsImageOpen(false)}
              className="
          absolute -top-14 right-0
          text-zinc-300 hover:text-white
          text-sm
          cursor-pointer
        "
            >
              Fechar
            </button>

            <img
              src={note?.urlExample}
              alt={note?.title}
              className="
          w-full max-h-[90vh]
          object-contain
          rounded-3xl
        "
            />
          </div>
        </div>
      )}
    </div>
  );
}
