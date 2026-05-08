"use client";

import { registerAction } from "@/app/actions/register";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser() {
    try {
      await registerAction({
        name,
        email,
        password,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="w-full min-h-screen bg-black p-3 sm:p-4 md:p-6">
      <div className="w-full min-h-[calc(100vh-24px)] sm:min-h-[calc(100vh-32px)] md:min-h-[calc(100vh-48px)] flex overflow-hidden rounded-[28px] md:rounded-[36px] border border-zinc-900 bg-zinc-950">
        {/* Left Side */}
        <div className="w-full lg:w-[45%] flex items-center justify-center px-5 sm:px-8 md:px-10 lg:px-16 py-10 md:py-14">
          <div className="w-full max-w-xl flex flex-col gap-8 md:gap-10">
            {/* Logo */}
            <div
              onClick={() => router.push("/")}
              className="cursor-pointer select-none"
            >
              <span className="text-blue-400 font-bold text-2xl sm:text-3xl">
                Your
              </span>

              <span className="text-blue-500 font-bold text-2xl sm:text-3xl underline">
                Notes
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-5">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-zinc-50">
                Estude, organize e evolua
                <span className="block text-zinc-400">em um único lugar.</span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-zinc-400 max-w-2xl">
                Centralize suas anotações, acompanhe sua evolução e utilize
                inteligência artificial para gerar explicações mais claras,
                resumir conteúdos e acelerar seu aprendizado.
              </p>
            </div>

            {/* Form */}
            <div className="w-full max-w-md flex flex-col gap-5">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="text-zinc-100 text-sm font-medium">
                  Nome
                </label>

                <div className="h-12 sm:h-13 bg-zinc-900/80 border border-zinc-800 rounded-2xl transition-all duration-300 focus-within:border-zinc-500 focus-within:ring-1 focus-within:ring-zinc-700">
                  <input
                    type="text"
                    placeholder="Digite seu nome completo"
                    className="w-full h-full bg-transparent px-4 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 outline-none"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-zinc-100 text-sm font-medium">
                  Email
                </label>

                <div className="h-12 sm:h-13 bg-zinc-900/80 border border-zinc-800 rounded-2xl transition-all duration-300 focus-within:border-zinc-500 focus-within:ring-1 focus-within:ring-zinc-700">
                  <input
                    type="email"
                    placeholder="Digite seu melhor email"
                    className="w-full h-full bg-transparent px-4 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 outline-none"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="flex flex-col gap-2">
                <label className="text-zinc-100 text-sm font-medium">
                  Senha
                </label>

                <div className="h-12 sm:h-13 bg-zinc-900/80 border border-zinc-800 rounded-2xl transition-all duration-300 focus-within:border-zinc-500 focus-within:ring-1 focus-within:ring-zinc-700">
                  <input
                    type="password"
                    placeholder="Digite sua senha"
                    className="w-full h-full bg-transparent px-4 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 outline-none"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
              </div>

              {/* Button */}
              <button
                onClick={registerUser}
                className="w-full h-12 sm:h-13 rounded-2xl bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-sm sm:text-base text-white font-semibold cursor-pointer shadow-lg shadow-blue-500/10"
              >
                Criar conta
              </button>

              {/* Login */}
              <div className="flex flex-wrap items-center justify-center gap-2 text-center text-sm text-zinc-500">
                <span>Já possui uma conta?</span>

                <button
                  onClick={() => router.push("/login")}
                  className="text-blue-400 hover:text-blue-300 transition-all duration-300 font-medium cursor-pointer"
                >
                  Entrar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden lg:block lg:w-[55%] relative overflow-hidden">
          <img
            src="/Image.png"
            alt="Illustration"
            className="absolute inset-0 w-full h-full object-cover object-center scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-zinc-950/70" />
        </div>
      </div>
    </div>
  );
}
