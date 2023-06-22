'use client' 
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import GitHubIcon from 'public/github.svg'


const metadata = {
    title: 'Elias Ojala',
    description: 'Navbar component',
}

export default function Navbar() {

    return <header>
        <nav className='flex flex-col border-2 p-2 justify-center items-center'>
            <div className='text-center'>
                <h2>{metadata.title}</h2>
            </div>
            <div className="flex">
                <Link target="_blank" href='https://github.com/ImRaven95'>
                    <Image
                        src={GitHubIcon}
                        alt="GitHub icon"
                        width={35}
                        height={35}
                    />
                </Link>
            </div>
        </nav>
    </header>
}