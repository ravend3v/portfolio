'use client'
import Link from "next/link"
import Image from "next/image"
import GitHubIcon from "public/github.svg"
import LinkedInIcon from "public/linkedin.svg"

export default function Footer () {
    return <footer className=" mt-auto p-4 text-black font-serif text-xl border-t-2">
        <div className="text-center">
            <p>© 2023 Elias Ojala - All Rights Reserved</p>
        </div>
        
    </footer>
}