'use client';
import styles from './experience-section.module.css';
import { ExperienceObject } from '../Services/assetsService';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function ExperienceSection({ header, subheader, picUrls, alt, popupImg }: ExperienceObject) {
    //After the render, React assigns the DOM node to ref.current.
    const ref = useRef(null);
    //This hook monitors the element attached to ref.
    //isInView becomes true when the element is visible on screen.
    //{ once: true } means: isInView will only become true the first time the element enters the viewport.
    const isInView = useInView(ref, { once: true });
    //controls is like a remote control or handle you use to start, stop, or update animations imperatively.
    const controls = useAnimation();

    useEffect(() => {
        if (isInView && popupImg) {
            const timeout = setTimeout(() => {
                controls.start({
                    opacity: 1,
                    y: 0,
                    scaleY: 1,
                    scaleX: 1,
                    rotate:-0,
                    //Without a transition, the animation would just jump immediately from initial to animate values — no smooth movement.
                    transition: {
                        duration: 0.6,
                        delay: 0,
                        type: 'spring',
                        stiffness: 400,
                        damping: 20,
                    },
                });
            }, 800); // 1-second delay

            return () => clearTimeout(timeout);
        }
    }, [isInView, controls, popupImg]);

    return (
        <Container className={styles.mainContainer} ref={ref}>

            {popupImg && (
                <motion.div
                //This is the element's starting state — before animation begins.
                    initial={{ opacity: 0, y: -80, scaleY: 1.3, scaleX: 0.8, rotate:0 }}
                    //This is the element’s final state — where it animates to.
                     animate={controls}
                    style={{
                        position: 'absolute',
                        top: "2rem",
                        left: "22rem",
                        width: 50,
                        height: 50,
                        zIndex: 2,
                    }}
                >
                    <Image
                        src={popupImg}
                        alt="theme icon"
                        width={50}
                        height={50}
                    />
                </motion.div>
            )}
            <div className={styles.text}>
                <h1>{header}</h1>
                <p>{subheader}</p>
            </div>
            <Row>
                {picUrls.map((picUrl, index) => (
                    <Col key={index} xs={12} sm={12} md={6} lg={6} className={styles.col}>
                        <Image
                            src={picUrl}
                            alt={alt}
                            width={600}      // It's good to specify width & height for next/image
                            height={500}
                            objectFit="cover"
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
