import React from 'react'
import Image from 'next/image.js';

function SkillItem({iconImg, title}) {
  return (
    <div>
        <div className='bg-[#97AABD] bg-black/10 text-white p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image 
                        src={iconImg} 
                        width='64' 
                        height='64' 
                        alt='/ '
                    />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>{title}</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SkillItem