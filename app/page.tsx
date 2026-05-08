"use client";

import { useRouter } from "next/navigation";
import { BiBook } from "react-icons/bi";
import Pricings from "./components/pricings";
import { ScrollButton } from "./components/scroll-button";

export default function Home() {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col items-center justify-center gap-24 overflow-x-hidden">
      {/* Header */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 py-6 gap-6">
        <div className="flex items-center gap-1">
          <BiBook className="text-blue-50 text-2xl sm:text-3xl" />

          <div>
            <span className="text-blue-400 font-bold text-2xl sm:text-3xl">
              Your
            </span>

            <span className="text-blue-500 font-bold text-2xl sm:text-3xl underline">
              Notes
            </span>
          </div>
        </div>

        <div className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-5">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <ScrollButton target="Home" />
            <ScrollButton target="Examples" />
            <ScrollButton target="Pricings" />
            <ScrollButton target="Contact" />
          </div>

          <button
            onClick={() => router.push("/profile")}
            className="text-zinc-50 cursor-pointer hover:text-zinc-400 transition-colors"
          >
            Login
          </button>
        </div>
      </div>

      {/* Hero */}
      <section
        id="Home"
        className="w-full max-w-6xl px-4 sm:px-6 md:px-10 flex flex-col items-center justify-center gap-8 text-center"
      >
        <span className="rounded-full border border-zinc-700 bg-zinc-800 px-5 py-2 text-xs sm:text-sm font-medium tracking-wide text-zinc-300 shadow">
          Organização • IA • Produtividade
        </span>

        <div className="flex flex-col gap-5">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-zinc-50">
            Estude, organize e evolua
            <span className="block text-zinc-400">em um único lugar.</span>
          </h1>

          <p className="mx-auto max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-zinc-400">
            Centralize suas anotações, acompanhe sua evolução e utilize
            inteligência artificial para gerar explicações mais claras, resumir
            conteúdos e acelerar seu aprendizado.
          </p>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 px-4 sm:px-5 py-3 text-sm sm:text-base text-zinc-300 shadow">
            ✍️ Anotações inteligentes
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 px-4 sm:px-5 py-3 text-sm sm:text-base text-zinc-300 shadow">
            🤖 Explicações com IA
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 px-4 sm:px-5 py-3 text-sm sm:text-base text-zinc-300 shadow">
            📚 Organização dos estudos
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 px-4 sm:px-5 py-3 text-sm sm:text-base text-zinc-300 shadow">
            🖼️ Upload de imagens
          </div>
        </div>

        <div className="mt-4">
          <button
            onClick={() => router.push("/register")}
            className="rounded-2xl bg-zinc-100 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-zinc-900 transition-all duration-300 hover:bg-zinc-300"
          >
            Começar Gratuitamente
          </button>
        </div>
      </section>

      {/* Examples */}
      <section
        id="Examples"
        className="w-full flex flex-col gap-20 px-4 sm:px-6 md:px-10 lg:px-16 items-center"
      >
        <span className="text-zinc-50 text-3xl sm:text-4xl font-bold">
          Exemplos
        </span>

        {/* Example 1 */}
        <div className="w-full flex justify-center lg:justify-start">
          <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center gap-10 lg:gap-16 rounded-4xl border border-zinc-800 bg-zinc-900/80 p-5 sm:p-8 lg:p-10 shadow-2xl shadow-black/20 backdrop-blur-sm">
            {/* Card */}
            <div className="w-full max-w-xl rounded-4xl border border-zinc-700 bg-zinc-800 p-5 sm:p-6 shadow-lg">
              <div className="flex items-center justify-between rounded-2xl border border-zinc-600 bg-zinc-700 px-4 sm:px-5 py-4">
                <h2 className="text-base sm:text-lg font-bold text-zinc-100">
                  Estudos de JavaScript
                </h2>

                <div className="h-3 w-3 rounded-full bg-zinc-300" />
              </div>

              <div className="mt-8 flex flex-col gap-4">
                {[
                  "Aula de Variáveis",
                  "Aula de Funções",
                  "Aula de Condicionais",
                  "Aula de Funções Assíncronas",
                ].map((item) => (
                  <div
                    key={item}
                    className="group flex items-center justify-between rounded-2xl border border-zinc-700 bg-zinc-900 px-4 py-4 transition-all duration-300 hover:border-zinc-500 hover:bg-zinc-800"
                  >
                    <span className="font-medium text-sm sm:text-base text-zinc-200">
                      {item}
                    </span>

                    <div className="h-2 w-2 rounded-full bg-zinc-400 group-hover:bg-zinc-200" />
                  </div>
                ))}
              </div>
            </div>

            {/* Text */}
            <div className="max-w-xl flex flex-col gap-5 text-center lg:text-left">
              <span className="w-fit self-center lg:self-start rounded-full border border-zinc-700 bg-zinc-800 px-4 py-1 text-sm font-medium text-zinc-300">
                Organização Inteligente
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-zinc-50">
                Organize seus estudos de forma simples.
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-zinc-400">
                Centralize suas anotações, acompanhe aulas e organize conteúdos
                importantes com uma interface moderna e intuitiva.
              </p>

              <p className="text-base sm:text-lg leading-relaxed text-zinc-500">
                Com o{" "}
                <span className="font-bold text-zinc-200">Your Notes</span>,
                você consegue gerar explicações, salvar referências e acompanhar
                seu progresso de aprendizado em um único lugar.
              </p>
            </div>
          </div>
        </div>

        {/* Example 2 */}
        <div className="w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-7xl flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16 rounded-4xl border border-zinc-800 bg-zinc-900/80 p-5 sm:p-8 lg:p-10 shadow-2xl shadow-black/20 backdrop-blur-sm">
            {/* Text */}
            <div className="max-w-xl flex flex-col items-center lg:items-end gap-5 text-center lg:text-right">
              <span className="w-fit rounded-full border border-zinc-700 bg-zinc-800 px-4 py-1 text-sm font-medium text-zinc-300">
                Aprendizado Contínuo
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-zinc-50">
                Aprenda programação no seu ritmo.
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-zinc-400">
                Explore conteúdos importantes da área da tecnologia, organize
                seus estudos e acompanhe sua evolução com uma experiência
                moderna e intuitiva.
              </p>

              <p className="text-base sm:text-lg leading-relaxed text-zinc-500">
                Desde lógica de programação até conceitos avançados, o{" "}
                <span className="font-bold text-zinc-200">Your Notes</span>
                ajuda você a centralizar conhecimentos e transformar informação
                em aprendizado real.
              </p>
            </div>

            {/* Card */}
            <div className="w-full max-w-xl rounded-4xl border border-zinc-700 bg-zinc-800 p-5 sm:p-6 shadow-lg">
              <div className="flex items-center justify-between rounded-2xl border border-zinc-600 bg-zinc-700 px-4 sm:px-5 py-4">
                <h2 className="text-base sm:text-lg font-bold text-zinc-100">
                  Estudos de Programação
                </h2>

                <div className="h-3 w-3 rounded-full bg-zinc-300" />
              </div>

              <div className="mt-8 flex flex-col gap-4">
                {[
                  "Aula de Redes",
                  "Aula de Computadores",
                  "Aula de Editor de Código",
                  "Linguagens de Programação",
                ].map((item) => (
                  <div
                    key={item}
                    className="group flex items-center justify-between rounded-2xl border border-zinc-700 bg-zinc-900 px-4 py-4 transition-all duration-300 hover:border-zinc-500 hover:bg-zinc-800"
                  >
                    <span className="font-medium text-sm sm:text-base text-zinc-200">
                      {item}
                    </span>

                    <div className="h-2 w-2 rounded-full bg-zinc-400 group-hover:bg-zinc-200" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Example 3 */}
        <div className="w-full flex justify-center lg:justify-start">
          <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center gap-10 lg:gap-16 rounded-4xl border border-zinc-800 bg-zinc-900/80 p-5 sm:p-8 lg:p-10 shadow-2xl shadow-black/20 backdrop-blur-sm">
            {/* Card */}
            <div className="w-full max-w-xl rounded-4xl border border-zinc-700 bg-zinc-800 p-5 sm:p-6 shadow-lg">
              <div className="flex items-center justify-between rounded-2xl border border-zinc-600 bg-zinc-700 px-4 sm:px-5 py-4">
                <h2 className="text-base sm:text-lg font-bold text-zinc-100">
                  Estudos de Backend
                </h2>

                <div className="h-3 w-3 rounded-full bg-zinc-300" />
              </div>

              <div className="mt-8 flex flex-col gap-4">
                {[
                  "Aula de Server",
                  "Aula de Streams",
                  "Aula de Ports",
                  "Variáveis de Ambiente",
                ].map((item) => (
                  <div
                    key={item}
                    className="group flex items-center justify-between rounded-2xl border border-zinc-700 bg-zinc-900 px-4 py-4 transition-all duration-300 hover:border-zinc-500 hover:bg-zinc-800"
                  >
                    <span className="font-medium text-sm sm:text-base text-zinc-200">
                      {item}
                    </span>

                    <div className="h-2 w-2 rounded-full bg-zinc-400 group-hover:bg-zinc-200" />
                  </div>
                ))}
              </div>
            </div>

            {/* Text */}
            <div className="max-w-xl flex flex-col gap-5 text-center lg:text-left">
              <span className="w-fit self-center lg:self-start rounded-full border border-zinc-700 bg-zinc-800 px-4 py-1 text-sm font-medium text-zinc-300">
                Arquitetura e Performance
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-zinc-50">
                Desenvolva aplicações robustas.
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-zinc-400">
                O backend é responsável por toda a lógica, processamento e
                comunicação entre sistemas, garantindo segurança, performance e
                organização.
              </p>

              <p className="text-base sm:text-lg leading-relaxed text-zinc-500">
                Com o{" "}
                <span className="font-bold text-zinc-200">Your Notes</span>,
                você pode estruturar seus estudos sobre servidores, APIs,
                arquitetura e ambientes de execução de maneira organizada e
                prática.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricings */}
      <section id="Pricings" className="w-full">
        <Pricings />
      </section>

      {/* Footer */}
      <section
        id="Contact"
        className="w-full border-t border-zinc-800 bg-zinc-950 px-4 sm:px-6 md:px-10 py-12"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-10">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            {/* Brand */}
            <div className="max-w-md flex flex-col gap-4">
              <h2 className="text-2xl sm:text-3xl font-black text-zinc-50">
                Your Notes
              </h2>

              <p className="leading-relaxed text-sm sm:text-base text-zinc-400">
                Plataforma moderna para organizar estudos, criar anotações
                inteligentes e acompanhar sua evolução com auxílio de IA.
              </p>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-4">
              <span className="text-lg font-semibold text-zinc-200">
                Contato
              </span>

              <div className="flex flex-col gap-2 text-sm sm:text-base text-zinc-400">
                <span>📧 wendellkauan870@gmail.com</span>

                <span>📱 (86) 99441-0695</span>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-4">
              <span className="text-lg font-semibold text-zinc-200">
                Recursos
              </span>

              <div className="flex flex-col gap-2 text-sm sm:text-base text-zinc-400">
                <a
                  href="#"
                  className="transition-colors duration-300 hover:text-zinc-200"
                >
                  Funcionalidades
                </a>

                <a
                  href="#"
                  className="transition-colors duration-300 hover:text-zinc-200"
                >
                  Planos
                </a>

                <a
                  href="#"
                  className="transition-colors duration-300 hover:text-zinc-200"
                >
                  Sobre
                </a>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-zinc-800" />

          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-zinc-500 md:flex-row">
            <span>© 2026 Your Notes. Todos os direitos reservados.</span>

            <span>Desenvolvido por Wendell Kauan</span>
          </div>
        </div>
      </section>
    </div>
  );
}
