"use client";

import { createSubjectAction } from "@/app/actions/create-subject";
import { generateDescriptionInTitle } from "@/app/actions/gemini";
import Portal from "@/app/components/portal";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiPencil } from "react-icons/bi";
import { FaList } from "react-icons/fa6";
import { FiFileText } from "react-icons/fi";
import { HiOutlineCalendarDateRange, HiOutlineSparkles } from "react-icons/hi2";

type SubjectData = {
  id: string;
  title: string;
  description: string;
  userid: string;
  created_At: Date;
};

type UserProfile = {
  id: string;
  name: string;
  email: string;
  isVip: boolean;
  customerId: string | null;
  created_At: Date;
  subjects: SubjectData[];
};

type ProfileClientProps = {
  subjectsData: SubjectData[];
  user: UserProfile;
};

export default function ProfileClient({
  subjectsData,
  user,
}: ProfileClientProps) {
  const router = useRouter();

  const [currentTab, setCurrentTab] = useState("notes");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const isVip = user.isVip === true;

  async function createSubject() {
    try {
      await createSubjectAction({
        title,
        description,
        userid: user.id,
      });

      setCurrentTab("notes");

      router.refresh();
    } catch (err) {
      console.error(err);
    }
  }

  async function handleGenerateDescription() {
    const response = await generateDescriptionInTitle(title, isVip);

    if (!response.success) {
      alert(response.error);
      return;
    }

    setDescription(response.data ?? "");
  }

  return (
    <div className="w-full min-h-screen bg-black px-6 md:px-14 py-10">
      {!isVip && (
        <div className="fixed top-0 left-0 w-full flex justify-center items-center gap-1 py-2 bg-zinc-900 text-sm">
          <span className="text-zinc-50">
            Você está usando a versão Gratís.
          </span>
          <a href={`/profile/upgrade`}>
            <button className="text-green-500 font-bold cursor-pointer">
              Faça o upgrade agora
            </button>
          </a>
        </div>
      )}
      <div className="w-full flex flex-col gap-8">
        {/* HEADER */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-5xl font-bold text-zinc-50 tracking-tight">
              Sua área de anotações
            </h1>
            <Portal isVip={user.isVip} />
          </div>

          <p className="max-w-2xl text-zinc-500 leading-relaxed">
            Organize seus estudos, acompanhe conteúdos finalizados e utilize IA
            para melhorar suas explicações e produtividade.
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-3xl border border-zinc-900 bg-zinc-950 p-6">
            <span className="text-sm text-zinc-500">Total de anotações</span>

            <h2 className="mt-3 text-4xl font-bold text-zinc-100">
              {subjectsData.length}
            </h2>
          </div>

          <div className="rounded-3xl border border-zinc-900 bg-zinc-950 p-6">
            <span className="text-sm text-zinc-500">Em andamento</span>

            <h2 className="mt-3 text-4xl font-bold text-zinc-100">{0}</h2>
          </div>

          <div className="rounded-3xl border border-zinc-900 bg-zinc-950 p-6">
            <span className="text-sm text-zinc-500">Finalizadas</span>

            <h2 className="mt-3 text-4xl font-bold text-zinc-100">{0}</h2>
          </div>
        </div>

        {/* TABS */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setCurrentTab("notes")}
            className={`flex items-center gap-2 rounded-2xl px-5 py-3 border transition-all duration-200 cursor-pointer ${
              currentTab === "notes"
                ? "bg-zinc-100 border-zinc-100 text-black"
                : "bg-zinc-950 border-zinc-900 text-zinc-400 hover:bg-zinc-900"
            }`}
          >
            <FaList className="text-[15px]" />
            <span className="font-medium">Suas anotações</span>
          </button>

          <button
            onClick={() => setCurrentTab("new-note")}
            className={`flex items-center gap-2 rounded-2xl px-5 py-3 border transition-all duration-200 cursor-pointer ${
              currentTab === "new-note"
                ? "bg-zinc-100 border-zinc-100 text-black"
                : "bg-zinc-950 border-zinc-900 text-zinc-400 hover:bg-zinc-900"
            }`}
          >
            <BiPencil className="text-[17px]" />
            <span className="font-medium">Nova anotação</span>
          </button>
        </div>

        {/* NOTES */}
        {currentTab === "notes" ? (
          <>
            {subjectsData.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
                {subjectsData.map((subject) => (
                  <div
                    key={subject.id}
                    className="group relative overflow-hidden rounded-[28px] border border-zinc-900 bg-zinc-950 p-6 hover:border-zinc-800 hover:bg-zinc-900/60 transition-all duration-300 cursor-pointer"
                  >
                    {/* Blur effect */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-zinc-800/20 blur-3xl rounded-full" />

                    {/* Top */}
                    <div className="relative flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl border border-zinc-800 bg-black flex items-center justify-center">
                        <FiFileText size={20} className="text-zinc-300" />
                      </div>

                      <div className="px-3 py-1 rounded-full border border-zinc-800 bg-black">
                        <span className="text-xs text-zinc-400 capitalize">
                          ativo
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative mt-8 flex flex-col gap-4">
                      <h2 className="text-2xl font-semibold leading-snug text-zinc-100">
                        {subject.title}
                      </h2>

                      <div className="flex items-center gap-2 text-zinc-500 text-sm">
                        <HiOutlineCalendarDateRange size={16} />

                        <span>
                          {subject.created_At.toLocaleDateString("pt-BR")}
                        </span>
                      </div>
                    </div>

                    {/* Footer */}
                    <div
                      onClick={() => router.push(`profile/${subject.id}`)}
                      className="relative mt-10 pt-5 border-t border-zinc-900 flex items-center justify-between"
                    >
                      <span className="text-sm text-zinc-600">
                        Abrir anotação
                      </span>

                      <div className="w-9 h-9 rounded-full border border-zinc-800 bg-black flex items-center justify-center text-zinc-300 group-hover:translate-x-1 transition-all duration-300">
                        →
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="w-full min-h-112.5 rounded-4xl border border-dashed border-zinc-900 bg-zinc-950 flex flex-col items-center justify-center gap-6">
                <div className="w-24 h-24 rounded-full border border-zinc-800 bg-black flex items-center justify-center">
                  <FiFileText size={42} className="text-zinc-500" />
                </div>

                <div className="flex flex-col items-center gap-2">
                  <h2 className="text-3xl font-semibold text-zinc-100">
                    Nenhuma anotação encontrada
                  </h2>

                  <span className="text-zinc-500 text-center max-w-md leading-relaxed">
                    Crie sua primeira anotação para começar a organizar seus
                    estudos e conteúdos.
                  </span>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="w-full min-h-125 rounded-4xl border border-zinc-900 bg-zinc-950 flex items-center justify-center">
            <div className="w-full min-h-162.5 rounded-4xl border border-zinc-900 bg-zinc-950 p-8 md:p-12">
              <div className="w-full max-w-3xl mx-auto flex flex-col gap-10">
                {/* Header */}
                <div className="flex flex-col gap-3">
                  <div className="w-14 h-14 rounded-2xl border border-zinc-800 bg-black flex items-center justify-center">
                    <BiPencil size={24} className="text-zinc-300" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <h2 className="text-4xl font-bold tracking-tight text-zinc-100">
                      Nova anotação
                    </h2>

                    <span className="text-zinc-500 leading-relaxed">
                      Crie uma nova anotação para organizar seus estudos e
                      salvar ideias importantes.
                    </span>
                  </div>
                </div>

                {/* Form */}
                <div className="flex flex-col gap-6">
                  {/* Title */}
                  <div className="flex flex-col gap-3">
                    <label className="text-sm font-medium text-zinc-400">
                      Título da anotação
                    </label>

                    <input
                      type="text"
                      placeholder="Ex: Estudos sobre React Server Components"
                      className="
                    w-full h-14 rounded-2xl border border-zinc-800
                    bg-black px-5 text-zinc-100 placeholder:text-zinc-600
                    outline-none transition-all duration-200
                    focus:border-zinc-700 focus:bg-zinc-950
                  "
                      onChange={(e) => setTitle(e.target.value)}
                      value={title}
                    />
                  </div>

                  {/* Description */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium text-zinc-400">
                        Descrição breve
                      </label>

                      <button
                        onClick={handleGenerateDescription}
                        className="
        h-10 px-4 rounded-xl
        border border-zinc-800
        bg-black hover:bg-zinc-900
        text-zinc-300 hover:text-zinc-100
        text-sm font-medium
        flex items-center gap-2
        transition-all duration-200
        cursor-pointer
      "
                      >
                        <HiOutlineSparkles size={18} />

                        <span>Usar IA</span>
                      </button>
                    </div>

                    <textarea
                      placeholder="Descreva rapidamente o conteúdo da sua anotação..."
                      className="
      w-full min-h-55 resize-none rounded-3xl
      border border-zinc-800 bg-black p-5
      text-zinc-100 placeholder:text-zinc-600
      outline-none transition-all duration-200
      focus:border-zinc-700 focus:bg-zinc-950
    "
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                    />
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-900">
                    <span className="text-sm text-zinc-600">
                      Suas anotações ficam salvas automaticamente.
                    </span>

                    <button
                      onClick={createSubject}
                      className="
                    h-14 px-8 rounded-2xl
                    bg-zinc-100 hover:bg-zinc-200
                    text-black font-semibold
                    transition-all duration-200
                    cursor-pointer
                  "
                    >
                      Criar anotação
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
