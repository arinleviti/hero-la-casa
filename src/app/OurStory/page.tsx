'use client';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './page.module.css';
import { StoryBlock, storyBlocks } from '../Services/our-story';
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
            <Container>
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





export default function StoryPage() {
    return (
         <div className={styles.storyPage}>
        {storyBlocks.map((block, index) => (
            <div style={{ marginBlock: '8rem' }} key={index}>
            <StoryBlockComponent key= {index} title={block.title} year= {block.year} text={block.text} imageUrl={block.imageUrl} reverse={block.reverse} />
        </div>
        ))}
        </div>
    )
}

