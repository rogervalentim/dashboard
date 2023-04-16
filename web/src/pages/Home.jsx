import React from "react";
import Box from "../components/Box";
import Colaboradores from "../components/Colaboradores";
import ColaboradoresChart from "../components/ColaboradoresChart";
import Container from "../components/Container";
import data from "../constants/data";

const Home = () => {
  return (
    <div className="flex-1 h-[1300px]  bg-[#04060D] w-full p-6">
      <h1 className="text-zinc-50 mx-2">Dashboard</h1>
      <div className="grid grid-cols-4 w-full rounded-md mt-10">
        {data.dataDashboard.map((item) => (
          <Box
            key={item.id}
            title={item.title}
            quantity={item.quantity}
            icon={item.icon}
          />
        ))}
      </div>
      <Container />
      <div className="flex">
      <ColaboradoresChart />
      <Colaboradores />
      </div>
    </div>
  );
};

export default Home;
