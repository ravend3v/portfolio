'use client'
import React, { useEffect, useState } from 'react';
import Link from "next/link"
import ProjectItem from "./ProjectItems.jsx"
import project1 from "static/images/portfolio.png"
import Image from 'next/image.js';


export default function Projects () {
    return <div id="projects" className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-center'>Projects</p>
            <h2 className='py-4 text-center'>What I have Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>

                <div className='relative flex items-center justify-center h-auto w-full shadow-xl rounded-xl p-4 group hover:bg-gradient-to-r from-[#] to-[#]'>
                    <Image className='rounded-xl group-hover:opacity-10' src={project1} alt='/' />
                </div>

            </div>
        </div>
    </div>
}