'use client'

import styles from './picture-belt.module.css';
import Image from 'next/image';
import WaveSeparator from '../../Services/assetsService'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';
interface Picture {
    src: string;
    alt: string;
}

interface PictureBeltProps {
    pictures: Picture[];
}

export default function PictureBelt({ pictures }: PictureBeltProps) {
    return (
        <div className={styles.waveWrapper}>
            <div className={styles.waveContainer1}>
                <WaveSeparator />
            </div>
            <Container fluid className={`p-0 ${styles.pictureBelt}`}>
                <Row className="g-0">
          {pictures.map((pic, index) => (
            <Col key={index} xs={12} sm={6} md={4} className={styles.pictureBeltItem}>
              <Image
                src={pic.src}
                alt={pic.alt}
                fill             // Replaces layout="responsive"
  style={{ objectFit: 'cover' }}
              />
            </Col>
          ))}
        </Row>
            </Container>
            <div className={styles.waveContainer2}>
                <WaveSeparator />
            </div>
        </div>
    );
}
