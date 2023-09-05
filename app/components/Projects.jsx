'use client'
import React, { useEffect, useState } from 'react';
import Link from "next/link"
import ProjectItem from "./ProjectItems.jsx"
import Image from 'next/image.js';
import project1 from 'static/project1.jpg';


export default function Projects () {
    return <div id="projects" className='w-full bg-gradient-to-r from-[#380036] to-[#0CBABA] shadow-myShadow'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl text-white tracking-widest uppercase text-center'>Projects</p>
            <h2 className='py-4 text-white text-center'>What I have Made</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem
                    backgroundImg={project1}
                    title='Project 1'
                    projectUrl='/'
                />
                
            </div>
        </div>
    </div>
}