'use client'
import Image from 'next/image'
import closeBox from '../../utils/assets/close.png'
import filter from '../../utils/assets/filter.png'

import ReportTable from './Table'

const DailogBox  = ({close}) => {
  
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white rounded-md w-[90%] h-[600px] p-4">
            <div className="flex justify-center ">

            <h2 className="text-2xl mb-4 text-center font-semibold p-2">Recently Generated Reports</h2>
            <div className="flex absolute right-28">
           <Image src={filter} alt="filter"  className="mx-auto w-6 h-6 cursor-pointer " />
           <Image src={closeBox} alt="closebox"  className="mx-auto w-6 h-6 cursor-pointer ml-8"  onClick={close}/>
            </div>
            </div>

           <ReportTable/>
             
           
          </div>
        </div>
  )
}

export default DailogBox