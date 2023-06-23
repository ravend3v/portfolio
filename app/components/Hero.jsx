/* eslint-disable import/no-anonymous-default-export */
import Image from 'next/image'
import HeroImg from 'public/hero.jpg'
import styles from '../css/hero.module.css'

const { heroContent, heroWrapper, imageWrapper } = styles

export default function Hero() {
    return (
        <div className=''>
            <div class={heroWrapper}>
                <div class={imageWrapper}>
                    <Image
                        priority
                        src={HeroImg}
                        fill={true}
                        style={{objectFit: 'cover'}}   
                        alt='Hero image'
                    />
                </div>
                <div class={heroContent}>
                    <div className=' bg-zinc-900/25 p-2'>
                        <h1 class="text-center font-serif text-4xl text-slate-100">Elias Ojala</h1>
                        <p class="text-center font-serif text-2xl underline text-white">Fullstack developer</p>
                    </div>
                </div>
            </div>
        </div>
    );   
};