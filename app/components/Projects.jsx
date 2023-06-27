'use client'
import React, { useEffect, useState } from 'react';
import Link from "next/link"
import ProjectItem from "./ProjectItems.jsx"
import project1 from "static/portfolio.png"
import Image from 'next/image.js';


export default function Projects () {
    return <div id="projects" className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-center'>Projects</p>
            <h2 className='py-4 text-center'>What I have Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>

                <div className='relative flex items-center justify-center h-auto w-full shadow-xl rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                    <Image className='rounded-xl group-hover:opacity-10' src={project1} alt='/' />
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h3 className='text-2xl text-white tracking-wider text-center'>Personal Portfolio</h3>
                        <p className='pb-4 pt-2 text-white text-center'>Next JS & Tailwindcss</p>
                        <Link href='/'>
                            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
                                More Info
                            </p>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    </div>
}