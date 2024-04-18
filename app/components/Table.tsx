'use client'
import download from '../../utils/assets/file.png'
import right from '../../utils/assets/right.png'
import left from '../../utils/assets/back.png'
import Image from 'next/image'
import { data } from '@/utils/Data'
import {useState} from 'react';
import Dropdown from './Dropdown'

const ReportTable = () => {
    const [currentPage, setCurrentPage] = useState<Number>(1);

   const [reportperpage,setReportperpage] = useState<Number>(5) 
   
    const indexOfLastReport = currentPage * reportperpage;
    const indexOfFirstReport = indexOfLastReport - reportperpage;
    const currentReport = data.slice(indexOfFirstReport, indexOfLastReport);

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        setReportperpage(selectedValue)
      };
    
    
     const paginate = (pageNumber:number) => setCurrentPage(pageNumber);   

    const nextPage = () => {
        if (currentPage < Math.ceil(data.length / reportperpage)) {
          setCurrentPage(currentPage + 1);
        }
      };
    
      const prevPage = () => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      };


   
  return (
    <div className="overflow-x-hidden mt-6  overflow-y-scroll h-[400px]">
      <table className="w-[1200px] text-center ">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4">Date</th>
            <th className="py-2 px-4">Report Name</th>
            <th className="py-2 px-4">Download</th>
          </tr>
        </thead>
        <tbody  >
          {currentReport.map((data, index) => (
            <tr key={index}  >
              <td className="py-2 px-4">{data.date} <span className="flex flex-col text-[14px] mr-6 text-gray-400">{data.time} </span> </td>
              <td className="py-2 px-4">{data.reportName}</td>
              <td className="py-2 px-4">
              <Image src={download} alt="filter"  className="mx-auto w-6 h-6 cursor-pointer " />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center mt-4 items-center absolute bottom-10 left-[40%]">
      <button onClick={prevPage} className={`mx-1 px-3 flex items-center py-1 border border-black text-black  rounded ${currentPage === 1 ? 'cursor-not-allowed' : ''}`} disabled={currentPage === 1}>    <Image src={left} alt="filter"  className="mx-auto w-3 h-3 cursor-pointer text-white mr-2 " /> Prev</button>
      {Array.from({ length: Math.ceil(data.length / reportperpage) }).map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`mx-1 px-3 py-1 rounded ${currentPage === index + 1 ? ' bg-orange-600 text-white' : '  border '}`}
              >
                {index + 1}
              </button>
            ))}
 <button onClick={nextPage} className={`mx-1 px-3 border border-black text-black py-1 rounded flex items-center ${currentPage === Math.ceil(data.length / reportperpage) ? ' cursor-not-allowed' : ''}`} disabled={currentPage === Math.ceil(data.length / reportperpage)}>Next  <Image src={right} alt="filter"  className="mx-auto w-4 h-4 cursor-pointer text-white " /></button>
 
<Dropdown handleChange={handleChange} />

      </div>

     

    </div>
  )
}

export default ReportTable