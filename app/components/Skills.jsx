'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Skills () {
    return <div id='skills'>
        <h1 className='text-xl tracking-widest uppercase text-center'>
            Skills
        </h1> 
        <div className='w-full lg:h-screen'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='flex text-xl items-center justify-center'>
                    What I Can Do 
                </p>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../static/next.png' 
                                width='64' 
                                height='64' 
                                alt='/ '/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Next.js</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../static/tailwindcss.png' 
                                width='64' 
                                height='64' 
                                alt='/ '/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Tailwindcss</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../static/html.png' 
                                width='64' 
                                height='64' 
                                alt='/ '/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../static/js.png' 
                                width='64' 
                                height='64' 
                                alt='/ '/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>JavaScript</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
}