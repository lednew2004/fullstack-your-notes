"use client";

import { BiTrendingUp } from "react-icons/bi";
import Portalbutton from "./portal-button";

type PortalProps = {
  isVip: boolean;
};

export default function Portal({ isVip }: PortalProps) {
  return (
    <div className="w-min whitespace-nowrap flex items-center gap-5 bg-zinc-900 border border-zinc-950 px-8 py-3 rounded-xl shadow-lg">
      <span className="font-bold text-lime-400">
        {isVip && "Plano Pro ativo"}
      </span>

      <div className="flex items-center gap-2 text-green-400">
        <BiTrendingUp />
      </div>

      <div className="flex items-center gap-2">
        {isVip && <Portalbutton />}

        <form action={`/`}>
          <button className="cursor-pointer text-zinc-50">Sair</button>
        </form>
      </div>
    </div>
  );
}
