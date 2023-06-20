'use client' 
import React, { useState } from 'react'
import Link from 'next/link'

const metadata = {
    title: 'Navbar',
    description: 'Navbar component',
}

export default function Navbar() {

    return <header>
        <nav>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
        </nav>
    </header>
}