'use client'
import Link from "next/link"
import Image from "next/image"
import GitHubIcon from "public/github.svg"
import LinkedInIcon from "public/linkedin.svg"

export default function Footer () {
    return <footer class="border-2 mt-auto">
        <div class="text-center">
            <p>© 2023 Elias Ojala - All Rights Reserved</p>
        </div>
        <div class="flex justify-center p-2">
                <Link class="" target="_blank" href='https://github.com/ImRaven95'>
                    <Image
                        src={GitHubIcon}
                        alt="GitHub icon"
                        width={35}
                        height={35}
                    />
                </Link>

                <Link class="" target="_blank" href='https://www.linkedin.com/in/elias-ojala-08b47b248/'>
                    <Image
                        src={LinkedInIcon}
                        alt="LinkedIn icon"
                        width={35}
                        height={35}
                    />
                </Link>
            </div>
    </footer>
}