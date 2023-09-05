'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import SkillItem from './SkillItem.jsx';
import htmlimg from 'static/html.png';
import tailwindimg from 'static/tailwindcss.png';
import nextimg from 'static/next.png';
import jsimg from 'static/js.png';


export default function Skills () {
    return <div id='skills'>
        <h1 className='pt-10 text-xl tracking-widest uppercase text-center'>
            Skills
        </h1> 
        <div className='w-full'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center m-8'>
                <p className='flex text-xl pb-2 items-center justify-center'>
                    What Technologies i know and use 
                </p>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                    <SkillItem 
                        iconImg={htmlimg} 
                        title='HTML'
                    />
                    <SkillItem
                        iconImg={jsimg}
                        title='JavaScript'
                    />
                    <SkillItem
                        iconImg={tailwindimg}
                        title='Tailwind CSS'
                    />
                    <SkillItem
                        iconImg={nextimg}
                        title='Next JS'
                    />

                </div>
            </div>
        </div>
    </div>
}