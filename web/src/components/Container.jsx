import React from 'react'

const Container = () => {
  return (
    <div className="w-[94%] h-[200px] mt-10 rounded-md bg-[#1A1A26]">
        <div className="px-4">
        <p className="text-zinc-50 text-3xl ">Quotes</p>
        </div>
        <div className="flex mx-6">
        <div className="mt-16">
          <p className="text-gray-600">Draft (1)</p>
          <h3 className="text-zinc-50 mt-2 text-4xl">198.00</h3>
        </div>
        <div className="mt-16 mx-24"> 
        <p className="text-gray-600">Sent (2)</p>
        <h3 className="text-zinc-50 mt-2 text-4xl">487.00</h3>
        </div>
        <div className="mt-16 mx-24">
        <p className="text-gray-600">Accepted (1)</p>
            <h3 className="text-[#7660A6] mt-2 text-4xl">3,784.40</h3>
        </div>
        <div className="mt-16 mx-24">
          <p className="text-gray-600">Expired</p>
          <h1 className="text-zinc-50">-</h1>
        </div>
        </div>
    </div>
  )
} 

export default Container