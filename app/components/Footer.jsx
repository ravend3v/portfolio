'use client'
import Link from "next/link"
import Image from "next/image"
import GitHubIcon from "public/github.svg"
import LinkedInIcon from "public/linkedin.svg"

export default function Footer () {
    return (
        <footer className="bg-[#0F1625] text-white mt-auto p-4 text-black font-serif text-xl border-t-2">
            <div className="text-center">
                <p>© 2023 Elias Ojala - All Rights Reserved</p>
            </div>
            <div className="flex justify-center px-10 pt-5 pb-5">
                <div className="flex justify-between">
                    <div className="flex flex-row space-x-10">
                        <Link className="bg-white rounded-xl" target="_blank" href='https://github.com/ImRaven95'>
                            <Image
                                src={GitHubIcon}
                                alt="GitHub icon"
                                width={35}
                                height={35}
                            />
                        </Link>
                        <Link className="bg-white rounded-xl" target="_blank" href='https://www.linkedin.com/in/elias-ojala-08b47b248/'>
                            <Image
                                src={LinkedInIcon}
                                alt="LinkedIn icon"
                                width={35}
                                height={35}
                            />
                        </Link>
                    </div>
                </div>
                
            </div>
            
        </footer>
    )
}