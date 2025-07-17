'use client';

import { useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './footprints.module.css';

const totalSteps = 8;

export default function Footprints() {
    const { scrollYProgress } = useScroll();
    const [visibleCount, setVisibleCount] = useState(-1);

    useEffect(() => {
        return scrollYProgress.onChange((latest) => {
            /* Converts the scroll progress into a whole number from 0 to totalSteps - 1. */
            const val = Math.floor(latest * (totalSteps - 1));
            setVisibleCount(val);
        });
    }, [scrollYProgress]);

    return (
        <div className={styles.footprintsContainer}>
            {Array.from({ length: totalSteps }).map((_, i) => {
                const index = i; // no reverse here
                //when visiblecount value is bigger than the index, the object becomes visible
                const isVisible = visibleCount >= index;

                return (
                    <div
                        key={index}
                        className={index % 2 === 0 ? styles.leftFoot : styles.rightFoot}
                        style={{
                            width: '30px',
                            height: '55px',
                            position: 'relative',
                            opacity: isVisible ? 1 : 0,
                            transition: 'opacity 0.3s ease',
                        }}
                    >
                        <Image
                            src="/footprint.png"
                            alt="footprint"
                            width={30}
                            height={55}
                            style={{ objectFit: 'contain' }}
                            priority={false}
                        />
                    </div>
                );
            })}
        </div>
    );
}