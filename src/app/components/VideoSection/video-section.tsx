'use client';

import styles from './video-section.module.css';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface VideoSectionProps {
    videoData: {
        src: string;
        title?: string;
    };
    textVideoData: {
        title1: string;
        title2: string;
        title3: string;
        text1: string;
        text2: string;
        text3: string;

    };
}

export default function VideoSection({ videoData, textVideoData }: VideoSectionProps) {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function checkMobile() {
            setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
        }
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);


    const [isMuted, setIsMuted] = useState(true);

    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null); // <<< NEW: ref for scroll tracking

    // <<< NEW: Scroll progress tied to containerRef
    const { scrollYProgress } = useScroll({
  target: containerRef,
  offset:  ["start end", "end start"],
});

    // <<< NEW: Animate opacity from 0 to 1 as scroll progresses
    const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 0.8, 1]);
    // <<< NEW: Animate x position from -100px (offscreen left) to 0 (final)

    const xMobile = useTransform(scrollYProgress, [0, 0.2], [-120, 0]);
const xDesktop = useTransform(scrollYProgress, [0, 1], [-400, 600]);

    const x = isMobile ? xMobile : xDesktop;

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = isMuted;
        }
    }, [isMuted]);

    const toggleMute = () => {
        if (videoRef.current) {
            const newMutedState = !videoRef.current.muted;
            videoRef.current.muted = newMutedState;
            setIsMuted(newMutedState);
        }
    };

    return (
        <div ref={containerRef} className={styles.videoWrapper}>
            {/* <<< NEW: wrap video container with motion.div */}
            <motion.div
                className={styles.videoContainer}
                style={{ opacity, x }}
            >
                <div className={styles.polaroidFrame}>
                    <video
                        src={videoData.src}
                        ref={videoRef}
                        autoPlay
                        muted={isMuted}
                        loop
                        controls
                        className={styles.videoFrame}
                        playsInline
                        title={videoData.title || 'Video'}
                    />
                    <Image
                        src="/VideoSection/polaroid-frame-logo.png"
                        alt="Polaroid Frame"
                        className={styles.polaroidImage}
                        aria-hidden="true"
                        draggable={false}
                        fill // Makes image fill the parent container
                        priority // Optional: preloads image for better UX
                        style={{ objectFit: 'contain', pointerEvents: 'none', userSelect: 'none' }}
                        sizes="354px"  // Matches your .polaroidFrame width
                    />
                    <button className={styles.soundToggleButton} onClick={toggleMute} style={{ marginTop: '10px' }}>
                        {isMuted ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                        </svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                            </svg>
                        }
                    </button>
                </div>


            </motion.div>
            <div className={styles.videoText}>
                <h2>{textVideoData.title1}</h2>
                <p>{textVideoData.text1}</p>
                <h2>{textVideoData.title2}</h2>
                <p>{textVideoData.text2}</p>
                <h2>{textVideoData.title3}</h2>
                <p>{textVideoData.text3}</p>
            </div>
        </div>
    );
}