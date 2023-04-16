import React from "react";

import { Home, Users, LineChart } from "lucide-react";


import Avatar from "./Avatar";

const Sidebar = () => {
  return (
    <>
      <nav className="space-y-6 mt-[50px] ">
        <Avatar />
        <a
          className="flex items-center gap-3 text-sm font-semibold text-zinc-50 w-full h-[50px] hover:bg-gradient-to-r from-[#04060D] to-[#8B5FBF]  p-3 hover:text-zinc-50"
        href="/"
        >
        <Home />
          Inicio
        </a>
        <a
          className="flex items-center gap-3 text-sm font-semibold text-zinc-50 w-full h-[50px]   p-3 hover:text-zinc-50"
          href="#"
        >
          Painel de atividades
        </a>
        <a
          className="flex items-center gap-3 text-sm font-semibold text-zinc-50  w-full h-[50px] hover:bg-gradient-to-r from-[#04060D] to-[#8B5FBF]  p-3  hover:text-zinc-50"
          href="/colaboradores"
        >
          <Users />
          Colaboradores
        </a>
        <a
          className="flex items-center gap-3 text-sm font-semibold text-zinc-50  w-full h-[50px] hover:bg-gradient-to-r from-[#04060D] to-[#8B5FBF]  p-3  hover:text-zinc-50"
          href=""
        >
          <LineChart />
          Performances
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-50 w-full h-[50px]   p-3 hover:text-zinc-50"
        >
          Suporte
        </a>
      </nav>
      <div className="border border-gray-600 mt-[200px]">

      </div>
      
    </>
  );
};

export default Sidebar;
