import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function DesignItem({title, backgroundImg}) {
    return (
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl rounded-xl p-4 group hover:bg-gradient-to-r from-[#A40606] to-[#D98324]'>
            <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
            </div>
        </div>
    )
        
    
}