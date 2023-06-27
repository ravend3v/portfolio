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
            <h2 className='py-4 text-center'>What I have Made</h2>
            <div className='grid md:grid-cols-2 gap-8'>

                <ProjectItem 
                    title='Personal Portfolio' 
                    backgroundImg={project1} 
                    projectUrl='/portfolio'
                />

            </div>
        </div>
    </div>
}