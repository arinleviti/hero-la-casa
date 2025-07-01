'use client'

import Image from 'next/image';
import styles from './hero-section.module.css';

interface HeroSectionProps {
  textData: {
    title: string;
    text: string;
  };
  imageData: {
    src: string;
    alt: string;
  };
}

export default function HeroSection({ textData, imageData }: HeroSectionProps) {
    return (
        <div className={styles.heroWrapper}>
            <div className={styles.heroText}>
                <h1>{textData.title}</h1>
                <h3>{textData.text}</h3>
            </div>
            <div className={styles.heroImage}>
                <Image src={imageData.src} alt={imageData.alt} width={650} height={500} />
            </div>
        </div>
    )
}