import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { TbEyeClosed } from "react-icons/tb";
import { motion } from "framer-motion";
import { TbNotes } from "react-icons/tb";
import { FaFileImport } from "react-icons/fa";
import { RiEyeLine } from "react-icons/ri";
import { PiNotebookFill } from "react-icons/pi";
import { VscGitPullRequestNewChanges } from "react-icons/vsc";
import { IoCloudUpload } from "react-icons/io5";


function Card({ data, reference, redValue, greenValue, addValue }) {

    return (
        <>
            {addValue && data.tag.tagColor != "emerald" && data.tag.tagColor != "rose" && (
                <motion.div drag dragMomentum={false} dragConstraints={reference} whileDrag={{ scale: 1.1 }} dragElastic={0.1} dragTransition={{ bounceStiffness: 800, bounceDamping: 10 }} className='relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-800 text-zinc-300 pt-10 px-8 overflow-hidden'>
                    <VscGitPullRequestNewChanges size="1.3em"/>
                    
                    <p className='mt-5 font-mono leading-tight'>write or Upload something...</p>
                    <div className='footer absolute w-full bottom-0 right-0 '>
                        <div className='flex items-center justify-between text-zinc-200 px-8 pb-4'>
                            <IoCloudUpload />
                            <TbEyeClosed size="1.3em" />
                        </div>

                        <div className={`tag w-full h-10 bg-sky-500 flex justify-center items-center`}>
                            <h3 className='font-sans font-semibold -mt-1 text-[13px]'>New File</h3>
                        </div>

                    </div>
                </motion.div>
            )}

            {greenValue && data.tag.tagColor === "emerald" && redValue === false && addValue === false &&(
                <motion.div drag dragMomentum={false} dragConstraints={reference} whileDrag={{ scale: 1.1 }} dragElastic={0.1} dragTransition={{ bounceStiffness: 800, bounceDamping: 10 }} className='relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-800 text-zinc-300 pt-10 px-8 overflow-hidden'>
                    {data.iconFile ? <FaFileImport /> : <PiNotebookFill size="1.2em" />}
                    <p className='mt-5 font-mono leading-tight'>{data.desc}</p>
                    <div className='footer absolute w-full bottom-0 right-0 '>
                        <div className='flex items-center justify-between text-zinc-200 px-8 pb-4'>
                            <h5>{data.iconFile ? data.filesize : null}</h5>
                            {data.close ? <RiEyeLine size="1.2em" /> : <TbEyeClosed size="1.3em" />}
                        </div>
                        {data.tag.isOpen && (
                            <div className={`tag w-full h-10 ${data.tag.tagColor === "rose" ? "bg-rose-600" : "bg-emerald-600"} flex justify-center items-center`}>
                                <h3 className='font-sans font-semibold -mt-1 text-[13px]'>{data.tag.tagTitle}</h3>
                            </div>
                        )}
                    </div>
                </motion.div>
            )}

            {redValue && data.tag.tagColor === "rose" && greenValue === false && addValue === false &&(
                <motion.div drag dragMomentum={false} dragConstraints={reference} whileDrag={{ scale: 1.1 }} dragElastic={0.1} dragTransition={{ bounceStiffness: 800, bounceDamping: 10 }} className='relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-800 text-zinc-300 pt-10 px-8 overflow-hidden'>
                    {data.iconFile ? <FaFileImport /> : <PiNotebookFill size="1.2em" />}
                    <div className=' mt-[12px] mb-[30px] rounded-[15px] overflow-hidden w-full h-[54%]'> <img className='h-[180%]  w-full ' src="src\assets\naruto.jpg" alt="" /></div>
                    <div className='footer absolute w-full bottom-0 right-0 '>
                        <div className='flex items-center justify-between text-zinc-200 px-8 pb-4'>
                            <h5>{data.iconFile ? data.filesize : null}</h5>
                            {data.close ? <RiEyeLine size="1.2em" /> : <TbEyeClosed size="1.3em" />}
                        </div>
                        {data.tag.isOpen && (
                            <div className={`tag w-full h-10 ${data.tag.tagColor === "rose" ? "bg-rose-600" : "bg-emerald-600"} flex justify-center items-center`}>
                                <h3 className='font-sans font-semibold -mt-1 text-[13px]'>{data.tag.tagTitle}</h3>
                            </div>
                        )}
                    </div>
                </motion.div>
            )}

            {redValue === false && greenValue === false && (
                <motion.div drag dragMomentum={false} dragConstraints={reference} whileDrag={{ scale: 1.1 }} dragElastic={0.1} dragTransition={{ bounceStiffness: 800, bounceDamping: 10 }} className='relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-800 text-zinc-300 pt-10 px-8 overflow-hidden'>
                    {data.iconFile ? <FaFileImport /> : <PiNotebookFill size="1.2em" />}
                    {data.tag.tagColor === "rose"? <div className=' mt-[12px] mb-[30px] rounded-[15px] overflow-hidden w-full h-[54%]'> <img className='h-[180%]  w-full ' src="src\assets\naruto.jpg" alt="" /></div> : <p className='mt-5 font-mono leading-tight'>{data.desc}</p>}
                    <div className='footer absolute w-full bottom-0 right-0 '>
                        <div className='flex items-center justify-between text-zinc-200 px-8 pb-2'>
                            <h5>{data.iconFile ? data.filesize : null}</h5>
                            {data.close ? <RiEyeLine size="1.2em" /> : <TbEyeClosed size="1.3em" />}
                        </div>
                        {data.tag.isOpen && (
                            <div className={`tag w-full h-10 ${data.tag.tagColor === "rose" ? "bg-rose-600" : "bg-emerald-600"} flex justify-center items-center`}>
                                <h3 className='font-sans font-semibold -mt-1 text-[13px]'>{data.tag.tagTitle}</h3>
                            </div>
                        )}
                    </div>
                </motion.div>
            )}



        </>
    )
}

export default Card