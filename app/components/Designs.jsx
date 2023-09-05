import React from 'react'
import Image from 'next/image.js';
import Link from 'next/link';
import DesignItem from './DesignItem';
import wireFrame from 'static/wireframe.png';

export default function Designs() {
  return <div id="designs" className='w-full'>
        <h1 className='text-xl pt-8 tracking-widest uppercase text-center'>
            UI/UX Designs
        </h1>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-center'></p>
            <h2 className='py-4 text-center'></h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <DesignItem
                    backgroundImg={wireFrame}
                    title='Portfolio Wireframe'
                    projectUrl='/'
                />
                
            </div>
        </div>
    </div>
}

