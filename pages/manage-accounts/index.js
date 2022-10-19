import React from 'react'
import { DashboardLayout } from '../../components'
import { useState } from 'react'
import {Users,Partners} from '../../components'
import { ChevronDownIcon, SearchIcon, DownloadIcon } from "@heroicons/react/outline";
const ManageAccounts = () => {
  const [activeButton,setActiveButton]=useState("users")

  const Search = (e) => {
    
  };
  return (
    <DashboardLayout>
      <div className='flex space-x-5 mb-4'>
     
        <button onClick={(()=>setActiveButton("users"))} className={`${activeButton=== "users" ? "bg-[#DCDCFF] text-[#4543A5]": "bg-[#EEEEEE] text-[#BBBBBB]" } bg-[#DCDCFF] p-4 px-4 md:p-6 md:px-10 rounded-md  flex items-center align-middle justify-center text-xl md:text-2xl`}>
          Users
          <div className={` ${activeButton=== "users" ? "bg-[#4543A5]": "bg-[#BBBBBB]" } ml-2 text-white md:text-[14px] text-[10px] rounded-md p-2 h-6 flex align-middle items-center`}>32.8k</div>
        </button>
       
        <button onClick={(()=>setActiveButton("partners"))} className={`${activeButton=== "partners" ? "bg-[#DCDCFF] text-[#4543A5]": "bg-[#EEEEEE] text-[#BBBBBB]" } bg-[#DCDCFF] p-4 px-4 md:p-6 md:px-10 rounded-md text-[#4543A5] flex items-center align-middle justify-center text-xl md:text-2xl`}>
          Partners
          <div className={` ${activeButton=== "partners" ? "bg-[#4543A5]": "bg-[#BBBBBB]" } ml-2 text-white md:text-[14px] text-[10px] rounded-md p-2 h-6 flex align-middle items-center`}>16.8k</div>
        </button>
      </div>

      <div className='bg-white p-8 shadow'>
        <div className='hidden md:flex justify-between mb-8'>

      <div className='flex justify-start xl:w-2/3   '>
        <div className='flex items-center  justify-start w-fit border border-[#DCDCFF] lg:mr-8 md:mr-2    rounded-md'>
          <div className='bg-[#4543A5] border border-l-[#DCDCFF] rounded-l-md border-r-none p-2 text-white whitespace-nowrap cursor-pointer'>View All</div>
          <div className='flex items-center border border-r-[#DCDCFF] justify-start p-2 cursor-pointer'>
            <p>Status</p>
            <ChevronDownIcon className="w-4 text-[#222222]"/>
            </div>
            <div className='flex items-center justify-start  p-2 border border-r-[#DCDCFF] whitespace-nowrap cursor-pointer'>
            <p>Last Active</p>
            <ChevronDownIcon className="w-4 text-[#222222]"/>
            </div>
        </div>
         <div className="flex w-1/2   space-x-2  items-center border border-[#DCDCFF] bg-white rounded-md p-2">
                <SearchIcon className="text-primary w-5 md:w-6 mr-1" />
                <input
                  type="text"
                  value=""
                  onChange={Search}
                  placeholder="Search..."
                  
                  className="w-full h-full  outline-none text-base placeholder:text-[#959595] placeholder:text-[8px] md:placeholder:text-base"
                />
              </div>
      </div>

      <div className='border border-[#DCDCFF] p-2 bg-white whitespace-nowrap rounded-md  flex items-center'>
        <DownloadIcon className="w-6 text-[#222222] m-0 "/>
        Download CSR

      </div>
      </div>

        {/* mobile */}
      <div className='md:hidden mb-4'>
      <div className='flex items-center  justify-start w-full border border-[#DCDCFF] lg:mr-8 md:mr-2 text-center    rounded-md'>
          <div className='bg-[#4543A5] border border-l-[#DCDCFF] rounded-l-md border-r-none p-2 text-white whitespace-nowrap cursor-pointer w-1/3 text-center'>View All</div>
          <div className='flex items-center justify-center border border-r-[#DCDCFF]  p-2 cursor-pointer w-1/3 text-center'>
            <p>Status</p>
            <ChevronDownIcon className="w-4 text-[#222222] ml-2"/>
            </div>
            <div className='flex items-center justify-center  p-2 border border-r-[#DCDCFF] whitespace-nowrap cursor-pointer w-1/3 text-center '>
            <p>Last Active</p>
            <ChevronDownIcon className="w-4 text-[#222222] ml-2"/>
            </div>
        </div>

        <div className='flex mt-4 space-x-2 justify-between items-center  '>
        <div className="flex w-2/3  space-x-2  items-center border border-[#DCDCFF] bg-white rounded-md p-2">
                <SearchIcon className="text-primary w-5 md:w-6 mr-1" />
                <input
                  type="text"
                  value=""
                  onChange=""
                  placeholder="Search..."
                  
                  className="w-full h-full  outline-none text-base placeholder:text-[#959595] placeholder:text-base"
                />
              </div>
              <div className='border border-[#DCDCFF]  p-2 bg-white whitespace-nowrap rounded-md   flex items-center'>
        <DownloadIcon className="w-6 text-[#222222] m-0 "/>
        Download CSR
        </div>

        </div>

      </div>
      {/* end of mobile */}

     {activeButton==="users" ? <Users/> : <Partners/>}
     </div>
      </DashboardLayout>
  )
}
export default ManageAccounts
