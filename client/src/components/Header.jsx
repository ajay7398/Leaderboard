import React from 'react';
import AddUserForm from './AddUserForm';
import { useState } from 'react';
const Header = () => {
     const [show,setShow]=useState(false);
  return (
    <header className="px-3 flex items-center justify-between lg:px-6 py-4 bg-white text-black shadow-md">
      <h1 className=" font-bold text-slate-600 text-[16px] lg:text-xl">
        🏆 Leaderboard App
      </h1>
      <button onClick={()=>setShow(!show)} className=" text-[14px] text-white bg-orange-300 hover:bg-orange-400 font-semibold px-2 py-1 lg:px-4 lg:py-2 rounded-md transition">
        ➕ 
      </button>
      {
        show &&   <AddUserForm setShow={setShow}/>
      }
   
    </header>
  );
};
 
export default Header;
