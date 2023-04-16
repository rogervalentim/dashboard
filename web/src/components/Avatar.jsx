import React from 'react';
import data from '../constants/data';

const Avatar = () => {
  return (
    <div>
        {data.dataAvatar.map((item) => (
            <div className="p-3" key={item.name}>
                <img className="w-[150px] rounded-full" src={item.photo} alt="Avatar" />
                <p className="text-zinc-50">{item.name}</p>
                <p className="text-zinc-50">{item.email}</p>
            </div>
        ))}
    </div>
  )
}

export default Avatar