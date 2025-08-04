'use client';

import { useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './footprints.module.css';
/*
  Footprints appear one by one as the user scrolls.

  - We render all 8 steps from the start, but with opacity 0.
  - As the user scrolls, scrollYProgress (from Framer Motion) updates.
  - Inside useEffect, we convert the scroll progress (0 to 1)
    into a whole number between 0 and 7 using Math.floor.
  - This number becomes `visibleCount`, telling us how many steps should be visible.
  - On each render, we check: if a step’s index is less than or equal to visibleCount,
    we show it (opacity 1); otherwise, it stays hidden (opacity 0).
  - The DOM nodes don’t change — only their opacity does.
*/

const totalSteps = 8;

export default function Footprints() {
    const { scrollYProgress } = useScroll();
    const [visibleCount, setVisibleCount] = useState(-1);

    useEffect(() => {
        return scrollYProgress.on("change", (latest) => {
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