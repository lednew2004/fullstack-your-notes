"use client";

import { getSubjectId, Subject } from "@/app/actions/get-subject-id";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { FiFileText } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";
import { PiPlus } from "react-icons/pi";

export default function SubjectId({
  params,
}: {
  params: Promise<{ noteId: string }>;
}) {
  const { noteId } = use(params);
  const router = useRouter();
  const [subject, setSubject] = useState<Subject | null>(null);

  useEffect(() => {
    async function loadSubject() {
      const { subject } = await getSubjectId({
        id: noteId,
      });

      setSubject(subject);
    }

    loadSubject();
  }, [noteId]);

  return (
    <div className="w-full min-h-screen bg-black px-6 md:px-14 py-10">
      <div className="w-full flex flex-col gap-10">
        {/* BACK BUTTON */}
        <button
          onClick={() => router.back()}
          className="
            w-fit flex items-center gap-3
            text-zinc-500 hover:text-zinc-200
            transition-all duration-200 cursor-pointer
          "
        >
          <BsArrowLeft size={18} />

          <span className="text-sm font-medium">Voltar</span>
        </button>

        {/* HEADER */}
        <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex flex-col gap-4">
            <div className="w-fit px-4 py-2 rounded-full border border-zinc-800 bg-zinc-950">
              <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Conteúdo
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">
                {subject?.title}
              </h1>

              <p className="max-w-2xl text-zinc-500 leading-relaxed">
                Visualize e organize suas anotações relacionadas ao conteúdo
                estudado.
              </p>
            </div>
          </div>

          {/* BUTTON */}
          <button
            onClick={() => router.push(`/profile/${noteId}/new`)}
            className="
              h-14 px-6 rounded-2xl
              border border-zinc-800
              bg-zinc-100 hover:bg-zinc-200
              text-black font-semibold
              flex items-center gap-2
              transition-all duration-200
              cursor-pointer
            "
          >
            <span>Nova anotação</span>

            <PiPlus size={20} />
          </button>
        </div>

        {/* INFO CARD */}
        <div
          className="
            w-full rounded-4xl
            border border-zinc-900
            bg-zinc-950
            p-8
            flex flex-col md:flex-row md:items-center
            justify-between gap-6
          "
        >
          <div className="flex items-center gap-5">
            <div
              className="
                w-16 h-16 rounded-2xl
                border border-zinc-800
                bg-black
                flex items-center justify-center
              "
            >
              <FiFileText size={28} className="text-zinc-300" />
            </div>

            <div className="flex flex-col">
              <span className="text-zinc-500 text-sm">Total de anotações</span>

              <h2 className="text-4xl font-bold text-zinc-100">
                {subject?.notes.length}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3 text-zinc-500">
            <HiOutlineSparkles size={20} />

            <span className="text-sm">
              Utilize IA para melhorar suas explicações
            </span>
          </div>
        </div>

        {/* NOTES */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold text-zinc-100">
              Suas anotações
            </h2>

            <span className="text-zinc-600 text-sm">
              {subject?.notes.length} anotações disponíveis
            </span>
          </div>

          {subject?.notes && subject?.notes.length > 0 ? (
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              {subject.notes.map((subject) => (
                <div
                  key={subject.id}
                  className="
                    group overflow-hidden
                    rounded-4xl
                    border border-zinc-900
                    bg-zinc-950
                    hover:bg-zinc-900/70
                    hover:border-zinc-800
                    transition-all duration-300
                    cursor-pointer
                  "
                >
                  {/* IMAGE */}
                  <div className="relative w-full h-65 overflow-hidden">
                    <img
                      src={subject.urlExample}
                      alt={subject.title}
                      className="
                        w-full h-full object-cover
                        group-hover:scale-105
                        transition-all duration-500
                      "
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />

                    <div className="absolute bottom-5 left-5">
                      <div
                        className="
                          px-4 py-2 rounded-full
                          border border-zinc-700
                          bg-black/70 backdrop-blur-sm
                        "
                      >
                        <span className="text-xs text-zinc-300">Anotação</span>
                      </div>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-7 flex flex-col gap-5">
                    <div className="flex flex-col gap-3">
                      <h3 className="text-3xl font-bold text-zinc-100 leading-tight">
                        {subject.title}
                      </h3>

                      <p className="text-zinc-500 leading-relaxed">
                        {subject.description}
                      </p>
                    </div>

                    {/* FOOTER */}
                    <div
                      onClick={() =>
                        router.push(`/profile/${noteId}/${subject.id}`)
                      }
                      className="pt-5 border-t border-zinc-900 flex items-center justify-between"
                    >
                      <button className="text-sm text-zinc-600">
                        Clique para visualizar
                      </button>

                      <div
                        className="
                          w-10 h-10 rounded-full
                          border border-zinc-800
                          bg-black
                          flex items-center justify-center
                          text-zinc-300
                          group-hover:translate-x-1
                          transition-all duration-300
                        "
                      >
                        →
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              className="
                w-full min-h-112.5
                rounded-4xl
                border border-dashed border-zinc-900
                bg-zinc-950
                flex flex-col items-center justify-center gap-6
              "
            >
              <div
                className="
                  w-24 h-24 rounded-full
                  border border-zinc-800
                  bg-black
                  flex items-center justify-center
                "
              >
                <FiFileText size={42} className="text-zinc-500" />
              </div>

              <div className="flex flex-col items-center gap-2">
                <h2 className="text-3xl font-semibold text-zinc-100">
                  Nenhuma anotação encontrada
                </h2>

                <span className="text-zinc-500 text-center max-w-md">
                  Crie sua primeira anotação para começar a organizar seus
                  conteúdos.
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
