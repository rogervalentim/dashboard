import React from 'react'

const Container = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:w-full h-[200px] mt-10 rounded-md bg-[#1A1A26]">
      <div className="w-[90%] sm:w-1/2">
        <div className="flex justify-center">
          <p className="text-zinc-50 text-3xl">Status de Entrega durante um mês</p>
        </div>
        <div className="flex mt-8 mx-3 ">
          <div>
            <p className="text-gray-600">Entregues</p>
            <h3 className="text-zinc-50 mt-2 text-4xl">27</h3>
          </div>
          <div className="ml-8 sm:ml-24">
            <p className="text-gray-600">Falta entregar</p>
            <h3 className="text-zinc-50 mt-2 text-4xl">173</h3>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2">
        <div className="lg:flex justify-between sm:justify-start mx-6 sm:mx-0 mt-16">
          <div>
            <p className="text-gray-600">Propabilidade de entrega</p>
            <h3 className="text-[#7660A6] mt-2 text-4xl">75%</h3>
          </div>
          <div className="ml-8 sm:ml-24">
            <p className="text-gray-600">Expirados</p>
            <h1 className="text-zinc-50">0</h1>
          </div>
        </div>
      </div>
    </div>
  )
} 

export default Container
