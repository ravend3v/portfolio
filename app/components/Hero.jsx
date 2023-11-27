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
    <div className='flex items-center justify-center h-screen mb-12 relative'>
      {/* Color half */}
      <div className='w-1/2 h-full bg-[#EEE2DC] flex items-center justify-center'>
        <div className='p-5 text-black z-[2] mt-[-10rem]'>
          <h2 className='text-5xl py-5 font-bold font-serif'><span className='text-white bg-[#05386B] px-1'>I'm</span> Elias Ojala</h2>
          <p className='text-2xl text-left'>A <span className='text-white font-bold bg-[#05386B] font-serif px-1'>Full-stack developer</span> </p>
        </div>
      </div>

      {/* Picture half */}
      <div className='w-1/2 h-full bg-cover bg-center bg-fixed custom-img'>
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/10 z-[2] mt-[-10rem]' />
      </div>
    </div>
  );
};
