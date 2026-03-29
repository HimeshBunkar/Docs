import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import {motion, scale} from "framer-motion"


function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale : 1.2}} className='relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white px-8 py-10 overflow-hidden'>
        <FaFileAlt/>
        <p className='mt-5 text-sm font-semibold leading-tight '>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex item-center justify-between py-3 px-8 mb-3'>
                <h5>{data.filesize}</h5>
                <span className='bg-zinc-600 h-7 w-7 justify-center flex items-center rounded-full'>
                    {data.close ? <IoClose /> : <MdFileDownload size=".7em" color='#fff'/>}
                </span>
            </div>
            {data.tag.isOpen && (
                <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex item-center justify-center`}>
                    <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                </div>
                )
            }
        </div>
    </motion.div>
  )
}

export default Card
