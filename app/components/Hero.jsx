/* eslint-disable import/no-anonymous-default-export */
import Image from 'next/image'
import Image1 from 'public/img1.jpg'
import styles from 'header.module.css'

const { heroContent, heroWrapper, imageWrapper } = styles

export default function Hero() {
    return (
        <div className={heroWrapper}>
            <div className={imageWrapper}>
                <Image
                    priority
                    src={Image1}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    alt='Hero image'
                />
            </div>
        

            <div className={heroContent}>
                <h1>Hero Image</h1>
                <p>Test</p>
            </div>
        </div>
    );   
};