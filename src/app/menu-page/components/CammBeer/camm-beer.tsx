'use client';
import styles from './camm-beer.module.css'
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import { WeightOption } from '@/app/Services/menuItems';
import { motion } from 'framer-motion';

interface Props {
    title: string,
    subtitle: string,
    description: string,
    priceOptions: WeightOption[]
}

export default function CammBeer({ title, subtitle, description, priceOptions }: Props) {

    return (
        <Container className={styles.container}>
            <Row>
                {/* xs={12} makes columns full width (stacked) on small/mobile screens,
            md={6} makes columns take 50% width (side-by-side) on medium and larger screens. */}
                <Col xs={12} md={6} className={styles.imageContainer}>
                    <motion.img
                        src="/rays.png"
                        alt="rays"
                        className={styles.rays}
                        initial={{ scale: 0.5, opacity: 0.6, rotate: 0 }}
                        animate={{
                            rotate: 360,
                            scale: [1.3, 1.8, 1.3]  // pulse scale up and down smoothly
                        }}
                        transition={{
                            rotate: {
                                duration: 5,
                                ease: "linear",
                                repeat: Infinity,
                                repeatType: "loop"
                            },
                            scale: {
                                duration: 5,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatType: "mirror"  // goes 0.5 -> 1.5 -> 0.5 continuously
                            }
                        }}
                    />
                    <Image
                        src={'https://res.cloudinary.com/dvr9t29vj/image/upload/v1753085946/CAMM-la-biurra-degli-eroi_1_x48wty.png'}
                        alt='cammBeer'
                        width={300}
                        height={300}
                        className={styles.beerImage} />
                    <motion.img
                        src="/best-seller.png"
                        alt="best-seller"
                        className={styles.stamp}
                        initial={{ y: -100, scale: 0.5, opacity: 0 }}
                        whileInView={{ y: 0, scale: 1.2, opacity: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 800,
                            damping: 20,
                            delay: 0.8
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                    />
                </Col>
                <Col xs={12} md={6} className={styles.cammText}>
                    <h2>
                        {title}
                    </h2>
                    <h3>
                        {subtitle}
                    </h3>
                    <p>{description}</p>
                    <strong>Prezzi:</strong>
                    <ul>
                        {priceOptions.map((option, index) => (
                            <li key={index}>
                                {option.weight} ml - €{option.price.toFixed(2)}
                            </li>
                        ))}
                    </ul>

                </Col>
            </Row>
        </Container>
    )

}