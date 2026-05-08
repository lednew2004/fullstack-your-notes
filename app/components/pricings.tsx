import { useRouter } from "next/navigation";
import { CgCheck } from "react-icons/cg";

export default function Pricings() {
  const route = useRouter();

  return (
    <div className="w-full flex flex-col gap-12 px-4 sm:px-6 md:px-10 lg:px-16 items-center">
      {/* Title */}
      <div className="flex flex-col items-center gap-3 text-center">
        <span className="rounded-full border border-zinc-700 bg-zinc-800 px-4 py-1 text-sm text-zinc-300">
          Planos
        </span>

        <h2 className="text-zinc-100 font-bold text-3xl sm:text-4xl">
          Confira nossos preços
        </h2>

        <p className="max-w-2xl text-sm sm:text-base text-zinc-400 leading-relaxed">
          Escolha o plano ideal para organizar seus estudos e utilizar todos os
          recursos da plataforma.
        </p>
      </div>

      {/* Cards */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl">
        {/* Free */}
        <div className="w-full rounded-4xl border border-zinc-700 bg-zinc-900 p-6 sm:p-8 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-2 hover:border-zinc-500">
          {/* Header */}
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100">
              Free
            </h2>

            <span className="rounded-full border border-zinc-700 bg-zinc-800 px-4 py-1 text-xs sm:text-sm font-medium text-zinc-300 whitespace-nowrap">
              Gratuito
            </span>
          </div>

          {/* Price */}
          <div className="mt-8 flex items-end gap-2 flex-wrap">
            <span className="text-4xl sm:text-5xl font-black text-zinc-50">
              R$ 0
            </span>

            <span className="mb-1 text-zinc-400 text-sm sm:text-base">
              /mês
            </span>
          </div>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-400">
            Ideal para testar a plataforma e organizar suas primeiras anotações.
          </p>

          {/* Divider */}
          <div className="my-8 h-px w-full bg-zinc-800" />

          {/* Features */}
          <div className="flex flex-col gap-5">
            {[
              "Escreva suas anotações sem limitações.",
              "Adicione exemplos de texto e imagens.",
              "Use a IA até 10 vezes ao dia",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 min-w-6 items-center justify-center rounded-full bg-zinc-800">
                  <CgCheck className="text-sm text-zinc-200" />
                </div>

                <span className="font-medium text-sm sm:text-base leading-relaxed text-zinc-300">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Button */}
          <button
            onClick={() => route.push("/register")}
            className="mt-10 w-full rounded-2xl bg-zinc-100 py-4 text-sm sm:text-base font-semibold text-zinc-900 transition-all duration-300 hover:bg-zinc-300"
          >
            Começar Gratuitamente
          </button>
        </div>

        {/* Pro */}
        <div className="w-full rounded-4xl border border-zinc-500 bg-zinc-900 p-6 sm:p-8 shadow-2xl shadow-black/30 transition-all duration-300 hover:-translate-y-2">
          {/* Header */}
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100">
              Pro
            </h2>

            <span className="rounded-full border border-zinc-600 bg-zinc-800 px-4 py-1 text-xs sm:text-sm font-medium text-zinc-300 whitespace-nowrap">
              Mensal
            </span>
          </div>

          {/* Price */}
          <div className="mt-8 flex items-end gap-2 flex-wrap">
            <span className="text-4xl sm:text-5xl font-black text-zinc-50">
              R$ 7,90
            </span>

            <span className="mb-1 text-zinc-400 text-sm sm:text-base">
              /mês
            </span>
          </div>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-400">
            Libere o acesso e comece a utilizar todos os recursos da plataforma.
          </p>

          {/* Divider */}
          <div className="my-8 h-px w-full bg-zinc-800" />

          {/* Features */}
          <div className="flex flex-col gap-5">
            {[
              "Escreva suas anotações sem limitações.",
              "Adicione exemplos de texto com auxilio da IA e imagens.",
              "Use a IA como ajuda para gerar bons relatórios e melhorar descrições.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 min-w-6 items-center justify-center rounded-full bg-zinc-800">
                  <CgCheck className="text-sm text-zinc-200" />
                </div>

                <span className="font-medium text-sm sm:text-base leading-relaxed text-zinc-300">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Button */}
          <button
            onClick={() => route.push("/register")}
            className="mt-10 w-full rounded-2xl bg-zinc-100 py-4 text-sm sm:text-base font-semibold text-zinc-900 transition-all duration-300 hover:bg-zinc-300"
          >
            Criar conta e realizar pagamento
          </button>
        </div>

        {/* Business */}
        <div className="w-full rounded-4xl border border-zinc-700 bg-zinc-900 p-6 sm:p-8 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-2 hover:border-zinc-500">
          {/* Header */}
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100">
              Business
            </h2>

            <span className="rounded-full border border-zinc-700 bg-zinc-800 px-4 py-1 text-xs sm:text-sm font-medium text-zinc-300 whitespace-nowrap">
              Anual
            </span>
          </div>

          {/* Price */}
          <div className="mt-8 flex items-end gap-2 flex-wrap">
            <span className="text-4xl sm:text-5xl font-black text-zinc-50">
              R$ 59,90
            </span>

            <span className="mb-1 text-zinc-400 text-sm sm:text-base">
              /mês
            </span>
          </div>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-400">
            Plataforma 100% liberada e economize mais pagando anualmente.
          </p>

          {/* Divider */}
          <div className="my-8 h-px w-full bg-zinc-800" />

          {/* Features */}
          <div className="flex flex-col gap-5">
            {[
              "Escreva suas anotações sem limitações.",
              "Use a IA livremente.",
              "Pague menos com 20% de desconto.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 min-w-6 items-center justify-center rounded-full bg-zinc-800">
                  <CgCheck className="text-sm text-zinc-200" />
                </div>

                <span className="font-medium text-sm sm:text-base leading-relaxed text-zinc-300">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Button */}
          <button
            onClick={() => route.push("/register")}
            className="mt-10 w-full rounded-2xl bg-zinc-100 py-4 text-sm sm:text-base font-semibold text-zinc-900 transition-all duration-300 hover:bg-zinc-300"
          >
            Criar conta e realizar pagamento
          </button>
        </div>
      </div>
    </div>
  );
}
