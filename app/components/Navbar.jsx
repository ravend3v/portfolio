'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const metadata = {
  title: 'My Portfolio',
  description: 'Navbar component',
};

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
        <Link href='/'>
          <h1 style={{color: `${textColor}`}} className='font-bold text-4xl font-serif'>
              {metadata.title}
          </h1>
        </Link>
        <ul style={{color: `${textColor}`}} className='hidden sm:flex space-x-2'>
          <li className='px-2 rounded-lg hover:bg-black hover:text-white'>
            <Link href='/#who_am_i'>Who am I?</Link>
          </li>
          <li className='px-2 rounded-lg hover:bg-black hover:text-white'>
            <Link href='/#skills'>Skills</Link>
          </li>
          <li className='px-2 rounded-lg hover:bg-black hover:text-white'>
            <Link href='/#projects'>Projects</Link>
          </li>
          <li className='px-2 rounded-lg hover:bg-black hover:text-white'>
            <Link href='/#education'>Education</Link>
          </li>
        </ul>

        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? <AiOutlineClose size={20} style={{color: `${textColor}`}} /> : <AiOutlineMenu size={20} style={{color: `${textColor}`}}/>}
        </div>
        {nav && (
          <div className='sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center text-white ease-in duration-300'>
            <ul>
              <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                <Link href='/#who_am_i'>Who am I?</Link>
              </li>
              <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                <Link href='/#skills'>Skills</Link>
              </li>
              <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                <Link href='/#projects'>Projects</Link>
              </li>
              <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                <Link href='/#education'>Education</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
