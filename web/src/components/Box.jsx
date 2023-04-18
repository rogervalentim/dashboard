import React from 'react'

const Box = ({title, quantity, icon}) => {
  return (
    <div className="bg-[#1A1A26] rounded-md w-[250px] h-[200px] items-center p-4 1">
        <div className="items-center">
        <div className="bg-[#04060D] w-[50px] h-[50px] flex justify-center text-zinc-50">
         <img className="w-[25px]" src={icon}  />
        </div>
        <div className="flex flex-col">
        <h4 className="text-gray-600 mt-2">{title}</h4>
        <h2 className="text-zinc-50 text-4xl mt-2">{quantity}</h2>
        </div>
        </div>
    </div>
  )
}

export default Box