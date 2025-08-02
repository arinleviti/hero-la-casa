'use client';
import styles from './story-block.module.css';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { StoryBlock} from '../../Services/our-story';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';

export function StoryBlockComponent({ year, title, text, imageUrl, reverse = false }: StoryBlock) {
    const controls = useAnimation();

    const [ref, inView] = useInView({ threshold: 0.4 });

    if (inView) controls.start('visible');

    return (
        <motion.div
            ref={ref}
            className={`${styles.block} ${reverse ? styles.reverse : ''}`}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
        >
            <Container fluid className={styles.blockContainer}>
                <Row className={`${reverse ? 'flex-row-reverse' : ''} align-items-center`}>
                    <Col md={6} className={styles.imageWrapper}>
                        <Image
                            src={imageUrl}
                            alt={`Storia del ${year}`}
                            width={600} // larger than before
                            height={400}
                            className={styles.image}
                        />
                    </Col>
                    <Col md={6} className={styles.textWrapper}>
                        <div className={styles.titleWrapper}>{title}</div>
                        <h2 className={styles.year}>{year}</h2>
                        <p className={styles.text}>{text}</p>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    )
}
