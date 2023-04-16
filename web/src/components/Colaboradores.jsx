import React from "react";

const Colaboradores = () => {
  return (
    <table className="w-[400px] border-collapse border border-gray-400 mt-10 mx-[60px]">
      <thead>
        <tr>
          <th className="px-4 py-2 bg-zinc-50 text-zinc-950  border border-gray-400">
            Nome
          </th>
          <th className="px-4 py-2 bg-zinc-50 text-zinc-950  border border-gray-400">
            Serviços prestados
          </th>
          <th className="px-4 py-2 bg-zinc-50 text-zinc-950  border border-gray-400">
            Faturamento
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="border border-gray-400">
          <td className="px-4 py-2 border border-gray-40 h-[20px] text-zinc-50 bg-[#1A1A26]">
            John
          </td>
          <td className="px-4 py-2 border border-gray-400 h-[20px] text-zinc-50 bg-[#1A1A26]">
            10
          </td>
          <td className="px-4 py-2 border border-gray-400 h-[20px] text-zinc-50 bg-[#1A1A26] ">
            R$ 5,500
          </td>
        </tr>
        <tr className="border border-gray-400">
          <td className="px-4 py-2 border border-gray-400 h-[20px] text-zinc-50 bg-[#1A1A26]">
            Maria
          </td>
          <td className="px-4 py-2 border border-gray-400 h-[20px] text-zinc-50 bg-[#1A1A26]">
            5
          </td>
          <td className="px-4 py-2 border border-gray-400 h-[20px] text-zinc-50 bg-[#1A1A26]">
            R$ 1,200
          </td>
        </tr>
        <tr className="border border-gray-400">
          <td className="px-4 py-2 border border-gray-400 h-[20px] text-zinc-50 bg-[#1A1A26]">
            Cris
          </td> 
          <td className="px-4 py-2 border border-gray-400  h-[20px] text-zinc-50 bg-[#1A1A26]">
            7
          </td>
          <td className="px-4 py-2 border border-gray-400  h-[20px] text-zinc-50 bg-[#1A1A26]">
            R$ 3,000
          </td>
        </tr>
        <tr className="border border-gray-400">
          <td className="px-4 py-2 border border-gray-400  h-[20px] text-zinc-50 bg-[#1A1A26]">
            Rafael
          </td>
          <td className="px-4 py-2 border border-gray-400 text-zinc-50 bg-[#1A1A26] h-[20px]">
            3
          </td>
          <td className="px-4 py-2 border border-gray-400 text-zinc-50 bg-[#1A1A26] h-[20px]">
            R$ 500
          </td>
        </tr>
        <tr className="border border-gray-400">
          <td className="px-4 py-2 border border-gray-400 items-center  h-[20px] text-zinc-50 bg-[#1A1A26]">
            Joana
          </td>
          <td className="px-4 py-2 border border-gray-400 items-center  h-[20px] text-zinc-50 bg-[#1A1A26]">
            2
          </td>
          <td className="px-4 py-2 border border-gray-400 items-center  h-[20px] text-zinc-50 bg-[#1A1A26]">
            R$ 1,100
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Colaboradores;
