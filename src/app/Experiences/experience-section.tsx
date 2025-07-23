'use client';
import styles from './experience-section.module.css';
import { ExperienceObject } from '../Services/assetsService';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ExperienceSection({ header, subheader, picUrls, alt, popupImg }: ExperienceObject) {
    console.log("popupImg:", popupImg);

    return (
        <Container className={styles.mainContainer}>

            {popupImg && (
                <motion.div
                    initial={{ scale: 0, rotate: -30, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    style={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
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
