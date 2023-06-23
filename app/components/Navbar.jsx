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
        <nav className='flex flex-col border-2 p-2'>
            <h1 className="text-center font-serif">
                {metadata.title}
            </h1>
        </nav>
    </header>
}