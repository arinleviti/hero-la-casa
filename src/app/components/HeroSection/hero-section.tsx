'use client'

import Image from 'next/image';
import styles from './hero-section.module.css';
import { Button } from 'react-bootstrap';
/* import { motion } from 'framer-motion'; */

interface HeroSectionProps {
  textData: {
    title1: string;
    title2: string;
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
                <h1>{textData.title1}</h1>
                <h1>{textData.title2}</h1>
                <h3>{textData.text}</h3>
                <div className={styles.buttonContainer}>
                  <Button className={styles.reserveButton}>
                    RISERVA UN TAVOLO
                  </Button>
                </div>
            </div>
            <div className={styles.heroImage}>
              {/* <motion.div
              animate= {{y: [0,-7,0]}}
              transition= {{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              > */}
                <Image src={imageData.src} alt={imageData.alt} width={550} height={550} />
               {/*  </motion.div> */}


            </div>
            
              
            
        </div>
    )
}