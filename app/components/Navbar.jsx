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
                <p>Home</p>
            </Link>
            <Link href="/about">
                <p>About</p>
            </Link>
        </nav>
    </header>
}