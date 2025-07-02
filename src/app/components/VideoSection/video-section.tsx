'use client';

import styles from './video-section.module.css';
import Image from 'next/image';

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

    return (
        <div className={styles.videoWrapper}>
            <div className={styles.videoContainer}>
                <div className={styles.polaroidFrame}>
                    <video
                        src={videoData.src}
                        autoPlay
                        muted
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
                    />
                </div>
            </div>
            <div className={styles.videoText}>
                <h2>{textVideoData.title1}</h2>
                <p>{textVideoData.text1}</p>
                <h2>{textVideoData.title2}</h2>
                <p>{textVideoData.text2}</p>
                <h3>{textVideoData.title3}</h3>
                <p>{textVideoData.text3}</p>
            </div>
        </div>
    );
}