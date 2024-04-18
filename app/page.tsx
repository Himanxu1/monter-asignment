'use client'
import React, {useState} from 'react';
import DailogBox from './components/DailogBox';

export default function Home(){
  const [show, setShow] = useState(false)
  const handleShowClick = () =>{
    setShow(!show)
  }

  const closeDialog = () => {
    setShow(false);
  };

 
  return (
    <div  className="flex justify-center items-center mt-10 flex-col">
    <h1 className="text-3xl mb-52">Monter Assignment</h1>
    <button className="px-4 py-2 border border-black rounded hover:bg-black hover:text-white hover:border-none" 
    onClick={handleShowClick}
    >Show</button>
  {show && (
        <DailogBox close={closeDialog } />
        )}
    </div>
  );
}









