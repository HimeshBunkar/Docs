import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";


function Card() {
  return (
    <div className='relative w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white px-8 py-10 overflow-hidden'>
        <FaFileAlt/>
        <p className='mt-5 text-sm font-semibold leading-tight '>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex item-center justify-between py-3 px-8 mb-3'>
                <h5>0.4mb</h5>
                <span className='bg-zinc-600 h-7 w-7 justify-center flex items-center rounded-full'>
                    <MdFileDownload size=".7em" color='#fff'/>
                </span>
            </div>
            <div className='tag w-full py-4 bg-green-500 flex item-center justify-center'>
                <h3 className='text-sm font-semibold'>Download Now</h3>
            </div>
        </div>
    </div>
  )
}

export default Card
