import React from 'react';

import Sidebar from './components/Sidebar';
import Home from './pages/Home';

import "./styles/global.css";

const App = () => {
  return (
    <div className="App">
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-60 bg-[#1A1A26] p-6">
          <Sidebar />
        </aside>
        <main className="flex-1 h-[1300px]  bg-[#04060D] w-full p-6">
          <Home />
        </main>
      </div>
    </div>
    </div>
  )
}

export default App