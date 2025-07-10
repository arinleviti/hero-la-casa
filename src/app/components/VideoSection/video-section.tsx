'use client';

import styles from './video-section.module.css';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { easeInOut, motion, useScroll, useTransform, Variants} from 'framer-motion';
import Link from 'next/link';

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

const textVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 1,  // stagger appearance by 0.3s per item
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const sparkleVariants: Variants = {
  hidden: { opacity: 0, rotate: 0 },
  visible: {
    opacity: [1, 1, 0], // fade in, hold, then fade out
    rotate: [0, 600, 600], // spin once
    transition: {
      duration: 1.5,
      ease: easeInOut,
      times: [0, 0.85, 1],
    },
  },

};
const highlightImageVariants: Variants = {
  hidden: {
    opacity: 0.6,
    transform: 'scaleX(0)', // ✨ full transform string
    transformOrigin: 'left center',
  },
  visible: {
    opacity: 0.6,
    transform: 'scaleX(1)', // ✨ full transform string
    transition: {
      duration: 1.2,
      ease: 'easeInOut',
    },
  },
};


const arrowVariants: Variants = {
  hidden: { opacity: 0, x: 0 },
  visible: {
    opacity: 1,
    x: [0, -5, 5, -5, 0],
    transition: {
      opacity: { duration: 0.5, ease: "easeInOut" },
      x: {
        duration: 2,
        ease: "linear",  // linear easing = constant speed
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  },
};
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
  const containerRef = useRef<HTMLDivElement>(null); // <<< ref for scroll tracking

  //Scroll progress tied to containerRef
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });


  // <<< NEW: Animate opacity from 0 to 1 as scroll progresses
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 0.8, 1]);
  const xMobile = useTransform(scrollYProgress, [0, 0.2], [-120, 0]);
  const xDesktop = useTransform(scrollYProgress, [0, 0.4], [-400, 0]);

  const x = isMobile ? xMobile : xDesktop;

  const toggleMute = () => {
    setIsMuted(prev => !prev);
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
        {[ // array for mapping, makes it easier to apply stagger
          { title: textVideoData.title1, text: textVideoData.text1, extra: 'sparkles' },
          { title: textVideoData.title2, text: textVideoData.text2, /* extra: 'wow' */ },
          { title: textVideoData.title3, text: textVideoData.text3, extra: 'highlight' },
        ].map(({ title, text, extra }, i, arr) => {
          const isLast = i === arr.length - 1;

          if (isLast) {
            return (
              <Link key={title} href="/menu-page" passHref>
                <motion.div
                  custom={i}
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.8 }}
                  className={styles.textBlock}
                >
                  <h2 className={styles.highlightWrapper}>
                    <span className={styles.highlightedText}>{title}</span>
                    <div className={styles.highlight}>
                      <motion.div
                        className={styles.highlightInner}

                      >
                        {/* The actual image */}
                        <Image
                          src="/VideoSection/highlight.png"
                          alt="highlight"
                          className={styles.highlightImage}
                          width={300}
                          height={40}
                          priority
                        />

                        {/* The sliding mask */}
                        <motion.div
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            height: '100%',
                            width: '100%',
                            backgroundColor: '#edd5c3',  // or your background color
                            zIndex: 2,
                          }}
                          initial={{ x: 0 }}
                          whileInView={{ x: '100%' }}
                          viewport={{ once: true, amount: 0.6 }} // triggers when 100% of it is visible
                          transition={{ duration: 0.6, ease: 'easeInOut', delay: 2.5 }}
                        />
                      </motion.div>
                    </div>
                  </h2>
                  <p>{text}</p>
                </motion.div>
              </Link>
            );
          }
        
          return (

            <motion.div
              key={title}
              custom={i}
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}  // <-- Triggers when 50% visible, runs once
              className={styles.textBlock} // Optional, for spacing etc
            >
              <h2>{title}</h2>
              <p>{text}</p>

              {/* Sparkles and WOW fade out after 1 second */}
              {(extra === 'sparkles' || extra === 'wow' || extra === 'arrow') && (
                <motion.img
                  src={`/VideoSection/${extra}.png`}
                  alt={extra}
                  className={styles[extra]}
                  variants={
                    extra === 'sparkles'
                      ? sparkleVariants
                      : extra === 'wow'
                        ? highlightImageVariants
                        : arrowVariants
                  }
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.6 }}
                />
              )}
            </motion.div>
          );
        })}

      </div>

    </div>
  );
}