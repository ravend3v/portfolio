/* eslint-disable import/no-anonymous-default-export */
'use client'
import Image from 'next/image'
import Link from 'next/link'
import GitHubIcon from 'public/github.svg'
import LinkedInIcon from 'public/linkedin.svg'
import useDownloader from 'react-use-downloader'


export default function Hero() {
    const { size, elapsed, percentage, download, cancel, error, isInProgress } = useDownloader();
    
    const fileUrl = "public/Elias_Ojala_CV.pdf"
    const filename = "Elias_Ojala_Resume.pdf"

    return (
        <div className='flex  items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/20 z-[2] mt-[-10rem]' />
                <div className='p-5 text-white z-[2] mt-[-10rem]'> 
                    <h2 className='text-5xl py-5 font-bold font-serif'><span className='bg-black px-1'>Im</span> Elias Ojala</h2>
                    <p className=' text-xl text-center'>A <span className='bg-black px-1'>Fullstack developer</span> </p>  
                    <div className="flex py-4 space-x-4 justify-center">
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
                    <div className='flex items-center justify-center'>
                        <button onClick={() => download(fileUrl, filename)}>
                            <span className='bg-emerald-600 px-2 py-1 rounded hover:bg-emerald-700'>Resume</span>
                        </button> 
                    </div>  
                </div>
            </div>

    );   
};